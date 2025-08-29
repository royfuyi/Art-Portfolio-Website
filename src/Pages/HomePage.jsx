import { useEffect } from "react"
import title from './assets/title.png'
import profile from './assets/profile.png'
import avatar1 from './assets/avatar1.png'
import avatar2 from './assets/avatar2.png'
import genshin from './assets/genshin.png'
import zzz from './assets/zzz.png'
import crk from './assets/crk.png'
import dunmeshi from './assets/dunmeshi.png'
import './HomePage.css'

export function HomePage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <div className='home'>
                <img src={title} className='title' />
                <div className='intro'>
                    <img className='profile' src={profile} />
                    <div className='homeTextboxL'>
                        <p className='homeText'>hi, I am ryo :)</p>
                        <p className='homeText'>I am currently a uni student studying computer science and a hobbyist artist!</p>
                    </div>
                </div>
                <div className='intro'>
                    <div className='homeTextboxR'>
                        <p className='homeText'>I mainly draw character art of whatever media that takes up my brain space at the moment or just fun random doodles</p>
                        <p className='homeText'>also art prints and stickers coming soon...</p>
                    </div>
                    <img className='profile' src={avatar1} id="av2" />
                </div>
                <div className='intro' id="thoughtBox">
                    <div className='homeTextboxL' id="thought">
                        <p className='homeText'>the current culprits:</p>
                        <div className="intro" id="thoughtB">
                            <div className="thoughtSubBox" id="leftThoughtCol">
                                <div className="thoughtSubBox thoughtR" id="genshin">
                                    <img className='smallIcon' src={genshin} />
                                    <p className="homeText"> genshin </p>
                                </div>
                                <div className="thoughtSubBox thoughtL">
                                    <img className='smallIcon' src={zzz} />
                                    <p className="homeText"> zzz </p>
                                </div>
                            </div>
                            <div className="thoughtSubBox" id="rightThoughtCol">
                                <div className="thoughtSubBox thoughtR">
                                    <img className='smallIcon' src={crk} />
                                    <p className="homeText"> cookie run kingdom </p>
                                </div>
                                <div className="thoughtSubBox thoughtL">
                                    <img className='smallIcon' src={dunmeshi} />
                                    <p className="homeText"> dungeon meshi </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="thoughtImgBox"><img className='profile' id="thoughtImg" src={avatar2} /></div>
                <p className="subTextP" id="endText">ALSO art prints and stickers coming soon...</p>
            </div>
        </>
    )
}
