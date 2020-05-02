import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import bankDetails from './components/bankDetails'
import Home from './components/static/home'
import Donate from './components/Donate/donate'
import HospitalLogin from './components/Hospital/hospitalLogin'
import HospitalDetails from './components/Hospital/hospitalDetails'
import Logout from './components/Hospital/hospital-logout'


function App () {
    return (
        <div className = 'row'>

             <BrowserRouter>
                <div>
                    <nav>
                        <div className = 'nav-wrapper'>
                            <Link to = '/'>Home</Link> {'   '}            
                            <Link to = '/donate'>Donate</Link> {'   '} 
                            <Link to = '/hospital/login'>Hospital-Login</Link> {'   '} 
                            {
                                localStorage.getItem('x-auth') ? <Link to = '/hospital/logout'>Logout</Link> : ''
                            }
                        </div>
                    </nav>
                    <Switch>
                        <Route path ='/' component = {Home} exact = {true}/>
                        <Route path ='/hospital/login' component = {HospitalLogin} exact = {true}/>
                        <Route path ='/hospital/logout' component  = {Logout} exact = {true}/>
                        <Route path ='/hospital/details' component = {HospitalDetails} exact = {true}/>
                        <Route path = '/donate' component = {Donate} exact = {true} />
                        <Route path = '/:id' component = {bankDetails} exact = {true} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App