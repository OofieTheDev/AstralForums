import axios from 'axios'
import React, { useState } from 'react'


const headers = {
  'Content-Type':'application/json'
}

const Right = () => {

  const [threadList, setThreadList] = useState([])

  const latestSpark = () => {


    const url = "http://localhost:3001/getthreads"

    axios.get(url, headers)
      .then(result => {
        
        let resultList = result.data

        if (resultList.length > 0) {

          let newList = resultList.sort((b, c) => 

            parseInt(b.time_posted) - parseInt(c.time_posted)

          )

          setThreadList(newList)
            
          
        } else {

          console.log("list is empty for latest")

        }
      })

    // if (threadList.length > 0) {

    //   let newList = threadList.sort((b, c) => 

    //     parseInt(b.postdate) - parseInt(c.postdate)

    //   )

    //   setThreadList(newList)

    // } else {

    //   console.log("List is empty for latest")
    // }

  }

  console.log(threadList)
  const refreshSpark = () => {

    window.location.reload()
    
  }
  return (
    <>
    
    
        <div className="right-options-container">

            <button className="lr-btns" onClick={latestSpark}>Latest</button>
            <button className="lr-btns" onClick={refreshSpark}>Refresh</button>


        </div>
    
    
    
    </>
  )
}

export default Right


// import React from 'react'

// export const Right = () => {
//   return (
//     <div>Right</div>
//   )
// }
