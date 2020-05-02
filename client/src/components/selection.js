import React from 'react'
import data from '../data'
import './table.css' 
import {Link, BrowserRouter} from 'react-router-dom'

class Selection extends React.Component {
   constructor(){
       super()
       this.state = {
           state : '',
           city: ''
       }
   }

   handleChange = (e) => {
       this.setState({
           [e.target.name]: e.target.value
       })
   }
    render(){
        console.log(data.data)
        function repetition(arr, ele){
            const res = []
            for(let i = 0; i < arr.length; i++){
                if(!res.includes(arr[i][ele])){
                    res.push(arr[i][ele])
                }
            }
            return res
        }
        const states = repetition(data.data, 1)
        console.log(this.state.city)
        
        return (
            <div className = 'row center-align'>
                <div className = 'col s4'>
                    <label>Select a state</label>
                    <select className="browser-default"  onChange = {this.handleChange} name ='state'>
                        <option value="" disabled selected>Choose your option</option>
                    {
                        states.map(state => {
                               return <option value={state}>{state}</option>
                        })
                    }
                    </select>

                    </div>
                    <div className = 'col s4'>
                    <label>Select a city</label>
                        <select className="browser-default" onChange = {this.handleChange} name = 'city'>
                            <option value="" disabled selected>Choose your option</option>
                           {
                               repetition(data.data.filter(arr => arr[1] == this.state.state),3).map(city => {
                                   return <option value={city}>{city}</option>
                               })
                           }
                         </select>
                    </div>
                    {this.state.city ? (
                        
                            <table className = 'col s10 centered css-serial'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Hospital Name</th>
                                        <th>Address</th>
                                        <th>Contact number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.data.filter(bank => bank[3] === this.state.city).map(data => {    return (
                                                <tr>
                                                    <td></td>
                                                    <td><BrowserRouter><Link to={`${data[0]}`}>{data[4]}</Link></BrowserRouter></td>
                                                    <td>{data[5]}</td>
                                                    <td>{data[7]}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        
                       
                    ) : ''}
                
            </div>
        )
    }
}

export default Selection
