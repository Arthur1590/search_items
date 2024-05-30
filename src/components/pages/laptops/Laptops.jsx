import React, { useEffect, useState } from 'react'
import { FetchProducts } from '../api/FetchProducts'
import { Link } from 'react-router-dom'
import Loader from '../../../helpers/loader/Loader'
import Button from '../../ui/Button'
import './laptop.scss'

const Laptops = () => {
	const [laptops, setLaptops] = useState([])
	const [show, setShow] = useState(false)

	useEffect(() => {
		const fetchLaptops = async () => {
			const allProducts = await FetchProducts()
			const laptopsData = allProducts.filter(
				product => product.category === 'laptops'
			)
			setLaptops(laptopsData)
		}

		fetchLaptops()
	}, [])

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(true)
		}, 1500)

		return () => clearTimeout(timer)
	}, [])
	return (
		<>
			{show ? (
				<div className='laptop__wrapper'>
					<div className='routing'>
						<Link to='/search_items/phones'>
							<Button name='~Phones~>' />
						</Link>
						<Link to='/search_items/'>
							<Button name='~All Products~>' />
						</Link>
						<Link to='/search_items/others'>
							<Button name='~Others~>' />
						</Link>
					</div>
					<div className='container'>
						{laptops.map(phone => (
							<div key={phone.id} className='laptop__card'>
								<figure className='laptop__card-picture'>
									<img src={phone.thumbnail} alt={phone.title} />
								</figure>
								<article className='laptop__card-content'>
									<div className='laptop__card-info'>
										<h5>{phone.title}</h5>
										<p>{phone.brand}</p>
										<p>{phone.description}</p>
									</div>
									<div className='laptop__card-info'>
										<span>Stock: {phone.stock} </span>
										<span>Price: {phone.price} $ </span>
										<Button name='Buy' />
									</div>
								</article>
							</div>
						))}
					</div>
				</div>
			) : (
				<Loader />
			)}
		</>
	)
}

export default Laptops
