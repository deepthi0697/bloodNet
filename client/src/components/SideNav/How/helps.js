import React from 'react'
import help from './images/helps.PNG'

class Helps extends React.Component{
    render(){
        return (
            <div className = 'row'>
                <img src = {help} />
                <div className = 'col s1'></div>
                <div className = 'col s8'>
                    <h2 className ='center-align'>Who Can You Help by Donating Blood?</h2>
                    <p>Every day, blood donors help patients of all ages: accident and burn victims, heart surgery and organ transplant patients, and those battling cancer. In fact, every two seconds, someone in the U.S. needs blood. Here are just a few of their stories.</p>

                    <div className = 'card-panel'>
                        <h4 className = 'red-text'>Cancer Patients</h4>
                        <h5>Ideal Donation Type</h5>
                        <p>Platelets donation, because certain cancers and cancer treatments prevent patients from producing their own.</p>
                        <h5>Ideal Blood Type</h5>
                        <p>A positive, A negative, B positive, O positive, AB positive and AB negative</p>
                    </div>


                    <div className = 'card-panel'>
                        <h4 className = 'red-text'>Trauma Patients</h4>
                        <h5>Ideal Donation Type</h5>
                        <p>Power Red, because red cells carry oxygen throughout the body and are frequently given to trauma and surgery patients. 

                        AB Elite plasma donation, because AB plasma is needed to help stop bleeding. Call 1-800-RED CROSS to make an AB Elite appointment.</p>
                        <h5>Ideal Blood Type</h5>
                        <ul>
                            <li>1. For Power Red: O positive, O negative, B negative, A negative</li>
                            <li>2. For AB Elite: AB positive, AB negative</li>
                        </ul>
                    </div>

                    <div className = 'card-panel'>
                        <h4 className = 'red-text'>Sickle Cel Patients</h4>
                        <h5>Ideal Donation Type</h5>
                        <p>Whole blood, especially from African-American donors, because sickle cell patients require multiple transfusions and must be very closely matched to the donor’s blood type, usually from the same racial and ethnic group.</p>
                        <h5>Ideal Blood Type</h5>
                        <p>O negative, especially from African-American donors</p>
                    </div>

                    <div className = 'card-panel'>
                        <h4 className = 'red-text'>Burn Patients</h4>
                        <h5>Ideal Donation Type</h5>
                        <p>AB Elite, because plasma helps maintain blood pressure and other vital functions.</p>
                        <h5>Ideal Blood Type</h5>
                        <p>AB positive, AB negative. Type AB, the universal plasma donor's blood can be given to any patient needing plasma. Make an even greater impact for patients in need by giving an AB Elite plasma donation. </p>
                    </div>

                </div>
            </div>
        )
    }
}

export default Helps