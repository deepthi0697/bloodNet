import React from 'react'
import components from './images/blood-components.PNG'
import Plasma from './images/plasma.PNG'

class Components extends React.Component {
    constructor(){
        super()
        this.state = {
            group: '',
            p1: '',
            p2: '',
            p3: '',
            color: '',
            shelfLife: '',
            storageConditions: '',
            keyUses: ''
        }
    }

    handleWholeClick = () => {
        const p1 = 'Whole blood contains red cells, white cells, and platelets (~45% of volume) suspended in blood plasma (~55% of volume).'
        const p2 = 'Whole Blood is the simplest, most common type of blood donation. It’s also the most flexible because it can be transfused in its original form, or used to help multiple people when separated into its specific components of red cells, plasma and platelets. A whole blood donation requires minimal processing before it is ready to be transfused into a patient. If not needed right away, whole blood can be refrigerated for up to 35 days, depending on the type of anticoagulant used.Whole blood is used to treat patients who need all the components of blood, such as those who have sustained significant blood loss due to trauma or surgery. '
       const color = 'Red'
       const shelfLife = '21/35 days*'
       const storageConditions = 'Refrigerated'
       const keyUses = 'Trauma, Surgery'
       this.setState({p1, p2, color, shelfLife, storageConditions, keyUses})
    }

    handleCellsClick = () => {
        const p1 = 'Red blood cells (RBCs), or erythrocytes, give blood its distinctive color. Produced in our bone marrow, they carry oxygen from our lungs to the rest of our bodies and take carbon dioxide back to our lungs to be exhaled. There are about one billion red blood cells in two to three drops of blood.'
        const p2 = 'Red blood cells are prepared from whole blood by removing the plasma (the liquid portion of the blood). They have a shelf life of up to 42 days, depending on the type of anticoagulant used. They can also be treated and frozen for 10 years or more. RBCs are used to treat anemia without substantially increasing the patient’s blood volume. Patients who benefit most from transfusion of red blood cells include those with chronic anemia resulting from kidney failure or gastrointestinal bleeding, and those with acute blood loss resulting from trauma. They can also be used to treat blood disorders such as sickle cell disease.'
       const color = 'Red'
       const shelfLife = 'Up to 42 days*'
       const storageConditions = 'Refrigerated'
       const keyUses = 'Trauma, Surgery , Anemia, Any blood loss, Blood disorders, such as sickle cell'
       this.setState({p1, p2, color, shelfLife, storageConditions, keyUses})
    }

    handlePlateletesClick = () => {
        const p1 = 'Platelets, or thrombocytes, are small, colorless cell fragments in our blood whose main function is to stick to the lining of blood vessels and help stop or prevent bleeding. Platelets are made in our bone marrow.'
        const p2 = 'Platelets can be prepared by using a centrifuge to separate the platelet-rich plasma from donated whole blood. Platelets from several different donors are then combined to make one tranfusable unit. Alternately, platelets can be obtained using an apheresis machine which draws blood from the donor’s arm, separates the blood into its components, retains some of the platelets, and returns the remainder of the blood to the donor. Using this process, one donor can contribute about four to six times as many platelets as a unit of platelets obtained from a whole blood donation. Platelets are stored at room temperature for up to 5 days. They must receive constant gentle agitation to prevent them from clumping. Platelets are most often used during cancer treatment as well as surgical procedures such as organ transplant, in order to treat a condition called thrombocytopenia, in which there is a shortage of platelets. They are also used to treat platelet function abnormalities.'
       const color = 'Colorless'
       const shelfLife = '5 days'
       const storageConditions = 'Room temperature with constant agitation to prevent clumping'
       const keyUses = 'Cancer treatments, Organ transplants, Surgery'
       this.setState({p1, p2, color, shelfLife, storageConditions, keyUses})
    }


    handlePlasmaClick = () => {
        const p1 = 'Plasma is the liquid portion of blood; our red and white blood cells and platelets are suspended in plasma as they move throughout our bodies.'
        const p2 = 'Blood plasma serves several important functions in our bodies, despite being about 92% water. (Plasma also contains 7% vital proteins such as albumin, gamma globulin and anti-hemophilic factor, and 1% mineral salts, sugars, fats, hormones and vitamins.) It helps us maintain a satisfactory blood pressure and volume, and supplies critical proteins for blood clotting and immunity. It also carries electrolytes such as sodium and potassium to our muscles and helps to maintain a proper pH (acid-base) balance in the body, which is critical to cell function. Plasma is obtained by separating the liquid portion of blood from the cells. Plasma is frozen within 24 hours of being donated in order to preserve the valuable clotting factors. It is then stored for up to one year, and thawed when needed. Plasma is commonly transfused to trauma, burn and shock patients, as well as people with severe liver disease or multiple clotting factor deficiencies.'
       const color = 'Yellowish'
       const shelfLife = '1 year'
       const storageConditions = 'Frozen'
       const keyUses = 'Burn patients, Shock, Bleeding disorders'
       this.setState({p1, p2, color, shelfLife, storageConditions, keyUses})
    }

