import React, { useContext } from 'react'
import { DataContext } from '../../../helpers/dataContext/DataContext'
import Button from '../../ui/Button'
import './products.scss'

const ProductItem = ({ item }) => {
	const { addToCart } = useContext(DataContext)

	return (
		<div className='card__item'>
			<figure>
				<img src={item.thumbnail} alt={item.title} />
			</figure>
			<article>
				<h2>{item.title}</h2>
				<h5>{item.description}</h5>
				<span>
					Price: {item.price}
					{' $'}
				</span>
				<Button addToCart={addToCart} item={item.title} name='Buy' />
			</article>
		</div>
	)
}

export default ProductItem
