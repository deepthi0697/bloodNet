import React from 'react'
import {Link} from 'react-router-dom'
import drop from './nav.jpg'

class SideNav extends React.Component {

    componentDidMount = () => {
        const M = window.M;
        
        document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
        });

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems, {});
          });
        
    }


    render() {
        return (
            <div  style = {{backgroundColor: 'white', height: '100%'}}>

            <nav>
                <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
                <div className = 'nav-wrapper'>
                            <Link className="breadcrumb" to = '/'>Home</Link> {'   '}            
                            <Link className="breadcrumb" to = '/donate'>Donate</Link> {'   '} 
                            <Link className="breadcrumb" to = '/hospital/login'>Hospital-Login</Link> {'   '} 
                            {
                                localStorage.getItem('x-auth') ? <Link className="breadcrumb" to = '/hospital/logout'>Logout</Link> : ''
                            }
                        </div>
            </nav>
            <ul id="slide-out" className="sidenav">
                <li>
                    <div className="user-view">
                        <img src= {drop}/>
                    </div>
                </li>
                <li>
                    <ul className="collapsible">
                        <li>
                            <div className="collapsible-header"><i className="material-icons">arrow_drop_down_circle</i>How to Donate</div>
                            
                            <div className="collapsible-body">
                                <i className="material-icons">chevron_right </i><Link to = '/donate'>Donate</Link>
                            </div>
                            <div className="collapsible-body">
                                <i className="material-icons">chevron_right </i><Link to = '/donate/eligibility'>Eligibility Requirements</Link>
                            </div>
                            <div className="collapsible-body">
                                <i className="material-icons">chevron_right </i><Link to = '/donate/types'>Types of Blood Donations</Link>
                            </div>
                            <div className="collapsible-body">
                                <i className="material-icons">chevron_right </i><Link to = '/donate/learn'>Learn about Blood</Link>
                            </div>
                            <div className="collapsible-body">
                                <i className="material-icons">chevron_right </i><Link to = '/donate/how_it_helps'>How Blood Donation Helps</Link>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                <ul className="collapsible">
                        <li>
                            <div className="collapsible-header"><i className="material-icons">arrow_drop_down_circle</i>Blood Donation Process</div>
                            
                        
                            <div className="collapsible-body">
                                <i className="material-icons">chevron_right </i><Link to = '/donate/process'>What to do before, during and after</Link>
                            </div>
                            <div className="collapsible-body">
                                <i className="material-icons">chevron_right </i><Link to = '/donate/procedure'>What happens to the donated Blood</Link>
                            </div>
                        
                        </li>
                       
                    </ul>
                </li>
               
            </ul>
            
        </div>
    
        )
    }
}

export default SideNav