import React from 'react'
import { useNavigate } from 'react-router-dom'

const Left = () => {

    const navigate = useNavigate()

    const gotoCreate = () => {

        const path = "/CreateThread"
        navigate(path)
    }



    const gotoTopics = () => {

      const path = "/Topics"
      navigate(path)
    }

    const gotoThreads = () => {

      const path = "/Threads"
      navigate(path)
    }

  return (
    <>
    
    
    <div className="left-options-container">

        <button className="create-thread-btn forum-btns" onClick={() => gotoCreate()}>Create</button>

        <div className="tt-container">

            <button className="threads-btn forum-btns" onClick={gotoTopics}>Topics</button>
            <button className="topics-btn forum-btns" onClick={gotoThreads}>Threads</button>
            
            {/* Popular topic */}
        </div>



    </div>
    
    
    </>
  )
}

export default Left