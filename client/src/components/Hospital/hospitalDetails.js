import React from 'react'
import '../table.css'
import axios from '../../config/axios'

class HospitalDetails extends React.Component{
    constructor(){
        super()
        this.state = {
            banks: [],
            isEditable: ''
        }
    }

    componentDidMount = () => {
        axios.get('/bank')
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

        axios.put(`/bank/${id}`, {[name]: value})
        .then((response) => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        return (
            <div>
                <h2>Hospital page</h2>
                <table className = 'css-serial'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Blood Group</th>
                                <th>Amount</th>
                                <th>isAvailable</th>
                                <th>Edit/save</th>
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
                                                <td><button onClick = {() => {this.handleEdit(bank._id)}}>Edit</button></td>
                                                {console.log(bank.isEditable)}
                                            </tr>
                                        ) : (
                                            <tr key = {bank._id}>
                                            <td></td>
                                            <td><input type = 'text' value = {bank.group} onChange ={(e) => {this.handleChange(e,bank._id)}} name = 'group' /></td>
                                            <td><input type = 'text' value = {bank.amount} onChange ={(e) => {this.handleChange(e,bank._id)}} name = 'amount' /></td>
                                            <td><input type = 'text' value = {bank.isAvailable} onChange ={(e) => {this.handleChange(e,bank._id)}} name = 'isAvailable' /></td>
                                            <td><button onClick = {() => {this.handleEdit(bank._id)}}>Save</button></td>
                                            {console.log(bank.isEditable)}
                                        </tr>
                                        )
                                        
                                    )
                                })
                            }
                        </tbody>
                    </table>
            </div>
        )
    }
}

export default HospitalDetails