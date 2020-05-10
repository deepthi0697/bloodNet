import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'
class AddBank extends React.Component {
    constructor(){
        super()
        this.state = {
            Blood_group: '',
            Amount: '',
            Availability: '',
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
            group: this.state.Blood_group,
            amount: this.state.Amount,
            isAvailable: this.state.Availability
        }
        axios.post('/bank', formData, {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
        .then((response) => {
            console.log(response.data)
            this.props.history.push('/hospital/details/:id')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render(){
        return (
            <div className = 'row'>
                <div className = 'col s1'></div>
                <div className = 'col s4'>
                <h2 className = 'red-text text-darken-4'>Add Blood group</h2>  

                    <form onSubmit = {this.handleSubmit}>
                        <label htmlFor = 'group'>Group</label>
                        <select className="browser-default" onChange = {this.handleChange} name = 'Blood_group'>
                                <option value ='' disabled selected>Choose your option</option>
                                {
                                    this.state.groups.map(group => {
                                        return <option value = {group}>{group}</option>
                                    })
                                }
                            </select>

                        <label htmlFor = 'amount'>Amount</label>
                        <input type = 'text'  id = 'amount' name = 'Amount' value = {this.state.Amount} onChange = {this.handleChange} />

                        <label htmlFor = 'availability'>Is it availabilabe</label>
                        <select className="browser-default" onChange = {this.handleChange} name = 'Availability'>
                                <option value ='' disabled selected>Choose your option</option>
                                <option value = 'yes'>Yes</option>
                                <option value = 'no'>No</option>
                        </select>

                        <input className = "center-align btn waves-effect waves-light" type= 'submit'/>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddBank