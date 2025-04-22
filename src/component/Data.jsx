import React, { useState } from 'react'

export default function Data() {

    const [input, setInput] = useState('Vannamma');
    const [inputage, setInputAge] = useState('24');
    const [designation, setdesignation] = useState('Web Developer');
    const [salary, setsalary] = useState('25,000');

    return (
        <div>
         
            <input type="text" placeholder='Enter Your Name' value={input} onChange={(e) => { setInput(e.target.value) }} />

            <input type="text" placeholder='Enter Your Age' value={inputage} onChange={(e) => { setInputAge(e.target.value) }} />
            <input type="text" placeholder='Enter Your Age' value={designation} onChange={(e) => { setdesignation(e.target.value) }} />
            <input type="text" placeholder='Enter Your Age' value={salary} onChange={(e) => { setsalary(e.target.value) }} />

            
            <table>
                <caption>Enter Employee Data</caption>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Designation</th>
                    <th>Salary</th>
                </tr>
                <tr>
                    <td>{input}</td>
                    <td>{inputage}</td>
                    <td>{designation}</td>
                    <td>{salary}</td>
                </tr>
            </table>
        </div>
    )
}
