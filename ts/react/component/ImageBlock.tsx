import React from "react";

import './ImageBlock.scss';
import {Props,galleryData} from'../../types';

const ImageBlock = (props: Props) =>{
  //https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/299/423/80299423_1340960491120_1_600x600.JPG/dims/resize/Q_80,0
  return (                                                               
    <div className="imgBlock container">
      <div>
        {props.data.sitetype}
      </div>
      <div className="image-container">
        <img src={props.data.url}></img>                 
      </div>
      <div className="container">
        <div id="title"><a onClick={() => {
          // @ts-expect-error
          electron.notificationApi.sendNotification("my custom notification")
        }}>{props.data.title}</a></div>

        <div id="artist"><a onClick={() => {
          // @ts-expect-error
          electron.notificationApi.sendNotification("my custom notification")
        }}>{props.data.artist}</a></div>

        <div id="group"><a onClick={() => {
          // @ts-expect-error
          electron.notificationApi.sendNotification("my custom notification")
        }}>{props.data.group}</a></div>

        <div id="language"><a onClick={() => {
          // @ts-expect-error
          electron.notificationApi.sendNotification("my custom notification")
        }}>{props.data.language}</a></div>

        <div id="tags" className="">{props.data.tags.map((tag,index) => {
          let tags:string[] = tag.split(":")
          let gender:string = tags[0]
          return(
            <div className={`tag badge rounded-pill ${gender}`} key={index}><a onClick={() => {
              // @ts-expect-error
              electron.notificationApi.sendNotification("my custom notification")
            }}>{tag}</a><button></button></div>
          )
        })}</div>

        <div id="date"><a>{props.data.date}</a></div>
      </div>
      
    </div>
  )
}

export default ImageBlock