import React, { useEffect, useState } from 'react'


// import './forum.css'


import ForumNav from './ForumNav'
import Hero from './Hero';
import Left from './Left'
import Right from './Right'

import Feed from './Feed';

const Forum = () => {









  return (
    <>

    <div className="forum-container">

        <ForumNav />
        <Hero />

        <div className="forum-options-container">

            <Left />
            <Right />


        </div>


        <div className="forum-feed">

            <Feed />

        </div>





    </div>

    
    
    
    
    
    
    </>
  )
}

export default Forum