"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Home() {

  //getter and setter to change api
  const [dogData, setDogData] = useState({});
  
  const APIURL = "https://dog.ceo/api/breeds/list/all";

  useEffect(()=>{    //actual api call garxam
    axios.get(APIURL).then(response=>{                 //then ko meaning is promis install vaye sakyo
     const breeds = response.data.message;
     setDogData(breeds);
    })     
  },[])   //arrow finction ho jun used hunxa in ES6
  


  return (
    <main>
      <h2>DOG BREEDS</h2>
      <div>
        {Object.keys(dogData).map((breed, index) => {
            //const image= await getDogImage(breed);
          
          return (
            <div key={index}>
              <DogImage breed={breed} />
            <h2>{breed}</h2>
              </div>
          )
        })}
      </div>
    </main>
  );
}

//photo ko lagi component banako
const DogImage = ({breed}:any)=>{

  const [pic, setPic] = useState("");
  function getDogImage(breedName:any,subBread=null){      //any is type of breedName
     axios.get(`https://dog.ceo/api/breed/${breedName.toLowerCase()}/images/random`).then(response=>setPic(response.data.message));
   
  }

  useEffect(()=>{
    getDogImage(breed);
  },[breed]);


  return <img src={pic} />
}

//Array.map((item , index)=>{})