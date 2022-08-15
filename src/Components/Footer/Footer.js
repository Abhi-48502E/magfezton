import React from 'react'
import './footer.css'
import bmw from '../../Assets/images/brands.png'
import { AiFillFacebook} from 'react-icons/ai';
import { AiFillGithub} from 'react-icons/ai';
import { AiOutlineLinkedin} from 'react-icons/ai';




function Footer() {
  return (
    <div className="main-footer">
        <div className="brands">
           <a href="https://apps.apple.com/in/app/cars24-sell-buy-used-cars/id1364492085"><img src={bmw} alt="logo-bmw" className='logoz-perf'/></a> 
        </div>
       <div className="main-icons">
<div className="logozii">
    <a href="https://github.com"><AiFillGithub/></a>
</div>
<div className="logozii">
    <a href="https://www.facebook.com"><AiFillFacebook/></a>
</div>
<div className="logozii">
   <a href="https://www.linkedin.com/company/automotive-industry"> <AiOutlineLinkedin/></a>
</div>
       </div>
       <h2 id='Ho'>Privacy PolicyReturn PolicyTerms & ConditionsShipping PolicyUser TermsPayments & LogisticsDisclaimerProcess Flow</h2>
       <h1 id='He'>© CAROXIA 2022 - All rights reserved</h1>
    </div>
  )
}

export default Footer