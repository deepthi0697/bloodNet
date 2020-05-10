import React from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import bankDetails from './components/bankDetails'
import Home from './components/static/home'
import Donate from './components/Donate/donate'
import HospitalLogin from './components/Hospital/hospitalLogin'
import HospitalDetails from './components/Hospital/hospitalDetails'
import Logout from './components/Hospital/hospital-logout'
import AddBank from './components/Hospital/addBank'
import SideNav from './components/SideNav/sideNav'
import Eligibility from './components/SideNav/How/eligibility'
import Types from './components/SideNav/How/types'
import Helps from './components/SideNav/How/helps'
import Learn from './components/SideNav/How/learn'
import Components from './components/SideNav/How/components'
import Process from './components/SideNav/Donation Process/during'
import Procedure from './components/SideNav/Donation Process/procedure'


function App () {
    return (
        <div className = 'row'>
             <BrowserRouter>
                <div>
                <SideNav />
                    {/* <nav>
                        <div className = 'nav-wrapper'>
                        <a to="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                            <Link className="breadcrumb" to = '/'>Home</Link> {'   '}            
                            <Link className="breadcrumb" to = '/donate'>Donate</Link> {'   '} 
                            <Link className="breadcrumb" to = '/hospital/login'>Hospital-Login</Link> {'   '} 
                            {
                                localStorage.getItem('x-auth') ? <Link className="breadcrumb" to = '/hospital/logout'>Logout</Link> : ''
                            }
                        </div>
                    </nav> */}
                    <Switch>
                        <Route path ='/' component = {Home} exact = {true}/>
                        <Route path ='/hospital/login' component = {HospitalLogin} exact = {true}/>
                        <Route path ='/hospital/logout' component  = {Logout} exact = {true}/>
                        <Route path ='/hospital/details/:id/add' component = {AddBank} exact = {true}/>
                        <Route path ='/hospital/details/:id' component = {HospitalDetails} exact = {true}/>
                        
                        <Route path = '/donate' component = {Donate} exact = {true} />
                        <Route path = '/donate/eligibility' component = {Eligibility} exact = {true} />
                        <Route path = '/donate/types' component = {Types} exact = {true} />
                        <Route path = '/donate/how_it_helps' component = {Helps} exact = {true} />
                        <Route path = '/donate/learn' component = {Learn} exact = {true} />
                        <Route path = '/donate/types/components' component = {Components} exact = {true} />

                        <Route path = '/donate/process' component = {Process} exact = {true} />
                        <Route path = '/donate/procedure' component = {Procedure} exact = {true} />

                        <Route path = '/:id' component = {bankDetails} exact = {true} />
                        {/* <Route path = '/menu' component = {bankDetails} exact = {true} /> */}
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App