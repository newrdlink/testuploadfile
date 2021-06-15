import React, { useState, useRef } from 'react';
import './Form.css';
import api from '../utils/Auth';

const Form = () => {
  const [file, setFile] = useState(null)
  const fileInput = useRef(null)
  const [userData, setUserData] = useState({});


  const submit = async (evt) => {
    evt.preventDefault()
    // console.log(userData)
    let fd = new FormData();
    fd.append('myfile', file)

    api.upload(fd)
      .then((res) => {
        const { uploadPath } = res;
        setUserData({ ...userData, image: uploadPath })
        // console.log(uploadPath)
      }
      )
      .catch((error) => console.log(error))
  }

  const handleChangeFile = () => {
    const file = fileInput.current.files[0]
    setFile(file)
  }
  // setFormData({ ...formData, [name]: evt.target.value })
  const onChangeText = (evt) => {
    setUserData({ ...userData, [evt.target.name]: evt.target.value })
  }

  return (
    <form onSubmit={submit}>
      <input
        onChange={handleChangeFile}
        ref={fileInput}
        type="file"
        name="sampleFile" />
      <input
        type="text"
        name="lastName"
        onChange={(evt) => onChangeText(evt)}
      />
      <input
        type="text"
        name="firstName"
        onChange={(evt) => onChangeText(evt)}
      />
      <input
        type="text"
        name="middleName"
        onChange={(evt) => onChangeText(evt)}
      />
      <input
        type="text"
        name="position"
        onChange={(evt) => onChangeText(evt)}
      />
      <input type='submit' value='Upload!' />
    </form>
  )
}

export default Form;
