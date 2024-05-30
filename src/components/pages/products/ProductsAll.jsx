import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductItem from './ProductItem'
import Loader from '../../../helpers/loader/Loader'
import Button from '../../ui/Button'
import './products.scss'

const ProductsAll = ({ productsItems }) => {
	const [show, setShow] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(true)
		}, 1500)

		return () => clearTimeout(timer)
	}, [])

	return (
		<>
			{show ? (
				<div className='productsAll'>
					<div className='container'>
						<h1>
							{'~'}All Products{'~>'}
						</h1>
						<div className='routing'>
							<Link to='/search_items/phones'>
								<Button name='~Phones~>' />
							</Link>
							<Link to='/search_items/laptops'>
								<Button name='~Laptops~>' />
							</Link>
							<Link to='/search_items/others'>
								<Button name='~Others~>' />
							</Link>
						</div>
						<div className='card__wrapper'>
							{productsItems.map(items => (
								<ProductItem key={items.id} item={items} />
							))}
						</div>
					</div>
				</div>
			) : (
				<Loader />
			)}
		</>
	)
}

export default ProductsAll
