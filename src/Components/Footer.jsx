import { Component } from "react"
import twitterlogo from './assets/twitter.svg'
import iglogo from './assets/instagram.svg'
import blueskylogo from './assets/bluesky.svg'
import returnUp from './assets/right.png' //standin
import './Footer.css'

export function Footer() {
    return (
        <>
        <img src={returnUp} width="50vw" height="50vw" className="returnButton"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
        <div className="footer">
            <div className="links">
                <a href="https://x.com/ryoyshan" rel="noopener" target="_blank">
                    <img src={twitterlogo} width={20} height={20} className="socials"/>
                </a>
                <a href="https://www.instagram.com/ryo.yshan/" rel="noopener" target="_blank">
                    <img src={iglogo} width={20} height={20} className="socials"/>
                </a>
                <a href="https://bsky.app/profile/royfuyi.bsky.social" rel="noopener" target="_blank">
                    <img src={blueskylogo} width={20} height={20} className="socials"/>
                </a>
            </div>
            <a className="footerText">website and art done by me!</a>
        </div>
        </>
    )
}