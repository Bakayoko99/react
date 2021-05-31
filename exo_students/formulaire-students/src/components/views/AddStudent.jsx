import React from 'react';
import studentAdded from './Home'

const AddStudent = () => {
    return (
        <div>
            <h1>Added student</h1>
            <p>Student [{studentAdded}] has been recorded. <a href="/">Go back</a></p>
       
        </div>
    );
}

export default AddStudent;
