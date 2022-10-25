import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="row mb-3">
        <div className="col">
          {/* <img src="" alt="" /> */}
          <i class="bi bi-person-circle"></i>
          <p>Halo,</p>
          <p>Elaine Gimi</p>
        </div>
        <div className="col text-end">
          <h3><i class="bi bi-bell"></i></h3>
        </div>
      </div>

      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <div className="d-flex align-items-center">
                <div className="p-2">
                  <h1><i class="bi bi-star-fill"></i></h1>
                </div>
                <div className="p-2">
                  <p>EXP Kamu</p>
                  <p>240</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex align-items-center">
                <div className="p-2">
                  <h1><i class="bi bi-trophy-fill"></i></h1>
                </div>
                <div className="p-2">
                  <p>Rank Kamu</p>
                  <p>#45</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <div className="card">
            <div className="card-body text-center">
              <h1>2.45 Kg</h1>
              <p>Karbon Harian</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body text-center">
              <h1>8.82Kg</h1>
              <p>Total Karbon</p>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-between mb-2">
        <h5>Top 5 Leaderboard</h5>
        <Link to='leaderboard' className='text-link'>Semua <i class="bi bi-chevron-right"></i></Link>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <p>1</p>
              <h3 className='mx-3'><i class="bi bi-person-circle"></i></h3>
              <p>Putri Fatma</p>
            </div>
            <div className="d-flex">
              <h5 className='mx-3'><i class="bi bi-globe"></i></h5>
              <p>0.45</p>
            </div>
          </div>
        </div >
      </div >

    </>
  )
}

export default Home