    handleCryoClick = () => {
        const p1 = 'Cryoprecipitated Antihemophilic Factor (Cryo) is a portion of plasma rich in clotting factors, including Factor VIII and fibrinogen. These clotting factors reduce blood loss by helping to slow or stop bleeding due to illness or injury.'
        const p2 = 'Cryo is prepared by freezing and then slowly thawing frozen plasma. The precipitate is collected and then pooled with contributions from other donors to reach a sufficient volume for transfusion. It can be stored, frozen, for up to a year.Cryo is used to prevent or control bleeding in people whose own blood does not clot properly.  This includes patients with hereditary conditions such as hemophilia and von Willebrands disease. Cryo is also a source of fibrinogen for patients who cannot produce the necessary amount of this important clotting protein on their own.'
       const color = 'White'
       const shelfLife = '1 year'
       const storageConditions = 'Frozen'
       const keyUses = 'Hemophilia, Von Willebrand disease (most common hereditary coagulation abnormality), Rich source of Fibrinogen'
       this.setState({p1, p2, color, shelfLife, storageConditions, keyUses})
    }

    handleGranulocytesClick = () => {
        const p1 = 'White blood cells, or leukocytes, are one of the body’s defenses against disease: some destroy bacteria and others create antibodies against bacteria and viruses or fight malignant disease. But while our own white cells help us stay healthy, they can be dangerous to someone who receives donated blood. That’s because leukocytes may carry viruses that cause immune suppression and release toxic substances in the recipient. To avoid these negative reactions, leukocytes are often removed from transfusable blood components, a process called leuko-reduction.'

        const p3 = 'That doesn’t necessarily mean your white cells can’t be used to help patients in need! Granulocytes are a type of white cell that protects against infection by surrounding and destroying invading bacteria and viruses. They can be used to treat infections that don’t respond to antibiotics. Granulocytes are collected by an automated process called apheresis and must be transfused into the patient within 24 hours of being donated'
        
        const p2 = 'Since granulocyte must be used within 24 hours, donations are taken on an as-needed basis. To be eligible to donate granulocytes, you must have donated platelets through the Red Cross within 30 days.'

        const color = ''

       this.setState({p1, p2, p3, color})
    }
    render(){
        return (
            <div className = 'row'>
                <img src = {components} />
                <h2 className = 'center-align'>How can one donation help multiple people?</h2>
                <div className = 'col s9'>
                    <p>In modern medical treatments, patients may receive a pint of whole blood or just the specific components of the blood that are needed to treat their particular condition. This approach to treatment, referred to as blood component therapy, allows several patients to benefit from one pint of donated whole blood.

                    The transfusable components that can be derived from donated blood are red cells, platelets, plasma, cryoprecipitated AHF (cryo), and granulocytes. An additional component, white cells, is often removed from donated blood before transfusion.</p>
                </div>
                <div className = 'col s3'>
                    <img src = {Plasma} />
                </div>
                <div className = 'col s1'></div>
                <div className = 'card-panel col s8'>
                    <h5 className = 'center-align'>Click to know!</h5>
                    <button className="waves-effect waves-light btn red" onClick = {this.handleWholeClick}>Whole Blood</button>
                    <button className="waves-effect waves-light btn red" onClick = {this.handleCellsClick}>Red Cells</button>
                    <button className="waves-effect waves-light btn red" onClick = {this.handlePlateletesClick}>Platelets</button>
                    <button className="waves-effect waves-light btn red" onClick = {this.handlePlasmaClick}>Plasma</button>
                    <button className="waves-effect waves-light btn red" onClick = {this.handleCryoClick}>Cryo</button>
                    <button className="waves-effect waves-light btn red" onClick = {this.handleGranulocytesClick}>White Cells and Granulocytes</button>

                    <p>{this.state.p1}</p>
                    {
                        this.state.color !== '' ? (
                            <div>
                                <ul>
                                    <li><h6 className = 'red-text'>Color:</h6> <h6>{this.state.color}</h6></li>
                                    <li><h6 className = 'red-text'>Shelf life:</h6> <h6>{this.state.shelfLife}</h6></li>
                                    <li><h6 className = 'red-text'>Storage Conditions:</h6> <h6>{this.state.storageConditions}</h6></li>
                                    <li><h6 className = 'red-text'>Key Uses:</h6> <h6>{this.state.keyUses}</h6></li>
                                </ul>
                            </div>
                        ) : this.state.p3
                    }
                    <p>{this.state.p2}</p>
                </div>
            </div>
        )
    }
}

export default Components