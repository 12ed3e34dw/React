import React from "react";
import axios from 'axios';
import {useState} from 'react';
import {useEffect} from 'react';
function Home(){
    const[data,setData]=useeState([])
    useEffect(() => {
        axios.get('')
            .then(res=>setData())
    }, []);



    return (
     <div>Home</div>
    )
}

export  default Home