import React from 'react';
import { useRef, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import sampleData from "../Data";
// import { useInView } from "react-intersection-observer";

export default function HomePage() {
    // const { ref: myRef, inView: elementVis } = useInView();
    const myRef = useRef();
    const [ elementVis, setElementVis ] = useState(false);
    // console.log('elementVis', elementVis)
    // useEffect(() => {
    //     console.log('myRef', myRef.current)
    //     const observer = new IntersectionObserver(entries => {
    //         const entry = entries[0];
    //         setElementVis(entry.isIntersecting)
    //         console.log('entry', entry)
    //     })
    //     observer.observe(myRef.current);
    // }, [])
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => setElementVis(entry.isIntersecting));
        });
        observer.observe(myRef.current);
        return () => {
            if (myRef.current) {
                observer.unobserve(myRef.current);
            }
        }
      }, []);

    console.log(myRef)





    const navigate = useNavigate(); //For going to the Main Forum Page

    const gotoForum = () => {
  
      const path = './Forum'
      navigate(path)
      
    }

    return (
        <>
            <div className='trending-div'>
                <h1>Trending</h1>
                {sampleData.map((data) => {
                    return <div key={data.id} className='trending-data-div'>
                        <img className='thumbnail' src={data.thumbnail} alt='' />
                        <h2 className='trending-data-title'>{data.title}</h2>
                        <p className='trending-data-latest'><span className='trending-author'>{data.latest_author}</span> <span className='trending-time'>{data.latest_time}</span></p>
                        <p className='trending-data-des'>{data.description}</p>
                        <div className='reply-count-div'>
                            <p className='reply-count'><i className="far fa-comment"></i> <span className='reply-count-span'>{data.reply_count}</span></p>
                        </div>
                    </div>
                })}
            </div>
            <div className='topics-div'>
                <div className="topic-header">
                    {/* <p>{elementVis ? 'Yes' : "No"}</p> */}
                    <h1>Popular Forums</h1>
                    <p>Here, you can find the topic you're most passionate about and discuss it with like-minded people!</p>
                </div>
                
                <div ref={myRef} className={`topic-grid fade-in-section ${elementVis ? 'is-visible' : '' }`}>
                    <div className='topic-grid-item'>
                        <img src="https://www.freecodecamp.org/news/content/images/2021/08/chris-ried-ieic5Tq8YMk-unsplash.jpg" alt="" />
                        <div className='topic-grid-item-words'>
                            <h3>Python</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti saepe officiis debitis sit necessitatibus vitae earum molestias id temporibus minima? Dolorem consequatur soluta quos voluptatum?</p>
                        </div>
                    </div>

                    <div className='topic-grid-item'>
                        <img src="https://miro.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg" alt="" />
                        <div className='topic-grid-item-words'>
                            <h3>Web Development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti saepe officiis debitis sit necessitatibus vitae earum molestias id temporibus minima? Dolorem consequatur soluta quos voluptatum?</p>
                        </div>
                    </div>

                    <div className='topic-grid-item'>
                        <img src="https://prod-discovery.edx-cdn.org/media/course/image/9efb5a34-0460-4fb3-b08d-9b0f7392765c-05e3ede66f26.png" alt="" />
                        <div className='topic-grid-item-words'>
                            <h3>Linux</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti saepe officiis debitis sit necessitatibus vitae earum molestias id temporibus minima? Dolorem consequatur soluta quos voluptatum?</p>
                        </div>
                    </div>

                    <div className='topic-grid-item'>
                        <img src="https://academy.avast.com/hubfs/New_Avast_Academy/Hackers/Hacker-Thumb-a1.png" alt="" />
                        <div className='topic-grid-item-words'>
                            <h3>Ethical Hacking</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti saepe officiis debitis sit necessitatibus vitae earum molestias id temporibus minima? Dolorem consequatur soluta quos voluptatum?</p>
                        </div>
                    </div>
                </div>
            </div>









            <div className='browse-div'>
                <button className='browse-forums-btn' onClick={() => gotoForum()}>Browse All Forums</button>
            </div>
            
        </>
    )
}
