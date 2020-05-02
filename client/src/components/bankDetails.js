import React from 'react'
//import {connect} from 'react-redux'
import axios from 'axios'
import './table.css'
import data from '../data'

class Details extends React.Component{
    constructor(){
        super()
        this.state = {
            banks: [],
            id: ''
        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        axios.get('http://localhost:3033/bank')
            .then((response) => {
                const banks = response.data
                this.setState({banks, id})
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    render(){
        let name
        name = data.data.filter(bank => bank[0] === this.state.id)[0]
        name && console.log(name[0])
        return (
            <div>
                <h1>{name && name[4]} Details</h1>
                <table className = 'css-serial'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Blood Group</th>
                            <th>Amount</th>
                            <th>isAvailable</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.banks.map(bank => {
                                return (
                                    <tr key = {bank._id}>
                                        <td></td>
                                        <td>{bank.group}</td>
                                        <td>{bank.amount}</td>
                                        <td>{bank.isAvailable}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         banks: state.banks
//     }
// }

export default Details