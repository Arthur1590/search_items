import React, { useContext, useEffect, useState } from 'react'
import { FetchProducts } from '../api/FetchProducts'
import { Link } from 'react-router-dom'
import Loader from '../../../helpers/loader/Loader'
import './others.scss'
import Button from '../../ui/Button'
import { DataContext } from '../../../helpers/dataContext/DataContext'

const Others = () => {
	const [others, setOthers] = useState([])
	const [show, setShow] = useState(false)

	useEffect(() => {
		const fetchOthers = async () => {
			const allProducts = await FetchProducts()
			const othersData = allProducts.filter(
				product =>
					product.category !== 'smartphones' && product.category !== 'laptops'
			)
			setOthers(othersData)
		}

		fetchOthers()
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
				<div className='others__wrapper'>
					<div className='routing'>
						<Link to='/search_items/phones'>
							<Button name='~Phones~>' />
						</Link>
						<Link to='/search_items/'>
							<Button name='~All Products~>' />
						</Link>
						<Link to='/search_items/laptops'>
							<Button name='~Laptops~>' />
						</Link>
					</div>
					<div className='container'>
						{others.map(phone => (
							<div key={phone.id} className='others__card'>
								<figure className='others__card-picture'>
									<img src={phone.thumbnail} alt={phone.title} />
								</figure>
								<article className='others__card-content'>
									<div className='others__card-info'>
										<h5>{phone.title}</h5>
										<p>{phone.brand}</p>
										<p>{phone.description}</p>
									</div>
									<div className='others__card-info'>
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

export default Others
