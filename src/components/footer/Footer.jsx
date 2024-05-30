import React from 'react'
import facebook from './img/facebook.svg' 
import link from './img/link.svg' 
import twiiter from './img/twiiter.svg' 
import './footer.scss'


const Footer = () => {
  return (
		<footer className='footer'>
			<div className='container'>
				<article>
					<h5>Footer</h5>
				</article>
				<figure>
					<img src={facebook} alt='' />
					<img src={link} alt='' />
					<img src={twiiter} alt='' />
				</figure>
			</div>
		</footer>
	)
}

export default Footer