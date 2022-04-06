import React from "react";
import ImageBlock from "./component/imageBlock";
import {galleryData} from '../types';
export default function App(){

  const data:galleryData = {
    url: "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/299/423/80299423_1340960491120_1_600x600.JPG/dims/resize/Q_80,0:",
    title: "testing",
    artist: "abbb",
    group: "N/A",
    type: "original",
    language: "한국어",
    tags: ["female:testing","male:test"],
    date:"2022.03.01",
    sitetype:"hitomi"

  }
  return (
  <>
    <h1>I am App Component</h1>
    <button onClick={() => {
      // @ts-expect-error
      electron.notificationApi.sendNotification("my custom notification")
    }}>Notify</button>
    <ImageBlock data={data} />
  </>
  )
}