import React from 'react'
import { useNavigate } from 'react-router-dom'
import forumlogo from '../Images/forumlogo.svg'

const ForumNav = () => {

  const navigate = useNavigate()

  const gotoHome = () => {

    const path = '/'
    navigate(path)

  }


  return (
    <>
    
    
    <div className="forum-nav-container">

      <img src={forumlogo} alt="forum-logo" />

      <button className="forum-nav-home-btn" onClick={() => gotoHome()}>Home</button>

    </div>
    
    
    
    
    
    </>
  )
}

export default ForumNav