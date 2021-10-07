import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const Login: NextPage = () => {
  return (
    <div className="container">
        <form>
            <h1>Sign In</h1>
            <div className="col-md-4">
                <div className="row">
                    <label>Email</label>
                    <input name="email" id="email" type="email" className="form-control" />
                </div>
                <div className="row">
                    <label>Password</label>
                    <input name="Password" id="password" type="text" className="form-control"></input>
                </div>
                <div className="row">
                   <a href="Forgot Password">Forgot Password</a>
                    <button className="btn btn-primary" type="submit">Sign In</button>
                </div>
            </div>
        </form>   
        </div>
    )
}

export default Login
