import React from 'react'

const ExpandedThread = ({ title, description, replies }) => {

  return (
    <>
    
        <div className="expandedthread-main-container">


            <h1>{title}</h1>
            <br/>
            <p>{description}</p>

            <br/>
            <ul>
                { replies.length > 0 ? 

                replies.map((reply, index) => {
                    return <li key={index}>{reply[index].reply_content}</li>
                })
                
                :

                console.log("No replies")
            
            
            }
            </ul>
        </div>
    
    
    </>
  )
}

export default ExpandedThread