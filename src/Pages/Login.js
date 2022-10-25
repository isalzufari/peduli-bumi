import React from 'react'

const Login = ({ signInGoogle }) => {
  return (
    <>
      <div className="py-5 text-center">
        <button onClick={signInGoogle} className='btn btn-outline-primary'>Login</button>
      </div>
    </>
  )
}

export default Login