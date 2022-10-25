import React from 'react'

const Leaderboard = () => {
  return (
    <>
      <h3 className='text-center mb-5'>Peringkat Pengurangan Polusi Udara</h3>
      <div className="d-flex justify-content-center">
        <img className="rounded-circle shadow" src="https://dummyimage.com/300x300/fff/dbdbdb" width={150} alt="Rank" />
        <img className="rounded-circle mx-5 shadow-lg" src="https://dummyimage.com/300x300/fff/dbdbdb" width={150} alt="Rank" />
        <img className="rounded-circle shadow-sm" src="https://dummyimage.com/300x300/fff/dbdbdb" width={150} alt="Rank" />

      </div>

      <div class="d-flex justify-content-between mb-2">
        <h5>Peringkat Kamu</h5>
        <div className="d-flex">
          <p className='d-flex'>
            <h6 className='mx-2'><i class="bi bi-trophy-fill"></i></h6>
            <p>#45</p>
          </p>
          <p className='d-flex'>
            <h6 className='mx-2'><i class="bi bi-globe"></i></h6>
            <p>2.45</p>
          </p>
        </div>

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
        </div>
      </div>
    </>
  )
}

export default Leaderboard