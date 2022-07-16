import React, {useState} from "react"
import './InfoForm.css'

export default function InfoForm() {

    // const [submitted, setSubmitted] = useState(false)
    const [name, setName] = useState("")
    const [awardType, setAwardType] = useState("AP Scholar")
    const [date,  setDate] = useState("")


    return (
        <div className="InfoForm">

            <h1>Create your own award</h1>

            <form
            onSubmit={(e) => e.preventDefault()}
        >
            <label id="nameInputLabel" htmlFor="nameInput">Enter your name</label>
            <input 
                type="text" name="nameInput" required
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />

            <label htmlFor="dateInput">Date</label>
            <input
                type="date" name="dateInput" required
                onChange={(e) => setDate(e.target.value)}
                />

            <label htmlFor="awardSelection">Award Type</label>
            <select 
                name="awardSelection" id="awardSelection" required
                value={awardType} onChange={(e) => setAwardType(e.target.value)}
            >
                <option value="AP Scholar">AP Scholar</option>
                <option value="AP Scholar with Honor">AP Scholar with Honor</option>
                <option value="AP Scholar with Distinction">AP Scholar with Distinction</option>
            </select>
            
            <input type="submit" value="submit"/>
            
        </form>


        </div>

        

      

    )

}