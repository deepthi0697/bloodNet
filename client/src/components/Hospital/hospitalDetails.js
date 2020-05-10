import React from 'react'
import '../table.css'
import axios from '../../config/axios'
import data from '../../data'
import {Link} from 'react-router-dom'

class HospitalDetails extends React.Component{
    constructor(){
        super()
        this.state = {
            banks: [],
            isEditable: ''
        }
    }

    componentDidMount = () => {
        axios.get('/bank', {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
        .then(response => {
            const banks = response.data
            this.setState({banks})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    handleEdit = (id) => {
        this.setState((prevState) => ({
            banks: prevState.banks.map(bank => {
                if(bank._id === id){
                    return Object.assign({}, bank, {isEditable: !bank.isEditable})
                } else{
                    return Object.assign({}, bank)
                }
            })
        }))
    }

    handleChange = (e, id) => {
        const name = e.target.name
        const value = e.target.value
        this.setState((prevState) => ({
            banks: prevState.banks.map(bank => {
                if(bank._id === id){
                    return Object.assign({}, bank, {[name]: value})
                } else{
                    return Object.assign({}, bank)
                }
            })
        }))

        axios.put(`/bank/${id}`, {[name]: value}, {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
        .then((response) => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleDelete = (id) => {
        axios.delete(`/bank/${id}`, {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
        .then((response) => {
            console.log(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    render(){
        const id = this.props.match.params.id
        const name = data.data.find(hospital => hospital[0] == id)
        return (
            <div>
                <blockquote>
                    <h2 className ="center-align">{name[4]} page</h2>
                </blockquote>
                {
                    this.state.banks.length === 0 ? (
                        <div className ="center-align">
                            <div class="preloader-wrapper active">
                            <div class="spinner-layer spinner-red-only">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div><div class="gap-patch">
                                <div class="circle"></div>
                            </div><div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                            </div>
                      </div>
                        </div>
                    ) : (
                        <div>
                                <table className = 'css-serial'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Blood Group</th>
                                <th>Amount</th>
                                <th>Availability</th>
                                <th>Edit/save</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.banks.map(bank => {
                                    return (
                                        bank.isEditable === false ? (
                                            <tr key = {bank._id}>
                                                <td></td>
                                                <td>{bank.group}</td>
                                                <td>{bank.amount}</td>
                                                <td>{bank.isAvailable}</td>
                                                <td><button className = "center-align btn waves-effect waves-light" onClick = {() => {this.handleEdit(bank._id)}}>Edit</button></td>
                                                <td><button className = "center-align btn waves-effect red" onClick = {() => {this.handleDelete(bank._id)}}>Remove</button></td>
                                            </tr>
                                        ) : (
                                            <tr key = {bank._id}>
                                            <td></td>
                                            <td><input type = 'text' value = {bank.group} onChange ={(e) => {this.handleChange(e,bank._id)}} name = 'group' /></td>
                                            <td><input type = 'text' value = {bank.amount} onChange ={(e) => {this.handleChange(e,bank._id)}} name = 'amount' /></td>
                                            <td><input type = 'text' value = {bank.isAvailable} onChange ={(e) => {this.handleChange(e,bank._id)}} name = 'isAvailable' /></td>
                                            <td><button className = "center-align btn waves-effect waves-light" onClick = {() => {this.handleEdit(bank._id)}}>Save</button></td>
                                            {console.log(bank.isEditable)}
                                        </tr>
                                        )
                                        
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    {' '}
                        </div>
                    )
                }
                 <Link className="btn-floating btn-large waves-effect waves-light red" to = {`/hospital/details/${id}/add`}><i className="material-icons">add</i></Link>
            </div>
        )
    }
}

export default HospitalDetails