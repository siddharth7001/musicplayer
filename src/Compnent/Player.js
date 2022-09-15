import React,{useState,useRef, useEffect} from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControll from './PlayerControll'

function Player(props) {
const audioEl = useRef(null);
const[isPlaying, setIsPlaying] = useState(false)

useEffect(()=>{
    if(isPlaying){
        audioEl.current.play();
    }else{
        audioEl.current.pause();
    }
});

const SkipSong = (forward = true)=>{
 if(forward){
    props.setCurrentSongIndex(()=>{
        let temp = props.currentSongIndex;
        temp++;

        if(temp > props.songs.length-1){
            temp =0;
        }
        return temp;
    });
 }else{
    props.setCurrentSongIndex(()=>{
        let temp = props.currentSongIndex;
        temp--;
        if(temp < 0){
            temp = props.songs.length-1;;
        }
        return temp;
    })
 }
}

  return (
    <div className='c-player'>
        <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
        <h3>Playing Now</h3>

        <PlayerDetails song ={props.songs[props.currentSongIndex]} />

        <PlayerControll isPlaying={isPlaying} 
                         setIsPlaying={setIsPlaying} 
                         SkipSong = {SkipSong}
                         />

        <p><strong>Next :</strong> {props.songs[props.nextSongIndex].title}</p>
    </div>
  )
}

export default Player