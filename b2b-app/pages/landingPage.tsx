import type { NextPage } from 'next'
import React from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';

export default function LandingPage() {
    const router = useRouter();
    return (
        <div className={styles.container}>
        <h1> Modern finance </h1>
        <form>
            <div className="col-md-4">
                <div className="row">
                <h2>Cash & Treasury Management</h2>
                    <p>The Power to Manage Liquidity, Enterprise Wide. Companies have a tough balancing act: How to pursue strategic growth initiatives, while still minding risk?</p>
                </div>
                <div className="row">
                <h2>Payments</h2>
                    <p>Increase Controls and Visibility. Centralize payment processes to control cash movements and reduce fraud. Spend less on foreign transaction fees and more on business growth.</p>
                </div>
                <div className="row">
                <h2>Working Capital</h2>
                    <p>Reduce your cash flow gap. Our lending solution provides you with credit to help finance your international trade, whether you are an importer, exporter or both.</p>
                </div>
                <div className="row">
                    <button type="submit" className="btn btn-primary" onClick={() =>{ router.push('/feedback') }}>Request Invite</button>
                    <button type="submit" className="btn btn-primary-outline" onClick={() =>router.push('account/login')}>sign In</button>
                </div>
            </div>
        </form>
        </div>
    );
}

