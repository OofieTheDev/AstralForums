import { useState } from "react";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

const headers = {
    'Content-Type' : 'application/json'
};

const names = {
    TITLE: "title",
    TAGS: "tags",
    DESCRIPTION: "description"
}

export default function CreateThread() {
    const navigate = useNavigate();

    const [ title, setTitle ] = useState('');
    const [ tags, setTags ] = useState('');
    const [ description, setDescription ] = useState('');

    function handleChange(event) {
        const { name, value } = event.target;

        switch (name) {
            case names.TITLE:
                setTitle(value);
                break;
            case names.TAGS:
                setTags(value);
                break;
            case names.DESCRIPTION:
                setDescription(value);
                break;
            default:
                break;
        }
    }

    const createThread = (e) => {
        e.preventDefault();
        const url = "http://localhost:3001/createthread"
        let threadDetails = {
            title,
            tags: tags.trim().split(' '),
            des: description,
            author: 'Tral_JD',
            timePosted: new Date(),
            topic: "Web Development"
        }
        axios.post(url, threadDetails, headers);
        navigate("/");
    }

    return (
        <div className='create-thread-container'>
            <h1 className='create-thread-header'>Create a Thread</h1>
            <div className='create-thread-div'>
                <form className='create-thread-form' onSubmit={createThread}>
                    <p className='create-thread-label'>Title</p>
                    <input className='create-thread-input' type="text" autoComplete="off" name='title' value={title} onChange={handleChange}/>
                    <p className='create-thread-label'>Tags</p>
                    <input className='create-thread-input' type="text" autoComplete="off" name='tags' value={tags} onChange={handleChange}/>
                    <p className='create-thread-label'>Description</p>
                    <textarea className='create-thread-area' rows='12' type="text" autoComplete="off" name='description' value={description} onChange={handleChange}/>
                    <br />
                    <button className='create-thread-btn' type='submit'>Create Thread</button>
                </form>
            </div>
        </div>
        
    )
    
}