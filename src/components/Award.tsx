import React from 'react';
import Blank from '../assets/award-blank.png'
import Normal from '../assets/AwardsNormal.png'
import Distinction from '../assets/AwardsDistinction.png'
import Honor from '../assets/AwardsHonor.jpeg'


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


    return (
        <>
            <p>{name}</p>
            <p>{date}</p>
            <img src={image} />
        </>
        )
}