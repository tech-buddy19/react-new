import react from './assets/react.svg'

const name="react"

function Course(props){
    function buy(){
    console.log(props.name,"register");
}
    return(
<div className='card'>
    <img src={props.image} alt='' />
    <h3>{props.name}</h3>
    <p>Lorem ipsum dolorNobis laborum possimus beatae facere quasi asperiores tenetur obcaecati, 
        </p>
        <button onClick={buy}>click to register</button>
</div>
    );
}

export default Course