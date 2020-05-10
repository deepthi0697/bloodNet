import React from 'react'
import M from "materialize-css/dist/js/materialize.min.js"
import Sticky from 'react-sticky-el'

import whole from './images/1.jpeg'
import power from './images/power2.jpeg'
import platelete from './images/platelete2.jpg'
import ab from './images/ab2.jpg'

import drop from './images/drop.jpg'
import components from './images/components.png'

class Types extends React.Component{

    componentDidMount = () => {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.scrollspy');
            var instances = M.ScrollSpy.init(elems, {});
          });
    }

    handleTypesClick = () => {
        this.props.history.push('/donate/learn')
    }

    handleComponentsClick = () => {
        this.props.history.push('/donate/types/components')
    }
    render(){
        return (
            <div className = 'row'>
        <div className = 'col s12'>
            <div class="col hide-on-med-small-only s3">
                <Sticky>
                <ul class="section table-of-contents">
                    <li><a href="#Whole Blood Donation">Whole Blood Donation</a></li>
                    <li><a href="#Power Red Donation">Power Red Donation</a></li>
                    <li><a href="#Platelet Donation">Platelet Donation</a></li>
                    <li><a href="#Plasma Donation">Plasma Donation</a></li>
                    <li><a href="#Blood Types">Blood Types and Components</a></li>       
                </ul>
                </Sticky>
            </div>

                    <div className = 'col s8'>
                    <h2 className ='center-align'>Types of Blood Donations</h2>
                    <p className ='center-align'>Giving the "right" type of blood donation - based on your blood type and patient needs - helps ensure the best use of your valuable contribution. Here are some things to consider when determining how you can have the most impact.</p>

                    <div id="Whole Blood Donation" className="section scrollspy">
                        <h2 className="header center-align">Whole Blood Donation</h2>
                        <div class="card horizontal">
                        <div class="card-image">
                            <img src={whole}/>
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
                            <h4>Whole Blood Donation</h4>
                            <p>Whole blood is the most flexible type of donation. It can be transfused in its original form, or used to help multiple people when separated into its specific components of red cells, plasma and platelets.</p>
                            <h6>Who it helps:</h6> <p>Whole blood is frequently given to trauma patients and people undergoing surgery.</p>
                            <h6>Time it takes:</h6> <p>About 1 hour</p>
                            <h6>Ideal blood types:</h6> <p>All blood types</p>
                            </div>
                            
                        </div>
                        </div>
                    </div>

                    <div id="Power Red Donation" className="section scrollspy">
                        <h2 className="header center-align">Power Red Donation</h2>
                        <div class="card horizontal">
                        <div class="card-image">
                            <img src={power}/>
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
                            <p>During a Power Red donation, you give a concentrated dose of red cells, the part of your blood used every day for those needing transfusions as part of their care. This type of donation uses an automated process that separates your red blood cells from the other blood components, and then safely and comfortably returns your plasma and platelets to you.</p>
                            <h6>Who it helps:</h6> <p>Red cells from a Power Red donation are typically given to trauma patients, newborns and emergency transfusions during birth, people with sickle cell anemia, and anyone suffering blood loss.</p>
                            <h6>Time it takes:</h6> <p>About 1.5 hours</p>
                            <h6>Ideal blood types:</h6> <p>O positive, O negative, A negative, and B negative</p>
                            </div>
                            
                        </div>
                        </div>                    
                    </div>

                    <div id="Platelet Donation" className="section scrollspy">
                        <h2 className="header center-align">Platelet Donation</h2>
                        <div class="card horizontal">
                        <div class="card-image">
                            <img src={platelete}/>
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
                            <p>Platelets are tiny cells in your blood that form clots and stop bleeding. Platelets are most often used by cancer patients and others facing life-threatening illnesses and injuries.
                            In a platelet donation, an apheresis machine collects your platelets along with some plasma, returning your red cells and most of the plasma back to you. A single donation of platelets can yield several transfusable units, whereas it takes about five whole blood donations to make up a single transfusable unit of platelets.</p>
                            <h6>Who it helps:</h6> <p>Platelets are a vital element of cancer treatments and organ transplant procedures, as well as other surgical procedures.</p>
                            <h6>Time it takes:</h6> <p>About 2.5-3 hours</p>
                            <h6>Ideal blood types:</h6> <p>A positive, A negative, B positive, O positive, AB positive and AB negative</p>
                            </div>
                            
                        </div>
                        </div>
                    </div>

                    <div id="Plasma Donation" className="section scrollspy">
                        <h2 className="header center-align">Plasma Donation</h2>
                        <div class="card horizontal">
                        <div class="card-image">
                            <img src={ab}/>
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
                            <p>During an AB Elite donation, you give plasma, a part of your blood used to treat patients in emergency situations. AB plasma can be given to anyone regardless of their blood type. Plasma is collected through an automated process that separates plasma from other blood components, then safely and comfortably returns your red blood cells and platelets to you. AB Elite maximizes your donation and takes just a few minutes longer than donating blood.</p>
                            <h6>Who it helps:</h6> <p> AB Plasma is used in emergency and trauma situations to help stop bleeding. </p>
                            <h6>Time it takes:</h6> <p>About 1 hour and 15 minutes</p>
                            <h6>Ideal blood types:</h6> <p>AB positive, AB negative</p>
                            </div>
                            
                        </div>
                        </div>
                    </div>

                    
                    <div id="Blood Types" className="section scrollspy">
                    <h2 className="header center-align">Blood Types and Components</h2>
                    
                    <div className = 'col s4 m4'>
                            <div className="card">
                                <div className="card-image">
                                <img src={drop}/>
                                <span className="card-title red">About Blood Types</span>
                                </div>
                                <div className="card-content">
                                <p>There are actually more than 8 different blood types, some of which are not compatible with each other. Find out how your blood type can help hospital patients in need of a transfusion.</p>
                                </div>
                                <div className="card-action">
                                    <button class="waves-effect waves-light btn red" onClick ={this.handleTypesClick}>Learn more</button>
                                </div>
                            </div>
                        </div>

                        <div className = 'col s4 m5'>
                            <div className="card">
                                <div className="card-image">
                                <img src={components}/>
                                <span className="card-title red">About Blood Components</span>
                                </div>
                                <div className="card-content">
                                <p>During medical treatment, patients may receive whole blood or just the specific blood components they need. Learn more about how blood components impact patient transfusions.</p>
                                </div>
                                <div class="card-action">
                                    <button class="waves-effect waves-light btn red" onClick = {this.handleComponentsClick}>Learn more</button>
                                </div>
                            </div>
                        </div>

                    </div> 

                </div>

                {/* <div className = 'col s3'></div> */}

                </div>
            </div>
        )
    }
}

export default Types