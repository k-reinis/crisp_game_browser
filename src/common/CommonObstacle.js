import React from 'react';
import './CommonObstacle.css'

const GetRandomCoordinates = () => {
  let min = 1
  let max = 99
  let x = Math.floor(Math.random() * (max - min + 1)) + min
  let y = Math.floor(Math.random() * (max - min + 1)) + min
  // console.log("function " + x, y)
  return {x, y}
}

function CommonObstacle() {
  var style = {
    top: GetRandomCoordinates().x,
    left: GetRandomCoordinates().y
  }
  // const test = [GetRandomCoordinates()]
  // console.log("one element " + test[0].x, test[0].y)
  return (
    <div className="obstacle" style={style}>
    </div>
  )
}

export default CommonObstacle;