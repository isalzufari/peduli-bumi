import React from 'react'
import { Link } from 'react-router-dom'

const ResultCarbon = () => {
  return (
    <>
      <h3>Halo! <b>Faishal Zufari</b></h3>
      <p>Kamu diperingkat <b>#45</b></p>

      <div className="card mb-3">
        <div className="card-body">
          <div className="text-center">
            <p>Jejak Karbon Kamu</p>
            <h2>2.45 kgCO2e</h2>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <small className='text-muted'>Rata-rata jejak karbon Indonesia adalah 850 kg C02e. Jejak karbon Anda adalah 222 kg CO2e </small>
        </div>
      </div>

      <div className="row">
        <div className="col-8">
          <div className="d-grid gap-2">
            <Link to="/leaderboard" className='btn btn-success'>Leaderboard</Link>
          </div>
        </div>
        <div className="col-4">
          <div className="d-grid gap-2">
            <a href='/#' className='btn btn-outline-success'>Bagikan</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResultCarbon