import React from 'react'
import './worker.css'

const Worker = ({ worker, rmWorkerBtn }) => {

  const { image, position, _id } = worker
  // console.log(typeof _id)
  return (
    <div className="worker">
      <img alt="ghbdtn" src={image} />
      <p>{position}</p>
      <button
        onClick={() => rmWorkerBtn(_id)}>Remove</button>
    </div>
  )
}

export default Worker;
