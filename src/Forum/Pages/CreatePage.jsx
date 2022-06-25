import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreatePage = () => {

  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState("")
  const [descriptionValue, setDescriptionValue] = useState("")



  const inputChange = (event) => {

    let inputText = event.target.value;
    setInputValue(inputText)

    // console.log(inputValue)

  }

  const onSubmitDo = (event) => {
    event.preventDefault()

    setInputValue("")
    setDescriptionValue("")

  }

  const useInputValue = () => {
    console.log(inputValue)
    console.log(descriptionValue)
  }



  const descriptionChange = (event) => {
    setDescriptionValue(event.target.value)
  }

  const gotoForum = () => {
    
    const path = "/Forum"
    navigate(path)

  }
  return (
    <>
    
    <button onClick={gotoForum}>Return</button>
    <div className="create-form-main-container">

      

      <form onSubmit={onSubmitDo} className="create-form-container">

        <p>Title</p>
        <input type="text" value={inputValue} onChange={inputChange} className="create-form-inputs" />
        <p>Description</p>
        {/* <input type="textarea" value={descriptionValue} onChange={descriptionChange} className="create-form-inputs" /> */}
        <textarea type="text" value={descriptionValue} onChange={descriptionChange} className="create-form-inputs"></textarea>


        <input type="submit" onClick={useInputValue} className="create-submit-btn" />



      </form>
      
    </div>


    
    
    
    </>
  )
}

export default CreatePage