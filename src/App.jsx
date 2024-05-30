import React, { useState, useEffect, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { DataContext } from './helpers/dataContext/DataContext'
import { FetchProducts } from './components/pages/api/FetchProducts'
import NavBar from './components/navBar/NavBar'
import ProductsAll from './components/pages/products/ProductsAll'
import Phones from './components/pages/phones/Phones'
import Others from './components/pages/others/Others'
import Laptops from './components/pages/laptops/Laptops'
import Footer from './components/footer/Footer'
import Loader from './helpers/loader/Loader'
import ScrollToTop from './helpers/scrollToTop/ScrollTop'

function App() {
	const [show, setShow] = useState(false)
	const [cart, setCart] = useState([])
	const [product, setProducts] = useState([])
	const [search, setSearch] = useState('')

	useEffect(() => {
		const fetchProducts = async () => {
			const allProducts = await FetchProducts()
			setProducts(allProducts)
		}

		fetchProducts()
	}, [])

	const filtetedProducts = product.filter(item =>
		item.title.toLowerCase().includes(search.toLowerCase())
	)

	const addToCart = productTitle => {
		const productToAdd = product.find(product => product.title === productTitle)
		if (productToAdd) {
			setCart(prevCart => [...prevCart, productToAdd])
			console.log(productToAdd)
		} else {
			console.log('клик на - ', productTitle)
		}
		console.log(cart)
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(true)
		}, 3000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<div className='App'>
			{show ? (
				<DataContext.Provider
					value={{
						search,
						setSearch,
						addToCart,
					}}
				>
					<Suspense fallback={<Loader />}>
						<NavBar />
						<Routes>
							<Route
								path='/search_items/'
								element={<ProductsAll productsItems={filtetedProducts} />}
							/>
							<Route
								path='/search_items/phones'
								element={<Phones productsItems={filtetedProducts} />}
							/>
							<Route path='/search_items/laptops' element={<Laptops />} />
							<Route path='/search_items/others' element={<Others />} />
						</Routes>
						<Footer />
					</Suspense>
				</DataContext.Provider>
			) : (
				<Loader />
			)}
		</div>
	)
}

export default App
