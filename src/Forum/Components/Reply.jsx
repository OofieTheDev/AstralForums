import React, { useState } from 'react'

import axios from 'axios';


const headers = {
    'Content-Type': 'application/json'
}

const Reply = ({ threadid, username }) => {


    const [ reply_content, setReplyContent ] = useState('');

    const replyToThread = (e) => {

        e.preventDefault()

        const url = "http://localhost:3001/replytothread"
        
        let replyDetails = {
            threadid:"62b81819b0cbbbb14f9b09cd",
            author:username,
            reply_content:reply_content
        }
        axios.post(url, replyDetails, headers);
        // navigate("/");
    }



    const handleReplyChange = (e) => {

        setReplyContent(e.target.value)
    }


    console.log(threadid)

  return (


    <>
        <form className='create-thread-form' onSubmit={replyToThread}>

            <p className='create-thread-label'>Reply</p>
            <textarea className='create-thread-area' rows='12' type="text" autoComplete="off" name='reply_content' value={reply_content} onChange={handleReplyChange}/>

            
            <button className='create-thread-btn' type='submit'>Reply</button>
        </form>
        {/* <button onClick={replyToThread}>REPLY TO A THREAD</button> */}
    
    </>
  )
}

export default Reply