import React, { useState } from 'react'

const Right = () => {

  const [threadList, setThreadList] = useState([])

  const latestSpark = () => {

    if (threadList.length > 0) {

      let newList = threadList.sort((b, c) => 

        parseInt(b.postdate) - parseInt(c.postdate)

      )

      setThreadList(newList)

    } else {

      console.log("List is empty for latest")
    }

  }


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
