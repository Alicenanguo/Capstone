import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";


import './cart.css'

function Total({ priceList }) {

    const arr = Object.values(priceList)
    console.log('arr++++++++++++', arr)

    let sum = 0;
    arr.forEach(el => {
        sum += el
    })


    return (
        <div>sum:{sum}</div>
    )



}
export default Total;
