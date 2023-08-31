import React,{useState} from "react";

// import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`


function BabyHog({eyeColor,name,hobby,id}) {
  const colorImages = {
    blue: BlueBaby,
    sun: SunBaby,
    glowing: GlowingBaby,
  };
  const [weight,setWeight]=useState(100);

  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    if(e.target.name === "+"){
      setWeight((weight)=>weight+5);
    
    }else if(e.target.name === "-"){
     
      setWeight((weight)=>weight>0 ? weight-5:weight);
      
    }
  
  }

  return (
    <li key={id} className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight : {weight}</h3>
      <h3>Hobby : {hobby}</h3>
      <h4>Eye Color : {eyeColor}</h4>

      <button onClick={handleChangeWeight}name="+">Increase Weight</button>
      <button onClick={handleChangeWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
        src={colorImages[eyeColor]}
        style={{ height: `${weight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
