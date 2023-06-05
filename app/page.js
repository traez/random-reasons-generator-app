"use client";
import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import { array } from "./data";

export default function Home() {
  const [picBorderColor, setPicBorderColor] = useState("red");

  const [picId, setPicId] = useState(0);

  const [obiReason, setObiReason] = useState([11, array[11].obir]);

  const [odasReason, setOdasReason] = useState([3, array[3].odasr]);

  const handleButtonClick = () => {
    let colo = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setPicBorderColor(colo);

    let pic = Math.floor(Math.random()*array.length);
    setPicId(pic);

    let obiRe = Math.floor(Math.random()*array.length);
    setObiReason([obiRe, array[obiRe].obir]);

    let odasRe = Math.floor(Math.random()*array.length);
    setOdasReason([odasRe, array[odasRe].odasr]);
  };

  return (
    <main>
      <Header onClickFunc={handleButtonClick} obiRe={obiReason} odasRe={odasReason}/>
      <Section borderColor={picBorderColor} obiPic={picId}/>
      <Footer />
    </main>
  );
}
