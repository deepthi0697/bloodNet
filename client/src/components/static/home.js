import React from 'react'
import Selection from '../selection'
import {Link} from 'react-router-dom'
const bloodDrop = require('../../blood drop.jpg')

function Home(props){
    return (
        <div>
            <h2 className="z-depth-3 center-align">Welcome to BloodNet <img src={bloodDrop} alt="" /></h2>
            <Selection/>

        </div>
    )
}

export default Home