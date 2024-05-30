import React, { useContext } from 'react'
import { DataContext } from '../../helpers/dataContext/DataContext'
import './button.scss'

const Button = ({ name, item }) => {
	const { addToCart } = useContext(DataContext)

	return (
		<button onClick={() => addToCart(item)} className='button'>
			{name}
		</button>
	)
}

export default Button
