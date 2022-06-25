import React from 'react'
import Thread from './Thread'

import sampleData from '../Data'

const Feed = () => {
  return (
    <>
    
        {/* Every other thread has a different darker color n */}
        {/* <Thread />
        <Thread />
        <Thread /> */}

        <div>

            { sampleData.length > 0 ?

                sampleData.map((each_sample, index) => {

                return <Thread key={index} id={each_sample.id} title={each_sample.title} description={each_sample.description} reply_count={each_sample.reply_count} />


                })


                :

                console.log("No data!")
                
        
            }

        </div>

    
    
    </>
  )
}

export default Feed