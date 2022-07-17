import React, {useState} from "react"
import './InfoForm.css'
import Accorn from '../assets/accorn.svg'
import Award from './Award';

export default function InfoForm() {

    const [submitted, setSubmitted] = useState(false)
    const [name, setName] = useState("")
    const [awardType, setAwardType] = useState("AP Scholar")
    const [date,  setDate] = useState("")


    return (!submitted ? 
        (<div className="">
            <h1>Create your own award</h1>
            <div className="InfoFormContainer">
                <img className="cbAccorn" src={Accorn} />
                <h3>Info for certificate</h3>
                <form className="InfoForm"
                onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true);
                    }
                }>
                    <div className="input-div">
                        <label id="nameInputLabel" htmlFor="nameInput">Enter your name</label>
                        <input 
                            type="text" name="nameInput" required
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                            autoComplete="off"
                        />
                    </div>
                    <div className="input-div">
                        <label htmlFor="dateInput">Date</label>
                        <input
                            type="date" name="dateInput" required
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="input-div">
                        <label htmlFor="awardSelection">Award Type</label>
                        <select 
                            name="awardSelection" id="awardSelection" required
                            value={awardType} onChange={(e) => setAwardType(e.target.value)}
                        >
                            <option value="AP Scholar">AP Scholar</option>
                            <option value="AP Scholar with Honor">AP Scholar with Honor</option>
                            <option value="AP Scholar with Distinction">AP Scholar with Distinction</option>
                        </select>
                    </div>
                    <input type="submit" value="Next"/>
            </form>
        </div>
        </div>) :

        <Award submitted={submitted} setSubmitted={setSubmitted} name={name} date={date} awardType={awardType}/>

    )

}