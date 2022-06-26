import React from 'react'
import  { FaUserCircle } from 'react-icons/fa'
import { BsChatRight } from 'react-icons/bs'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

// import sampleData from '../Data'

const Thread = ({ id, title, description, reply_count }) => {

    const navigate = useNavigate()

    // const { threadid } = useParams()



    const gotoThreadUsingID = (id) => {

        let path = `/Forum/t/${id}`
        // navigate(path)

        window.open(path, "_blank")

    }

  return (
    <>
    
    
        <div className="thread-container" onClick={() => gotoThreadUsingID(id)}>
        {/* target="_blank" */}

            <div className="avatar-text-container">

                {/* <img src={<FaUserCircle />} alt="" /> */}
                {/* <div className="thread-icon"> */}
                    <FaUserCircle className="thread-icon" />
                {/* </div> */}

                <div className="thread-text-container">
                    {/* <h2>It's a title</h2> */}
                    <h2>{title}</h2>

                    {/* <p className="thread-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quas saepe. Perspiciatis, aut reprehenderit? Autem libero dolores totam accusantium beatae.

                    </p> */}

                    <p className="thread-description">
                        {description}
                    </p>

                </div>

            </div>

            <div className="reply-bubble">
                {/* Replies */}
                <BsChatRight className="reply-bubble-icon" />
                {/* <p>1.1k</p> */}
                <p>{reply_count}</p>
            </div>

        </div>
    
    
    
    
    </>
  )
}

export default Thread