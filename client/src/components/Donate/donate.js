import React from 'react'
import data from '../../data'
import axios from '../../config/axios'
import popup from 'reactjs-popup'

class Donate extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '',
            age: '',
            group: '',
            state : '',
            city: '',
            h_name: '',
            groups: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-']
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            age: this.state.age,
            group: this.state.group,
            state : this.state.state,
            city: this.state.city,
            h_name: this.state.h_name
        }
        axios.post('/donate', formData)
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            } else {
                console.log(response.data)
                alert('An email has been sent to the hospital.You will be contacted soon')
            }
        })
        .catch((err) => {
           console.log(err)
        })
    }
    render(){
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
        
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = 'name'>Enter your name</label>
                    <input type = 'text' id = 'name' value = {this.state.name} onChange = {this.handleChange} name = 'name'/>

                    <label htmlFor = 'age'>Enter your age</label>
                    <input type = 'text' id = 'age' value = {this.state.age} onChange = {this.handleChange} name = 'age'/>



                    <label htmlFor = 'group'>Enter your blood group</label>
                    <select className="browser-default" onChange = {this.handleChange} name = 'group'>
                        <option value ='' disabled selected>Choose your option</option>
                        {
                            this.state.groups.map(group => {
                                return <option value = {group}>{group}</option>
                            })
                        }
                    </select>

                    <label htmlFor = 'state'>Which state do you belong to?</label>
                    <select className="browser-default"  onChange = {this.handleChange} name ='state'>
                        <option value="" disabled selected>Choose your option</option>
                    {
                        states.map(state => {
                               return <option value={state}>{state}</option>
                        })
                    }
                    </select>

                    <label htmlFor = 'city'>Which city do you belong to?</label>
                    <select className="browser-default" onChange = {this.handleChange} name = 'city'>
                            <option value="" disabled selected>Choose your option</option>
                           {
                               repetition(data.data.filter(arr => arr[1] == this.state.state),3).map(city => {
                                   return <option value={city}>{city}</option>
                               })
                           }
                    </select>

                    <label htmlFor = 'h_name'>Select a bank to which you would like to Donate</label>
                    <select className="browser-default" onChange = {this.handleChange} name = 'h_name'>
                           <option value="" disabled selected>Choose your option</option> 
                           {
                               data.data.filter(bank => bank[3] === this.state.city).map(bank => {
                                   return <option value = {bank[0]}>{bank[4]}</option>
                               })
                           }
                    </select>

                    <input type = 'submit'/>
                </form>
            </div>
        )
    }
}

export default Donate