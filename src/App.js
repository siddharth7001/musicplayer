
import { useState,useEffect } from 'react';
import './App.css';
import Player from './Compnent/Player';

function App() {
  const [songs] = useState([
    {
      title : "Bad_boy",
      src : "./music/Bad Boy.mp3",
      img_src : "./img/maxresdefault.jpg"
    },
    {
      title : "Industry Baby",
      src : "./music/Industry Baby.mp3",
      img_src : "./img/industry.jpg"
    },
    {
      title : "Lean On",
      src : "./music/Lean On.mp3",
      img_src : "./img/images (2).jpg"

    },
    {
      title : "Let Me Down Slowly",
      src : "./music/Let Me Down Slowly.mp3",
      img_src : "./img/Let_Me_Down_Slowly.jpg"

    },
    {
      title : "Let Me Love You",
      src : "./music/Let Me Love You.mp3",
      img_src : "./img/let me love you.jpg"
    },
    {
      title : "Mi Gente",
      src : "./music/Mi Gente.mp3",
      img_src : "./img/mi gente.jpg"
    },
    {
      title : "RITMO",
      src : "./music/RITMO.mp3",
      img_src : "./img/RITMO.jpg"
    },
    {
      title : "Unstoppable",
      src : "./music/Unstoppable.mp3",
      img_src : "./img/download (1).jpg"
    },
  ])

  const [currentSongIndex,setCurrentSongIndex] = useState(0);
  const [nextSongIndex,setNextSongIndex] = useState(0);
  
  useEffect(()=>{
       setNextSongIndex(()=>{
        if(currentSongIndex+1 >songs.length-1){
          return 0;
        }
        else{
          return currentSongIndex + 1;
        }
       })
  },[currentSongIndex]);
  return (
    <div className="App">
      <Player
      currentSongIndex = {currentSongIndex}
      setCurrentSongIndex = {setCurrentSongIndex}
      nextSongIndex = {nextSongIndex}
      songs = {songs}
      />
    </div>
  );
}

export default App;
