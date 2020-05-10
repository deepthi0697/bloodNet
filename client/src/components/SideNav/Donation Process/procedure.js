import React from 'react'

import Donation from '../How/images/step1.PNG'
import Processing from '../How/images/step2.PNG'
import Testing from '../How/images/step3.PNG'
import Storage from '../How/images/step4.PNG'
import Distribution from '../How/images/step5.PNG'
import Transfusion from '../How/images/step6.PNG'

class Procedure extends React.Component {
    render(){
        return (
            <div className = 'row'>
                <div className = 'col s1'></div>
                <div className = 'col s8'>
                    <h2 className = 'center-align'>What Happens to Donated Blood</h2>
                    <h5 className = 'grey-text'>Your blood journeys through many steps and tests that ensure our blood supply is as safe as possible and helps as many people as possible.</h5>

                    <div class="card horizontal">
                    <div class="card-image">
                        <img src={Donation} />
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                        <h4>Step One</h4>
                        <h5>The Donation</h5>
                        <ul>
                            <li>1. You arrive for your blood donation appointment.</li>
                            <li>2. Health history and mini physical are completed.</li>
                            <li>3. For a whole blood donation, about 1 pint of blood is collected; several small test tubes of blood are also collected for testing.</li>
                            <li>4. Your donation, test tubes and your donor record are labeled with an identical bar code label.</li>
                            <li>5. Your donation is kept on ice before being taken to a Red Cross center for processing; the test tubes go to the lab.</li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    <div class="card horizontal">
                    <div class="card-image">
                        <img src={Processing} />
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                        <h4>Step Two</h4>
                        <h5>Processing</h5>
                        <ul>
                            <li>1. At our processing center, information about your donation is scanned into a computer database.</li>
                            <li>2.Most whole blood donations are spun in centrifuges to separate it into transfusable components: red cells, platelets, and plasma.</li>
                            <li>3. Plasma may be processed into components such as cryoprecipitate, which helps control the risk of bleeding by helping blood to clot.</li>
                            <li>4. Red cells and platelets are leuko-reduced, which means your white cells are removed in order to reduce the possibility of the recipient having a reaction to the transfusion.</li>
                            <li>5. Each component is packaged as a “unit,” a standardized amount that doctors will use when transfusing a patient.</li>
                        </ul>
                        </div>
                        </div>
                        </div>

                    <div class="card horizontal">
                    <div class="card-image">
                        <img src={Testing} />
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                        <h4>Step Three</h4>
                        <h5>Testing</h5>
                        <ul>
                            <li>1.In parallel with Step 2, your test tubes arrive at a testing laboratory</li>
                            <li>2.A dozen tests are performed, to establish the blood type and test for infectious diseases.</li>
                            <li>3. Test results are transferred electronically to the processing center within 24 hours.</li>
                            <li>4. If a test result is positive, your donation will be discarded and you will be notified</li>
                        </ul>
                        </div>
                    </div>
                    </div>


                    
                    <div class="card horizontal">
                    <div class="card-image">
                        <img src={Storage} />
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                        <h4>Step Four</h4>
                        <h5>Storage</h5>
                        <ul>
                            <li>1.When test results are received, units suitable for transfusion are labeled and stored.</li>
                            <li>2.Red cells are stored in refrigerators at 6ºC for up to 42 days.</li>
                            <li>3.Platelets are stored at room temperature in agitators for up to five days.</li>
                            <li>4.Plasma and cryo are frozen and stored in freezers for up to one year.</li>
                        </ul>
                        </div>
                    </div>
                    </div>


                    <div class="card horizontal">
                    <div class="card-image">
                        <img src={Distribution} />
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                        <h4>Step Five</h4>
                        <h5>Distribution</h5>
                        <ul>
                            <li>1. Blood is available to be shipped to hospitals 24 hours a day, 7 days a week.</li>
                            <li>2. Hospitals typically keep some blood units on their shelves, but may call for more at any time, such as in case of large scale emergencies.</li>
    
                        </ul>
                        </div>
                    </div>
                    </div>

                    <div class="card horizontal">
                    <div class="card-image">
                        <img src={Transfusion} />
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                        <h4>Step Six</h4>
                        <h5>Transfusion</h5>
                        <ul>
                            <li>1. An ill or injured patient arrives at a hospital or treatment center.</li>
                            <li>2.Physicians determine whether the patient requires a transfusion and, if so, which type.</li>
                            <li>3. Blood transfusions are given to patients in a wide range of circumstances, including serious injuries (such as in a car crash) surgeries, child birth, anemia, blood disorders, cancer treatments, and many others.</li>
                            <li>4. A patient suffering from an iron deficiency or anemia may receive red blood cells to increase their hemoglobin and iron levels, improving the amount of oxygen in the body.</li>
                            <li>5. Patients who are unable to make enough platelets, due to illness or chemotherapy, may receive platelet transfusions to stay healthy.</li>
                            <li>6. Plasma transfusions are used for patients with liver failure, severe infections, and serious burns.</li>
                        </ul>
                        </div>
                    </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Procedure