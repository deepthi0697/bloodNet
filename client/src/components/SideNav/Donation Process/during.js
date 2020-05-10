import React from 'react'
import M from "materialize-css/dist/js/materialize.min.js"
import Sticky from 'react-sticky-el'

import heading from '../How/images/during.PNG'
import date from '../How/images/date.PNG'
import food from '../How/images/food.PNG'
import rest from '../How/images/rest.PNG'

import ID from '../How/images/id.PNG'
import medication from '../How/images/medication.PNG'

class Process extends React.Component {
    componentDidMount = () => {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.scrollspy');
            var instances = M.ScrollSpy.init(elems, {});
          });
    }
    render(){
        return (
            <div className = 'row'>
                <div className = 'col s9'>
                    <img src = {heading} />

                    <div className="col hide-on-med-small-only s3">
                        <Sticky>
                        <ul className="section table-of-contents">
                            <li><a href="#Before Your Donation">Before Your Donation</a></li>
                            <li><a href="#On the Day of Your Donation">On the Day of Your Donation</a></li>
                            <li><a href="#After Your Donation">After Your Donation</a></li>
                        </ul>
                        </Sticky>
                        </div>

                        <div id="Before Your Donation" className="section scrollspy">
                            <h2>Before Your Donation</h2>
                            <div className = 'col s3'>
                                <img src= {date}/>
                                <h4 className = 'center-align'>Make an Appointment</h4>
                                <p>Select a donation type and find a convenient time that works best for you.</p>
                            </div>

                            <div className = 'col s3'>
                                <img src= {food}/>
                                <h4 className = 'center-align'>Get the Dish on Nutrition</h4>
                                <p>Have iron-rich foods, such as red meat, fish, poultry, beans, spinach, iron-fortified cereals or raisins.</p>
                            </div>

                            <div className = 'col s3'>
                                <img src= {rest}/> 
                                <h4 className = 'center-align'>Get the Dish on Nutrition</h4>
                                <p>Have iron-rich foods, such as red meat, fish, poultry, beans, spinach, iron-fortified cereals or raisins.</p>
                            </div>
                            <div className = 'col s3'></div>
                            <div className = 'col s9'>
                                <h5 className = 'red-text'>Additional tips before donating:</h5>
                                <ul>
                                    <li>1. Donating Platelets? Don't take aspirin for 2 days before your appointment.</li>
                                    <li>2. Ask a friend to donate at the same time . You can support each other and do twice as much good!</li>   
                                </ul>
                            </div>

                        </div>
                    
                            {/*  */}
                            <div className = 'col s3'></div>
                    <div id="On the Day of Your Donation" className="section scrollspy col s9" >
                        <h2>On the Day of Your Donation</h2>
                    
                    <div className = 'col s3'>
                        <img src= {ID}/>
                        <h4 className = 'center-align'>Photo ID</h4>
                        <p>Please bring your  driver's license or any other forms of identification.</p>
                    </div>

                    <div className = 'col s3'>
                        <img src= {medication}/> 
                        <h4 className = 'center-align'>Medication List</h4>
                        <p>We'll need to know about all prescription and over-the-counter medications you're taking.</p>
                    </div>

                    <div className = 'col s3'></div>
                    <div className = 'col s9'>
                        <h5 className = 'red-text'>Additional tips for the day of your donation:</h5>
                        <ul>
                            <li>1. Drink an extra 16 oz. of water (or other nonalcoholic drink) before your appointment.</li>
                            <li>2. Eat a healthy meal, avoiding fatty foods like hamburgers, fries or ice cream.</li>   
                            <li>3. Wear a shirt with sleeves that you can roll up above your elbows.</li>
                            <li>4. Relax, listen to music, talk to other donors or read while you donate.</li>
                        </ul>
                    </div>
                    </div>

                    {/*  */}
                    <div className = 'col s3'></div>
                <div id="After Your Donation" className="section scrollspy col s9" >
                <h2>After Your Donation</h2>
                
                <div className = 'col s3'>
                    <h5 className = 'center-align'>Enjoy a Snack</h5>
                    <p>Relax for a few minutes in our refreshment and recovery area — have some cookies or other snacks — you’ve earned it!</p>
                </div>

                <div className = 'col s3'> 
                    <h5 className = 'center-align'>Tell Others About Your Good Deed</h5>
                    <p>The gratification of giving blood is a feeling you'll want to share.</p>
                </div>

                <div className = 'col s3'>
                    <h5 className = 'center-align'>Drink Extra Liquids</h5>
                    <p>Drink an extra four (8 oz.) glasses of liquids and avoid alcohol over the next 24 hours.</p>
                </div>
                <div className = 'col s3'></div>
                <div className = 'col s9'>
                    <h5 className = 'red-text'>Additional tips for after your donation:</h5>
                    <ul>
                        <li>1. Keep the strip bandage on for the next several hours; to avoid a skin rash, clean the area around the bandage with soap and water.</li>
                        <li>2. Don’t do any heavy lifting or vigorous exercise for the rest of the day.</li>   
                        <li>3. If the needle site starts to bleed, apply pressure and raise your arm straight up for 5-10 minutes or until bleeding stops.</li>
                        <li>4. If you experience dizziness or lightheadedness, stop what you’re doing and sit down or lie down until you feel better; avoid performing any activity where fainting may lead to injury for at least 24 hours.</li>
                        <li>Keep eating iron-rich foods.</li>
                        <li>If you donate frequently, be sure to take multivitamins with iron to ensure you continue to replenish your iron stores before your next donation.</li>
                    </ul>
                </div>
                </div>
                    </div>
                    </div>
        )
    }
}

export default Process