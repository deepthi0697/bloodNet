import React from 'react'

class Logout extends React.Component{
    render(){
        localStorage.removeItem('x-auth')
        this.props.history.push('/')
        return (
            <div>
                 successfully logged out
            </div>
        )
    }
}

export default Logout