import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const ForgotPassword: NextPage = () => {
  return (
    <div className={styles.container}>
        <form>
            <h1>Request Invite</h1>
            <div className="col-md-6">
                <div className="row">
                    <label>Email</label>
                    <input name="email" id="email" type="email" className="form-control"/>
                </div>
                <div className="row">
                   <a href="Back to login">Back to login</a>
                    <button className="primary" type="submit">Submit</button>
                </div>
            </div>
        </form>
      </div>  
  )
}

export default ForgotPassword
