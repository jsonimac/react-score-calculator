import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function CalculateScore() {

    // set State for each cases
    const [inputs, setInputs] = useState({});

    const [totalAvg, setAverage] = useState({});
    const [resultStat, setResult] = useState({});
    const [errorCode, setCode] = useState({
        class_total: "",
        class_result: ""
    });

    // Getting all user inputted value
    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setInputs(container => ({...container, [fieldName]: fieldValue}));

        console.log(inputs);
    }

    // Handle Average
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Compute Average from inputted value
        const avg = (parseInt(inputs.score1) + parseInt(inputs.score2) + parseInt(inputs.score3)) / 3;
        
    
        // Set condition for average
        if(isNaN(avg)){
            setResult(() => ({result: "No score available score to compute"}));
            setAverage(() => ({num: "Fields are empty"}));
            setCode(()=>({class_total: "border border-warning", class_result: "border border-warning"}));
        }else if(avg < 75){
            setResult(() => ({result: "Failed"}));
            setAverage(() => ({num: avg}));
            setCode(()=>({class_total: "border border-danger", class_result: "border border-danger"}));
        }else{
            setResult(() => ({result: "Success"}));
            setAverage(() => ({num: avg}));
            setCode(()=>({class_total: "border border-primary", class_result: "border border-primary"}));
        }

        console.log(inputs);
        console.log(totalAvg); 
        console.log(resultStat); 
        // document.getElementById('avg').innerHTML = inputs.resul
        // document.getElementById('name').innerHTML = inputs.username
        // document.getElementById('avg').innerHTML = 
    }

    return (
        <div className='m-3 p-3'>
            <div className='row-cols-2 d-flex justify-content-center'>
                <div className='p-3 border border-secondary'>
                    <Form noValidate validated={true} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="username" value={inputs.username || ""} onKeyUp={handleChange} placeholder="Enter Name" required />
                            <Form.Control.Feedback>Field contains character</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Score1">
                            <Form.Label>Score 1</Form.Label>
                            <Form.Control type="number" name='score1' value={inputs.score1 || ""} onKeyUp={handleChange} placeholder="Enter Score 1" required />
                            <Form.Control.Feedback>Field contains digit</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Score2">
                            <Form.Label>Score 2</Form.Label>
                            <Form.Control type="number" name='score2' value={inputs.score2 || ""} onKeyUp={handleChange} placeholder="Enter Score 2" required />
                            <Form.Control.Feedback>Field contains digit</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>                        
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Score3">
                            <Form.Label>Score 3</Form.Label>
                            <Form.Control type="number" name='score3' value={inputs.score3 || ""} onKeyUp={handleChange} placeholder="Enter Score 3" required />
                            <Form.Control.Feedback>Field contains digit</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">This field is required</Form.Control.Feedback>
                        </Form.Group>
                        <Button type='submit' variant="primary">Submit</Button>
                    </Form>
                    <hr/>
                    <div className='row'>
                        <div className='col-4 mx-2'> 
                            <h5>Name: {inputs.username}</h5> 
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4 mx-2'>
                            <h5 className={errorCode.class_total}>Total Average: {totalAvg.num}</h5>
                            <h5 className={errorCode.class_result}>Status: {resultStat.result}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CalculateScore;