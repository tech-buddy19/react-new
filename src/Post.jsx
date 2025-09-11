import React, { useEffect, useState } from 'react'
function Post(){
    const [post,setPost]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/2').
        then((data)=> data.json()).
        then((data => setPost(data))).
        catch(err =>console,log(err))



    },[]);
    return (
        <div>
            {Post.map((post)=>(
                <div key={post.id}>
                    <div>

                    </div>
            </div>
            ))}
            
        </div>


    )
}


export default Post