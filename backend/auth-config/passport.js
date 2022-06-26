const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const dbConnection = require("./db").dbConnection;
const User = dbConnection.models.User;
const validate = require("../utils/pwUtils").validate;

const verification = (username, password, done) => {
    console.log("Verification started.")
    User.findOne({username: username})
        .then((user) => {
            if (!user) {
                console.log("No such user.");
                return done(null, false);
            } else {
                console.log(user)
                validate(password, user.hash).then((validBool) => {
                    if (validBool) {
                        console.log("Logged in.");
                        return done(null, user);
                    } else {
                        console.log("Wrong password");
                        return done(null, false);
                    }
                });
                
            }
        })
}

const strategy = new LocalStrategy(verification);

passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((userId, done) => {
    User.findById(userId)
        .then((user) => {
            done(null, user);
        })
        .catch(err => done(err))
});