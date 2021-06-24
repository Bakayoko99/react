import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const axios = require('axios')

const App = () => {

  const [name, setName] = useState('')
  const [image, setImage] = useState()

  const handleName = (e) => {
    setName(e.target.value)
  }

  // console.log('setName :', name);
  // console.log("state imge :", image);

  const sendUser = async () => {
    console.log("ok sendUser");


    const useee = {
      image: image,
      name: name
    }

    // console.log("useee :", useee);
    const newUserForm = new FormData()

    newUserForm.append("name", name)
    newUserForm.append("image", image)
    // const formData = new FormData();
    // formData.append("image", image);
    // formData.append("name", name);
    console.log("formData :", newUserForm)

     const data = await axios.post('http://localhost:8085/upload', useee)


  }

  return (
    <div>
      <div className="container">

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input name="name" onChange={handleName} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Profil picture</label>
          <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} className="form-control" />
        </div>
        <div className="mb-3 form-check">
        </div>
        <button onClick={() => sendUser()} className="btn btn-primary">Send</button>

      </div>

    </div>
  );
}

export default App;
