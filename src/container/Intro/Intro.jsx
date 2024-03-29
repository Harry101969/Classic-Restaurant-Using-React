import React, { useState } from 'react';
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs'
import { images,meal } from '../../constants';
import './Intro.css';

function Intro () {
    const vidref = React.useRef();
    const [playVideo , setPlayVideo] =useState(false);
    const handleVideo = () =>{
        setPlayVideo((prePlayVideo)=>!prePlayVideo);

        if(playVideo){
            vidref.current.pause();
        }else {
            vidref.current.play();
        }
    }
   return(
      <div className='app__video'>
        <video src={meal}
        ref={vidref}
        type='video/mp4'
        loop
        controls={false}
        muted
        />
<div className='app__video-overlay flex__center'>
 <div className='app__video-overlay_circle flex__center'
  onClick={handleVideo}
 >
  {playVideo?(
 <BsPauseFill color='#fff' fontSize={30}/>
  ): (
    <BsFillPlayFill color='#fff' fontSize={30}/>
  )}
 </div>
</div>
      </div>
   )
}

export default Intro;