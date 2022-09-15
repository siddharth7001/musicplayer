import React from 'react'

function Player_details(props) {
  return (
    <div className='cplayer--details'>
        <div className="details-img">
            <img src = {props.song.img_src} alt= "" />
        </div>
        <h3 className="details-title">{props.song.title}</h3>
        
    </div>
  )
}

export default Player_details