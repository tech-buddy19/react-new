import { useState,useEffect } from 'react';
import react from './assets/react.svg'

const name="react"

function Course(props){
    // let purchased=false;
    const[purchased, setPurchased] = useState(false);



      
    function buy(){
    console.log(props.name,"register");
    setPurchased(true);
  
    console.log(purchased);
}
useEffect(()=>{console.log("hi")});

    return(
<div className='card'>
    <img src={props.image} alt='' />
    <h3>{props.name}</h3>
    <p>Lorem ipsum dolorNobis laborum possimus beatae facere quasi asperiores tenetur obcaecati, 
        </p>
        <button onClick={buy}>click to register</button>
        <p>{purchased ? "already bought" : "its not buyed"}</p>
</div>
    );
}

export default Course