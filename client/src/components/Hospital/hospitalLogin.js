import React from 'react'
// import data from '../../data'
import axios from '../../config/axios'

class HospitalLogin extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // const found = data.data.find(ele => {
        //     return ele[4] === this.state.username
        // })
        // console.log(found)
        // if(found === undefined){
        //     alert("Incorrect username or password")
        // } else {
        //     if(found[0] === this.state.password){
        //         alert('Successfully logged in')
        //         this.props.history.push('/hospital/details')
        //     } else {
        //         alert("Incorrect username or password")
        //     }
        // }
        const formData = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('/hospital/login', formData)
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                window.alert(response.data.error)
            } else {
                const token = response.data
                localStorage.setItem('x-auth', token)
                this.props.history.push('/hospital/details')
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    render(){
        return(
            <div className = 'row'>
                <div className='col s1'></div>
                <div  className='col s8'>
                    <h2>Hospital Login</h2>
                    <form onSubmit =  {this.handleSubmit}>
                        <label htmlFor='username'>Username</label>
                        <input type='text' id='username' name='username' onChange={this.handleChange} value = {this.state.username}/>

                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' onChange={this.handleChange} value = {this.state.password}/>

                        <input type='submit'/>
                    </form>
                </div>
            </div>
        )
    }
}

export default HospitalLogin