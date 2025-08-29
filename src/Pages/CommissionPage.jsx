import { useEffect } from "react"
import img1 from './assets/h2com1.png'
import img2 from './assets/h2com2.png'
import img3 from './assets/h2com3.png'
import img4 from './assets/h2com4.png'
import img5 from './assets/commsize.png'
import img6 from '../Components/illustrations/1_900x800.png'
import img7 from '../Components/illustrations/13_836x800.png'
import img8 from '../Components/illustrations/12_850x800.png'
import img9 from '../Components/illustrations/14_800x800.png'
import img10 from '../Components/illustrations/15_800x800.png'
import img11 from '../Components/illustrations/3_800x800.png'
import paymentButton from './assets/paymentButton.png'
import './CommissionPage.css'

export function CommissionPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="commissionText">
                <p className="subText">please read the entire document carefully before making any further questions, thank you!</p>

                <p className="subTitle">how to commission</p>
                <img src={img1} className="infoPic" />
                <p className="info"> 1. read through all the information here</p>
                <img src={img2} className="infoPic" />
                <p className="info"> 2. contact me through instagram or email (ryo.yshan@gmail.com) to discuss details and references (please be polite and specific!)</p>
                <img src={img3} className="infoPic" />
                <p className="info"> 3. I will draw some preliminary composition sketches and edit them till satisfactory (no more than two major changes (eg. pose changes/concept change), minor edits are chill)</p>
                <img src={img4} className="infoPic" />
                <p className="info"> 4. Once everything is agreed upon, send the payment to my PayPal using the PayPal button below and I will be good to start!</p>
                <p className="subText"> I will send the final piece through your prefered contact method (instagram/email) with your prefered file format </p>

                <p className="subTitle">sizing and prices</p>
                <div className="tableInfo">
                    <div>
                        <p className="infoT"> fully rendered: </p>
                        <p className="info">
                            headshot/bust: 18-23 CAD <br />
                            halfbody: 23-27 CAD <br />
                            fullbody: 27-32 CAD
                        </p>
                        <p className="infoT"> coloured sketches: </p>
                        <p className="info">
                            headshot/bust: 10 CAD <br />
                            halfbody: 14 CAD <br />
                            fullbody: 17 CAD
                        </p>
                    </div>
                    <img src={img5} id="sizeChart" />
                </div>
                <p className="info" id="chibiT"> chibi: 10-15 CAD</p>
                <p className="subTextP"> *prices are per character, and dependant on difficulty and amount of details in the drawing</p>
                <p className="subTextP"> *each piece can have a simple background and simple props for free</p>
                <p className="subTextP"> *extra objects/elements are an additional 1-5 CAD depending on difficulty and size</p>
                <p className="subTextP"> *detailed backgrounds are an additional 1-5 CAD</p>


                <p className="subTitle">Samples</p>
                <p className="infoT"> fully rendered </p>
                <div className="samples">
                    <img src={img6} className="sampleImg" />
                    <img src={img11} className="sampleImg" />
                </div>
                <p className="infoT"> coloured sketches </p>
                <div className="samples">
                    <img src={img7} className="sampleImg" />
                    <img src={img8} className="sampleImg" />
                </div>
                <p className="infoT"> chibi </p>
                <div className="samples">
                    <img src={img9} className="sampleImg" />
                    <img src={img10} className="sampleImg" />
                </div>

                <p className="subTitle">what I do and don't draw</p>
                <div className="tableInfo" id="dosDonts">
                    <div>
                        <p className="infoT sideText"> do's </p>
                        <p className="info sideText"> - original characters</p>
                        <p className="info sideText"> - fan art</p>
                        <p className="info sideText"> - real people</p>
                        <p className="info sideText"> - light nsfw (I will confirm what qualifies)</p>
                        <p className="info sideText"> - light gore (I will confirm what qualifies)</p>
                    </div>
                    <div>
                        <p className="infoT sideText"> don'ts </p>
                        <p className="info sideText"> - full furries (animal features are okay, but no full body fur) </p>
                        <p className="info sideText"> - heavy nsfw </p>
                        <p className="info sideText"> - heavy gore </p>
                        <p className="info sideText"> - offensive content </p>
                    </div>
                </div>
                <p className="subTextP"> *I am very open to talk, so if you would like to request something that is not on my list, let me know and we can totally work something out</p>
                <p className="subTextP"> *I have the right to refuse to draw something if I am uncomfortable with drawing it</p>
                <p className="subTextP"> *I will notify you when there is something in your request that I am not familiar with (such as certain objects or animals I have never drawn before) but I would be happy to experiment if you are down</p>

                <p className="subTitle">copyright and usage</p>
                <p className="infoT"> I, the artist: </p>
                <p className="info sideText"> - retain all copyrights over the commissioned artwork</p>
                <p className="info sideText"> - will NOT profit further from the commissioned artwork unless you (the customer) break any of the terms</p>
                <p className="info sideText"> - reserve the right to post the commissioned artwork online, in my portfolio, etc</p>
                <p className="infoT"> You, the customer/commissioner: </p>
                <p className="info sideText"> - receive exclusive, non-transferable usage rights to the artwork for personal use ONLY</p>
                <p className="info sideText"> - may upload the commissioned artwork on any website and social channels with proper credit</p>
                <p className="info sideText"> - may use/edit the work in your own works with proper credit</p>
                <p className="info sideText"> - may NOT claim the artwork as your own and must ALWAYS provide proper credit</p>
                <p className="subTextP"> *proper credit includes using my social tag/username/link at the instance of display of the artwork or permanently on their websites, social media profiles, etc.</p>
                <p className="info sideText"> - may NOT use the commissioned artwork for commercial purposes</p>
                <p className="info sideText"> - may NOT make profits from the commissioned piece (reselling, redistributing, uploading to POD-services, make prints, etc.)</p>

                <p className="subTitle">payment</p>
                <p className="subTextP"> please provide payment AFTER you have discussed the details of the commission with me, and agree with all the terms listed on this page</p>
                <p className="info sideText"> - payment is through PayPal (CAD) </p>
                <p className="subText"> *currently accepting CAD and USD, please notify me if you use a different currency</p>
                <p className="info sideText"> - payment is required for me to start the drawing </p>
                <p className="info sideText"> - no refunds are possible after work begins, with the following exceptions</p>
                <p className="info sideText"> - I reserve the right to cancel and refund the order at any time for any reason</p>
                <p className="info sideText"> - you may request a refund if the artwork is not finished and sent within 5 months after the payment</p>
                <p className="subTextP"> ONLY provide payment if you have read and agreed to ALL the terms listed above</p>
                <a href="https://www.paypal.com/ncp/payment/JZ4K446875E5A" rel="noopener" target="_blank">
                    <img src={paymentButton} className="infoPic" id="paymentButton"/>
                </a>
            </div>
        </>
    )
}