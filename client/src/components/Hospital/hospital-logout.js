import React from 'react'

class Logout extends React.Component{
    render(){
        localStorage.clear()
        return(
            this.props.history.push('/')
        )   
    }
}

export default Logout