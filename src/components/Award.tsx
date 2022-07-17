import React from 'react';
import Blank from '../assets/award-blank.png'
import Normal from '../assets/AwardsNormal.png'
import Distinction from '../assets/AwardsDistinction.png'
import Honor from '../assets/AwardsHonor.jpeg'
import { motion } from "framer-motion"


import './Award.css'

export default function Award(props:any) {
    // console.log(props)
    const setSubmitted = props.setSubmitted

    // setInterval(()=>{
    //     setSubmitted(false)
        
    // }, 500)

    const name = props.name
    const date = props.date
    const awardType = props.awardType

    let image;
    
    if (awardType === "AP Scholar"){
        image = Normal;
    }
    else if (awardType == "AP Scholar with Honor") {
        image = Honor
    }
    else if (awardType == "AP Scholar with Distinction"){
        image = Distinction
    }

    const formatDate = (_date:string) => {
        const newDate = new Date(_date)
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ]
          return months[newDate.getMonth()] + " " + newDate.getDate() + ", " + newDate.getFullYear()
    }

    const revertSubmission = () => {
        console.log("button clicked to go back")
        setSubmitted(false)
    }

    return (
        <>
        <div className="awardContainer">
            <motion.div
                drag 
                dragConstraints={{
                    top:-50,
                    left:-50,
                    right:200,
                    bottom:50,
                }}
                className="name"
                >{name}</motion.div>
            <p onClick={() => console.log("clicked")}className="date">{formatDate(date)}</p>
            <img className="awardImage" src={image} />
        </div>
        <button>Download</button>
        <div onClick={()=> revertSubmission()}>Go back</div>
        </>

        )
}