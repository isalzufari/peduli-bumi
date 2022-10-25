import React from 'react'
import { Link } from 'react-router-dom'

const Calculator = () => {
  return (
    <>
      <div className="card mb-3">
        <div className="card-body shadow-sm">
          <p>Jejak Karbon</p>
          <h2>2.45 kgCO2e</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-6 mb-3">
          <div className="card">
            <div className="card-body">
              <p><b>Motor</b></p>
              <p className='text-muted'>Jarak rata-rata per hari</p>
              <input class="form-control" type="text" placeholder="12 km"></input>
            </div>
          </div>
        </div>

        <div className="col-6 mb-3">
          <div className="card">
            <div className="card-body">
              <p><b>Mobil</b></p>
              <p className='text-muted'>Jarak rata-rata per hari</p>
              <input class="form-control" type="text" placeholder="0 km"></input>
            </div>
          </div>
        </div>

        <div className="col-6 mb-3">
          <div className="card">
            <div className="card-body">
              <p><b>AC</b></p>
              <p className='text-muted'>Rata-rata jam per hari</p>
              <input class="form-control" type="text" placeholder="6 jam"></input>
            </div>
          </div>
        </div>

        <div className="col-6 mb-3">
          <div className="card">
            <div className="card-body">
              <p><b>AC</b></p>
              <p className='text-muted'>Rata-rata jam per hari</p>
              <input class="form-control" type="text" placeholder="1 jam"></input>
            </div>
          </div>
        </div>

        <div className="col-6 mb-3">
          <div className="card">
            <div className="card-body">
              <p><b>Kulkas</b></p>
              <p className='text-muted'>Pilih opsi pintu</p>
              <select class="form-select" aria-label="Default select example">
                <option selected value="1">1 pintu</option>
                <option value="2">2 pintu</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-6 mb-3">
          <div className="card">
            <div className="card-body">
              <p><b>Laptop</b></p>
              <p className='text-muted'>Rata-rata jam per hari</p>
              <input class="form-control" type="text" placeholder="9 jam"></input>
            </div>
          </div>
        </div>
      </div>

      <div className="d-grid gap-2">
        <Link to="result" className='btn btn-success'>Kalkulasi</Link>
      </div>
    </>
  )
}

export default Calculator