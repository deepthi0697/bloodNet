import React from 'react'
import data from '../../data'
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
                const hospital = data.data.find(h => h.includes(this.state.username))

                if(hospital){
                    localStorage.setItem(`${hospital[0]} token`,token)
                }
                console.log(hospital)
                localStorage.setItem('x-auth', token)
                this.props.history.push(`/hospital/details/${hospital[0]}`)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    render(){
        return(
            <div className = 'row' >
                <div  className='col s3'></div>
                <div  className='col s2'></div>
                <div className = 'col s6'>
                        <blockquote>
                        <h2 className="red-text text-darken-4">Hospital Login</h2>
                        </blockquote>
                            <form onSubmit =  {this.handleSubmit}>
                                <div className = 'form-field'>
                                    <label htmlFor='username'>Username</label>
                                    <input type='text' id='username' name='username' onChange={this.handleChange} value = {this.state.username}/>
                                </div>

                                <div className = 'form-field'>
                                    <label htmlFor='password'>Password</label>
                                    <input type='password' id='password' name='password' onChange={this.handleChange} value = {this.state.password}/>

                                </div>

                                <input className = "center-align btn waves-effect waves-light" type='submit' value = 'Login'/>
                            </form>
                   
                </div>
            </div>
        )
    }
}

export default HospitalLogin