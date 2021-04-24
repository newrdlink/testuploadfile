import React, { useState, useRef } from 'react';
import './Form.css';
import api from '../utils/Auth';

const Form = () => {
  const [file, setFile] = useState(null)
  const fileInput = useRef(null)

  const submit = async (evt) => {
    evt.preventDefault()
    // setFile(fileInput.current.files[0])

    let fd = new FormData();
    fd.append('myfile', file)

    // api.signIn({ password: "12121313", email: "rom@didrom.ru" })
    //   .then((res) => console.log("file uploaded"))
    //   .catch((error) => console.log(error))
    api.upload(fd)
      .then((res) => console.log("file uploaded"))
      .catch((error) => console.log(error))
  }

  const handleChange = () => {
    const file = fileInput.current.files[0]
    setFile(file)
  }

  return (
    <form onSubmit={submit}>
      <input
        onChange={handleChange}
        ref={fileInput}
        type="file"
        name="sampleFile" />
      <input type='submit' value='Upload!' />
    </form>




    // рабочий вариант из источника
    // <form 
    //   id='uploadForm'
    //   action='http://localhost:3000/public'
    //   method='post'
    //   encType="multipart/form-data">
    //   <input type="file" name="sampleFile" />
    //   <input type='submit' value='Upload!' />
    // </form>
  )
}

export default Form;
