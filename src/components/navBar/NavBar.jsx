import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../../helpers/dataContext/DataContext'
import { clsx } from 'clsx'
// ? styles ==>
import cartIcon from './img/shopping-bag.svg'
import closeIcon from './img/close.svg'
import searchIcon from './img/search.svg'
import './navbar.scss'

// * content
const NavBar = () => {
	const { search, setSearch } = useContext(DataContext)
	const [show, setShow] = useState(true)
	const changeableIcon = show ? searchIcon : closeIcon
	const dClass = clsx('util', { active: !show })

	const clickCloseIcon = () => {
		setShow(!show)
		setSearch('')
	}
	return (
		<header className='header'>
			<div className='container'>
				<nav className='header__nav'>
					<h1>
						{'~'}Shop{'~>'}
					</h1>

					<div className='controlls'>
						<input
							className={dClass}
							type='text'
							placeholder='Поиск...'
							value={search}
							onChange={e => setSearch(e.target.value)}
						/>
						{!show ? (
							<button>
								<img src={searchIcon} alt='' />
							</button>
						) : (
							''
						)}
						<button>
							<img src={cartIcon} alt='' />
						</button>
						<button onClick={() => clickCloseIcon()}>
							<img src={changeableIcon} alt='' />
						</button>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default NavBar
