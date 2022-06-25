import React from 'react'
import { useNavigate } from 'react-router-dom'

const Left = () => {

    const navigate = useNavigate()

    const gotoCreate = () => {

        const path = "/Create"
        navigate(path)
    }

  return (
    <>
    
    
    <div className="left-options-container">

        <button className="create-thread-btn forum-btns" onClick={() => gotoCreate()}>Create</button>

        <div className="tt-container">

            <button className="threads-btn forum-btns">Topics</button>
            <button className="topics-btn forum-btns">Threads</button>
            
            {/* Popular topic */}
        </div>



    </div>
    
    
    </>
  )
}

export default Left