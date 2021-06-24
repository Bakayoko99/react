import React from 'react';
import studentAdded from './Home'

const AddStudent = (props) => {

    console.log("log addStudent",props.match.params.name);
    return (
        <div>
            <h1>Added student</h1>
            <p>Student [{props.match.params.name}] has been recorded. <a href="/">Go back</a></p>
       
        </div>
    );
}

export default AddStudent;
