import React from 'react'
import M from "materialize-css/dist/js/materialize.min.js"
import Sticky from 'react-sticky-el'
// import Blank from './images/balnk.png'
import A from './images/A.PNG'
import B from './images/B.PNG'
import AB from './images/AB.PNG'
import O from './images/O.PNG'

import DR from './images/donor-recepient.png'
import child from './images/child.png'

class Learn extends React.Component{
    constructor(){
        super()
        this.state = {
            // img_path: Blank,
            heading: 'Group A',
            para: 'has only the A antigen on red  cells (and B antibody in the plasma)',
            group: 'A'
        }
    }

    componentDidMount = () => {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.scrollspy');
            var instances = M.ScrollSpy.init(elems, {});
          });
    }

    handleGroupA = () => {
        this.setState ({
            group: 'A',
            heading: "Group A",
            para: "has only the A antigen on red  cells (and B antibody in the plasma)"
        })
    }

    handleGroupB = () => {
        this.setState ({
            group: 'B',
            heading: "Group B",
            para: "has only the B antigen on red cells (and A antibody in the plasma)"
        })
    }

    handleGroupAB = () => {
        this.setState ({
            group: 'AB',
            heading: "Group AB",
            para: "has both A and B antigens on red cells (but neither A nor B antibody in the plasma)"
        })
    }

    handleGroupO = () => {
        this.setState ({
            group: 'O',
            heading: "Group O",
            para: "has neither A nor B antigens on red cells (but both A and B antibody are in the plasma)"
        })
    }
    render(){
        return (
            <div className = 'row'>

            <div className="col hide-on-med-small-only s3" >
                <Sticky>
                <ul class="section table-of-contents">
                    <li><a href="#Facts About Blood and Blood Types">Facts About Blood and Blood Types</a></li>
                    <li><a href="#Blood Types and Transfusion">Blood Types and Transfusion</a></li>
                    <li><a href="#What Is A Universal Blood Donor?">What Is A Universal Blood Donor?</a></li>
                    <li><a href="#How Is My Blood Type Determined?">How Is My Blood Type Determined?</a></li>
                </ul>
                </Sticky>
            </div>
                <div className = 'col s9'>
                    <div id="Facts About Blood and Blood Types" className="section scrollspy">
                        <h2 className = 'center-align'>Facts About Blood and Blood Types</h2>
                        <h6 className = 'center-align grey-text '>Not all blood is alike.</h6>
                        <h5 className = 'center-align'>How Blood Type Is Determined And Why You Need To Know</h5>
                        <p className = 'center-align'>Blood types are determined by the presence or absence of certain antigens – substances that can trigger an immune response if they are foreign to the body.  Since some antigens can trigger a patient's immune system to attack the transfused blood, safe blood transfusions depend on careful blood typing and cross-matching. Do you know what blood type is safe for you if you need a transfusion?
                        
                        There are four major blood groups determined by the presence or absence of two antigens – A and B – on the surface of red blood cells. In addition to the A and B antigens, there is a protein called the Rh factor, which can be either present (+) or absent (–), creating the 8 most common blood types (A+, A-,  B+, B-,  O+, O-,  AB+, AB-).

                        </p>
                    </div>

                        <h4 className = 'center-align'>Click on a blood type below to learn more.</h4>
                        <div className = 'col s3'>
                            <div className = 'center-align'>
                                <button className="waves-effect waves-light btn red" onClick = {this.handleGroupA}>Group A</button>
                            </div>
                            <br/>
                            <div className = 'center-align'>
                                <button className="waves-effect waves-light btn red" onClick = {this.handleGroupB}>Group B</button>
                            </div>
                            <br/>
                            <div className = 'center-align'>
                                <button className="waves-effect waves-light btn red" onClick = {this.handleGroupAB}>Group AB</button>
                            </div>
                            <br/>
                            <div className = 'center-align'>
                                <button className="waves-effect waves-light btn red" onClick = {this.handleGroupO}>Group O</button>
                            </div>
                        </div>
                        <div className = 'col s3'>
                            {/* <img src={require(`${this.state.img_path}`)} alt={this.state.alt} width={150} /> */}
                           {
                               this.state.group === 'A' ? (
                                   <img src = {A} /> 
                               ) : ( this.state.group === 'B' ? <img src = {B} /> : ( this.state.group === 'AB' ? <img src = {AB} /> : ( this.state.group === 'O' ? <img src = {O} /> : '')))
                           }
                        </div>
                        <div className = 'col s3'>
                            <div className = 'valign-wrapper'>
                                <blockquote>
                                    <h4>{this.state.heading}</h4>
                                </blockquote>
                                </div>
                                <div className = 'valign-wrapper'>
                                    <h6>{this.state.para}</h6>
                                </div>
                        </div>

                           <div id="Blood Types and Transfusion" className="section scrollspy col s9">
                            
                            <h2 className = 'center-align'>Blood Types and Transfusion</h2>
                                <h6 className = 'center-align grey-text '>Each year 4.5 million lives are saved by blood transfusions.</h6>
                                <p className ='center-align'>There are very specific ways in which blood types must be matched for a safe transfusion. The right blood transfusion can mean the difference between life and death. 
                                Every 2 seconds someone in the US needs a blood transfusion.

                                Use the interactive graphic below to learn more about matching blood types for transfusions.

                                Also, Rh-negative blood is given to Rh-negative patients, and Rh-positive or Rh-negative blood may be given to Rh-positive patients. The rules for plasma are the reverse. </p>

                                <h6 className = 'red-text '>The universal red cell donor has Type O negative blood.</h6>
                                <h6 className = 'red-text '>The universal plasma donor has Type AB blood.</h6>
                                <div className = 'center-align'>
                                    <img className = 'center-align' src = {DR} />
                                
                            </div>
                            
                           </div>

                           <div id="What Is A Universal Blood Donor?" className="section scrollspy col s9">
                                <h2 className = 'center-align'>What Is A Universal Blood Donor?</h2>
                                <p className = 'center-align'>Universal donors are those with an O negative blood type.  Why?  O negative blood can be used in transfusions for any blood type.  

                                Type O is routinely in short supply and in high demand by hospitals – both because it is the most common blood type and because type O negative blood is the universal blood type needed for emergency transfusions and for immune deficient infants.

                                Approximately 45 percent of Caucasians are type O (positive or negative), but 51 percent of African-Americans and 57 percent of Hispanics are type O. Minority and diverse populations, therefore, play a critical role in meeting the constant need for blood.

                                Types O negative and O positive are in high demand.  Only 7% of the population are O negative. However, the need for O negative blood is the highest because it is used most often during emergencies. The need for O+ is high because it is the most frequently occurring blood type (37% of the population).

                                The universal red cell donor has Type O negative blood. The universal plasma donor has Type AB blood. For more about plasma donation, visit the plasma donation facts.
                                </p>
                            </div>

                        <div id="How Is My Blood Type Determined?" className="section scrollspy col s9">
                            <h2 className = 'center-align'>How Is My Blood Type Determined?</h2>
                            <p className = 'center-align'>It’s inherited. Like eye color, blood type is passed genetically from your parents. Whether your blood group is type A, B, AB or O is based on the blood types of your mother and father.</p>
                            <div className = 'center-align'>
                                <img src = {child}/>
                            </div>
                        </div>
                </div>                
            </div>
        )
    }
}

export default Learn