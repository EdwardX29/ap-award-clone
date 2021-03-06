import React, {useRef} from 'react'
import Normal from '../assets/AwardsNormal.png'
import Distinction from '../assets/AwardsDistinction.png'
import Honor from '../assets/AwardsHonor.jpeg'
import BackArrow from '../assets/back-arrow.png' 
import Download from '../assets/download.png'

import { motion } from "framer-motion"
import exportAsImage from './exportAsImage'

import './Award.css'

export default function Award(props:any) {
    const setSubmitted = props.setSubmitted

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

    const exportRef = useRef(null);

    return (
        <>
        <div className="awardContainer" ref={exportRef}>
            <motion.div
                drag 
                className="name"
                >{name}</motion.div>
            <motion.div 
                drag
                className="date">
                {formatDate(date)}
            </motion.div>
            <img className="awardImage" src={image} />
        </div>

        <p className="tip">Tip: You can drag the name and date!</p>
        <button className="btn" id="downloadBtn" onClick={() => exportAsImage(exportRef.current, awardType+" - " + name)}>
            <img src={Download} / >Download
        </button>
        <button className="btn" id="backBtn" onClick={()=> revertSubmission()}>
            <img src={BackArrow} />Go back 
        </button>
        </>

        )
}