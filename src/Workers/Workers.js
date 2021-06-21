import { React } from 'react'
import './workers.css'
import Worker from '../Worker/Worker'

const Workers = ({ workers, rmWorkerBtn }) => {
  // console.log(workers)

  return (
    <div className="workers">
      {workers.map((worker) => <Worker worker={worker} rmWorkerBtn={rmWorkerBtn} key={worker._id} />)}
    </div>
  )
}

export default Workers;
