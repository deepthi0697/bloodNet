import React from 'react'
import M from "materialize-css/dist/js/materialize.min.js"
import Sticky from 'react-sticky-el'

import whole from './images/1.jpeg'
import power from './images/power.jpg'
import platelete from './images/platelete.jpg'
import ab from './images/ab.jpg'

import cold from './images/cold.jpg'
import tablets from './images/tablets.jpg'
import iron from './images/iron.jpg'
import travel from './images/travel.jpg'

class Eligibility extends React.Component{
    componentDidMount = () => {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.scrollspy');
            var instances = M.ScrollSpy.init(elems, {});
          });
    }
    render(){
        return (
            <div className = 'row'>
                <div className = 'col s12'>
                    <div className="col s3">
                        <div className = 'valign-wrapper' style={{width:'100%',height:'100%',position: 'absolute'}}>
                            <Sticky>
                            <ul  className="valign section table-of-contents" >
                            <li ><a href="#requirements">Requirements by Donation Type</a></li>
                            <li><a href="#reasons">Common Reasons People Can't Donate</a></li>
                        </ul>
                            </Sticky>
                           
                        </div>
                    </div>

                    <div className = 'col s9'>
                        <div id="requirements" class="section scrollspy">
                            <h2 className = 'center-align'>Requirements by Donation Type</h2>
                            <p className = 'center-align'>To ensure the safety of both patients and donors, these are some of the requirements donors must meet to be eligible to donate blood based on their donation type.</p>
                            
                            <div className = 'col s7 l5'>
                            <div className="card center-allign">
                                <div className="card-image">
                                <img src={whole}/>
                                <span className="card-title red">Whole Blood Donation</span>
                                </div>
                                <div className="card-content">
                                <ul style = {{listStyleType: 'circle'}}>
                                    <li>1. Donation frequency: Every 56 days* </li>
                                    <li>2. You must be in good health and feeling well**</li>
                                    <li>3. You must be at least 16 years old in most states</li>
                                    <li>4. You must weigh at least 110 lbs or 50 kg's</li>
                                </ul>
                                </div>
                                
                            </div>
        
                            <div className="card">
                                <div className="card-image">
                                <img src={power}/>
                                <span className="card-title red">Power Red Donation</span>
                                </div>
                                <div className="card-content">
                                <ul>
                                    <li>1. Donation frequency: Every 112 days, up to 3 times/year*</li>
                                    <li>2. You must be in good health and feeling well**</li>
                                    <li>3. Male donors+ must be at least 17 years old in most states, at least 5'1" tall and weigh at least 130 lbs or 59 kg's</li>
                                    <li>4. Female donors+ must be at least 19 years old, at least 5'5" tall and weigh at least 150 lbs or 68 kg's</li>
                                </ul>
                                </div>
                            </div>
        
                                <div className="card">
                                <div className="card-image">
                                <img src={platelete}/>
                                <span className="card-title red">Platelet Donation</span>
                                </div>
                                <div className="card-content">
                                <ul>
                                    <li>1. Donation frequency: Every 7 days, up to 24 times/year*</li>
                                    <li>2. You must be in good health and feeling well**</li>
                                    <li>3. You must be at least 17 years old in most states</li>
                                    <li>4. You must weigh at least 110 lbs or 50 kg's</li>
                                </ul>
                                </div>
                                
                            </div>
        
                            <div className="card">
                                <div className="card-image">
                                <img src={ab}/>
                                <span className="card-title red">AB Elite Plasma Donation</span>
                                </div>
                                <div className="card-content">
                                <ul>
                                    <li>1. Donation frequency: Every 28 days, up to 13 times/year*</li>
                                    <li>2. You must have type AB blood</li>
                                    <li>3. You must be in good health and feeling well**</li>
                                    <li>4. You must be at least 17 years old</li>
                                    <li>5. You must weigh at least 110 lbs or 50 kg's</li>
                                </ul>
                                </div>
                                
                                </div>
        
                                </div>
                        </div>
                    </div>
                </div>
                
    
                    <div className = 'col s12'>
                         <div id="reasons" class="section scrollspy">
                        <h2 className = 'center-align'>Common Reasons People Can't Donate</h2>
                        <p className = 'center-align'>Even if you were deferred in the past, you may be eligible to donate now.</p>

                        <div className = 'col s3 m3'>
                        <div className="card">
                            <div className="card-image">
                            <img src={cold}/>
                            <span className="card-title red">Power Red Donation</span>
                        </div>
                            <div className="card-content">
                                <h3>Cold, Flu and Other Types of Illness</h3>
                                <p>If you don’t feel well on the day of your donation, please call to cancel. We’ll be happy to see you 24 hours after your symptoms pass.</p>
                            </div>
                        </div>
                            
                        </div>

                        <div className = 'col s3 m3'>
                        <div className="card">
                            <div className="card-image">
                                <img src={tablets}/>
                            <span className="card-title red">Power Red Donation</span>
                            </div>
                            <div className="card-content">
                            <h3>Information About Medications</h3>
                            <p>Most medications will not disqualify you from being able to donate blood, but may require a waiting period after your final dose.</p>
                            </div>
                        </div>
                        </div>

                        <div className = 'col s3 m3'>
                        <div className="card">
                            <div className="card-image">
                                <img src={iron}/>
                            <span className="card-title red">Power Red Donation</span>
                            </div>
                            <div className="card-content">
                            <h3>Low Iron</h3>
                            <p>If you were unable to donate due to low iron, you may still be able to donate in the future.</p>
                            </div>
                        </div>
                        </div>

                        <div className = 'col s3 m3'>
                        <div className="card">
                            <div className="card-image">
                                <img src={travel }/>
                            <span className="card-title red">Power Red Donation</span>
                            </div>
                            <div className="card-content">
                            <h3>Travel Outside of India</h3>
                            <p>You may be deferred from donating blood or platelets if you have lived in or traveled to a malaria-risk country in the past three years.</p>
                            </div>
                        </div>
                        </div>
    
                    </div>
                    </div>


            </div>   
        )
    }
}

export default Eligibility