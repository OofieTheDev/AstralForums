import React from 'react'
import Reply from './Reply'

const ExpandedThread = ({ threadid, title, description, replies }) => {

  return (
    <>

        
    
        <div className="expandedthread-main-container">

            <dv>
                <h1>{title}</h1>
                <br/>
                <p>{description}</p>

                <br/>
                <ul>
                    { replies ?
                    
                    replies.length > 0 ? 

                    replies.map((reply, index) => {
                        return <li key={index}>{reply[index].reply_content}</li>
                    })
                    
                    :

                    console.log("No replies")

                    :

                    console.log("Does not have reply list")
                
                
                }
                </ul>                
            </dv>


            <Reply threadid={threadid} username={"Tral"} />


        </div>
    
    
    </>
  )
}

export default ExpandedThread