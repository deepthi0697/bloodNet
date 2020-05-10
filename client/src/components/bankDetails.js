import React from 'react'
//import {connect} from 'react-redux'
import axios from '../config/axios'
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
        axios.get('/bank', {
            headers: {
                'x-auth': localStorage.getItem(`${id} token`)
            }
        })
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
            <div className = 'row'>
                <div className = 'col s1'></div>
                <div className = 'col s8'>
                    <blockquote>
                        <h3>{name && name[4]} Details</h3>
                    </blockquote>
                {this.state.banks.length === 0 ? (
                    <div className = 'center-align'>
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
                )}
                </div>
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