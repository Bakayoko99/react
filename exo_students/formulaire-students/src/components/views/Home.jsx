import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AddStudent from './AddStudent';


const axios = require('axios')


const Home = () => {

    const [students, setStudents] = useState([])
    const [nameSend, setNameSend] = useState('')

    let history = useHistory()


    // const studentAdded = () => {
    //     return students
    // };


    useEffect(() => {

        axios.get('http://localhost:8098/students')
            .then(res => { setStudents(res.data)
                console.log('log get: ', res.data)
            })


    // const studentAdded = () => {
    //     return students
    // };
    }, []);

    // const listStudents = () => {
    // }


    const handleName = (e) => {
        setNameSend(e.target.value)
    }

    const addName = () => {
        
        console.log("debut addname");
        axios.post('http://localhost:8098/students', { name: nameSend })
            .then((response) => {
                response.data === "ok" && history.push(`/students/add/${nameSend}`) 
                console.log("addName log post: ", response.data)
            }) 
        //     setStudents(nameSend)
    }

    console.log("home state name", nameSend);
    return (
        <div>
            <div className="row g-0">
                <div className="col-sm-6 col-md-6">
                    <h1>Student list</h1>
                    <ul class="list-group">
                        {students.map(elem => <li class="list-group-item">{elem}</li>)}
                    </ul>
                </div>
                <div className="col-6 col-md-6">
                    <h1>Add students</h1>
                    <div className="mb-3 row">
                        <label for="exampleFormControlInput1" className="col-auto col-form-label">Student name</label>
                        <div className="col-auto">
                            <input type="email" onChange={handleName} className="form-control" id="exampleFormControlInput1" ></input>
                        </div>
                    </div>
                    <button type="submit" onClick={addName} className="btn btn-outline-primary">Send</button>
                </div>
            </div>
        </div>
    );
}
export default Home;
