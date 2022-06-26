import React from 'react'
import { useNavigate } from 'react-router-dom'

const Topics = () => {

    const navigate = useNavigate()

    const topicsList = ["Python", "JavaScript", "C", "C++", "C#"]


    const gotoForum = () => {
    
        const path = "/Forum"
        navigate(path)
    
    }

  return (
    <>
    
        <button onClick={gotoForum}>Return</button>

        <div className="topics-root-container">
            <h1>Topics</h1>
            <div className="topics-main-container">
                
                {/* <div className="topic-container"> */}



                

                    { topicsList.map((topic, index) => {
                        return <div key={index} className="topic-container">{topic}</div>
                    })}
                    
                {/* </div> */}



            </div>

            
        </div>
        

    
    
    
    
    </>
  )
}

export default Topics