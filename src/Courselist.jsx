import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Course from './Course'



function Courselist(){

const courses=[
    {
      id:1,  name: "react" ,image:reactLogo
    },
    {
        id: 2,name:"angular", image:reactLogo
    },{id:3,name:"vite", image:reactLogo}
]
const courseslist=courses.map((course, id) => <Course key={id} name={course.name} 
image={course.image} />)
    return(
<>
{courseslist}
</>
    );
}

export default Courselist
