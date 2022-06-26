import React from 'react'
import Thread from './Thread'

import sampleData from '../Data'
import { useEffect, useState } from 'react'
import axios from 'axios';




const headers = {
  'Content-Type' : 'application/json'
};





const Feed = () => {

  const [threadList, setThreadList] = useState([])


  useEffect(() => {

    if (threadList.length == 0) {

      const url = "http://localhost:3001/getthreads"

      axios.get(url, headers)
        .then(result => setThreadList(result.data))
        .catch(err => console.log(err))

      // setThreadList()
     
    }
    
    // console.log(threadList)
  }, [])

  console.log(threadList)
  return (
    <>
    
        {/* Every other thread has a different darker color n */}
        {/* <Thread />
        <Thread />
        <Thread /> */}

        <div>

            { threadList.length > 0 ?

                threadList.map((each_sample, index) => {
                console.log(each_sample._id)
                return <Thread key={index} id={each_sample._id} title={each_sample.title} description={each_sample.des} reply_count={each_sample.reply_count} />


                })


                :

                console.log("No data!")
                
        
            }

        </div>

    
    
    </>
  )
}

export default Feed