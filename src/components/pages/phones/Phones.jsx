import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FetchProducts } from '../api/FetchProducts'
import { DataContext } from '../../../helpers/dataContext/DataContext'
import Loader from '../../../helpers/loader/Loader'
import Button from '../../ui/Button'
import './phones.scss'

const Phones = () => {
	const [show, setShow] = useState(false)
	const [phones, setPhones] = useState([])

	useEffect(() => {
		const fetchPhones = async () => {
			const allProducts = await FetchProducts()
			const phonesData = allProducts.filter(
				product => product.category === 'smartphones'
			)
			setPhones(phonesData)
		}

		fetchPhones()
	}, [])

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(true)
		}, 1500)

		return () => clearTimeout(timer)
	}, [])

	const { addToCart } = useContext(DataContext)

	return (
		<>
			{show ? (
				<div className='phones__wrapper'>
					<div className='routing'>
						<Link to='/search_items/laptops'>
							<Button name='~Laptops~>' />
						</Link>
						<Link to='/search_items/'>
							<Button name='~All Products~>' />
						</Link>
						<Link to='/search_items/others'>
							<Button name='~Others~>' />
						</Link>
					</div>
					<div className='container'>
						{phones.map(phone => (
							<div key={phone.id} className='phones__card'>
								<figure className='phones__card-picture'>
									<img src={phone.thumbnail} alt={phone.title} />
								</figure>
								<article className='phones__card-content'>
									<div className='phones__card-info'>
										<h5>{phone.title}</h5>
										<p>{phone.brand}</p>
										<p>{phone.description}</p>
									</div>
									<div className='phones__card-info'>
										<span>Stock: {phone.stock} </span>
										<span>
											Price: {phone.price}
											{'$'}
										</span>
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

export default Phones
