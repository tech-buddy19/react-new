import React, { useEffect, useState } from 'react'
function Story(){
    const[Stories,setStories]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/Story").
        then((data)=> data.json()).
        then((data => setStories(data))).
        catch(err =>console.log(err))},[]);

    return (
        <div>
            <div className='abi d-flex'>
                {Stories.length>0 ?(
                    Stories.map((Story)=>(
                        <div  key={Story.id}>
                            <div className='gradient-border'>
                            <img src={Story.po_pic} alt='dp' className='story-dp rounded-circle'/>
                            </div>
                            <p className='text-truncate'>{Story.user.name}</p>
                        </div>
                    ))
                ):(
                    <p>loadain</p>
                )}</div>
        </div>


    )
}


export default Story