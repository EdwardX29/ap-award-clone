import React from 'react';
import Blank from '../assets/award-blank.png'
import Normal from '../assets/AwardsNormal.png'
import Distinction from '../assets/AwardsDistinction.png'
import Honor from '../assets/AwardsHonor.jpeg'
import { motion } from "framer-motion"


import './Award.css'

export default function Award(props:any) {

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


    return (
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
            <p className="date">{formatDate(date)}</p>
            <img className="awardImage" src={image} />
        </div>
        )
}