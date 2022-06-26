import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sampleData from "../../Data";
import ExpandedThread from "../Components/ExpandedThread";


const headers = {
  'Content-Type' : 'application/json'
};

const Athread = () => {
  const { threadid } = useParams();

  const [athread, setAThread] = useState([]);

  // useEffect(() => {
  //   console.log("use effect for a thread done!");

  //   let specific_thread = sampleData.find((thread) => thread.id == threadid);

  //   setAThread([...athread, specific_thread]);
  // }, []);

  useEffect(() => {

    const url = `http://localhost:3001/getathread?threadid=${threadid}`

    axios.get(url, headers)
      .then(result => setAThread([result.data]))
      .catch(err => console.log(err))

  }, [])
  

  return (
    <>
      {/* <h1>hmm</h1> */}

      {athread.map((one_thread) => {
        return (
          <ExpandedThread
            key={one_thread._id}
            threadid={one_thread.id}
            thumbnail={one_thread.thumbnail}
            title={one_thread.title}
            description={one_thread.des}
            replies={one_thread.replies}
          />
        );
      })}
      {/*     
      <div className="athread-main-container">

        <h1>Specific Thread { threadid } </h1>

        <div className="athread-content-container">

          <ul className="reply-list-container">


          </ul>

          <button className="thread-reply-btn">Reply</button>
        </div>


      </div> */}
    </>
  );
};

export default Athread;
