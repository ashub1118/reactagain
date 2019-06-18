import React from 'react';
import './Person.css'

const person = (props)=>{
    return (
        <div className="person" onClick={props.click}>
             <p >I'Am {props.name} and I am  {props.age} Years Old.</p>
             <p>{props.children}</p>
             <input type="text" onChange={props.change} value={props.name}/>
             
        </div>
         );

}

export default person;