import React, { useEffect, useState } from 'react'
function Posts(){
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/posts').
        then((data)=> data.json()).
        then((data => setPosts(data))).
        catch(err =>console.log(err))



    },[]);
    return (
<div>
    {posts.map((posts)=>(
        <div key={posts.id}>
            <div>
           <div>
            <h5>{posts.user.name}</h5></div>
            </div>
            <div>
            <img className="abo w-50" src={posts.po_pic} alt='' />
            <div>
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-send"></i>
                <i className="bi bi-bookmark"></i>
            </div><div>
                <b>{posts.user.caption}</b>
            </div>
    </div>
    </div>
    ))}
    
    </div>
);
}


export default Posts