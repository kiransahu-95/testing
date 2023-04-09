import React from 'react'

const Login = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: 'GrayText', display: 'flex', justifyContent: "center", alignItems: 'center', }}>
      <div style={{ justifyItems: 'center', display: 'flex', flexDirection: 'column', padding: "5rem 3rem", backgroundColor: 'white', borderRadius: "0.5rem" }}>
        <div>
          <img src="https://i.work.ua/employer_design/8/8/9/1770889_company_logo_1.png" alt="logo" className='' />
        </div>

        <div style={{}}>
          <div style={{ alignItems: 'center' }}>
            <p style={{ lineHeight: "0px", padding: "0.5rem 0" }}>Email</p>
            <input type="Email" style={{ borderRadius: '1px solid ', backgroundColor: '#c0dfe4', border: 'none' }} />
          </div>
          <div>
            <p>Password</p>
            <input type="password" style={{ borderRadius: '1px solid', backgroundColor: '#c0dfe4', border: 'none' }} />
          </div>
        </div>
        <div>
          <button type="button" class="btn btn-secondary mt-2" >Login</button>
        </div>


      </div>

    </div>
  )
}

export default Login