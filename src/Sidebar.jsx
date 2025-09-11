import React from "react";
import reactLogo from './assets/react.svg'

function Sidebar(){
    return(
        <>
        <div className="m-3">
        <div className="d-flex flex-column gap-2">
            <img className='logo-text' src="src/assets/react.svg" alt="" />
            <div><i className="bi bi-house"></i>home</div>
            <div><i className="bi bi-search"></i>search</div>
            <div><i className="bi bi-binoculars"></i>explore</div>
            <div><i className="bi bi-chat-dots-fill"></i>messages</div>
            <div><i className="bi bi-person-circle"></i>profile</div>
        </div>
        <div className="position-fixed bottom-0 d-flex flex-column gap-2 mb-2">
            <div><i className="bi bi-plus-square-fill"></i>create</div>
        <div><i className="bi bi-x-circle-fill"></i>close</div>        
        </div>

</div>
</>
    )
}




















export default Sidebar