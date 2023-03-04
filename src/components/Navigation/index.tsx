import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'
import logo from './../../assets/Logo.png'
// import menuImage from './../../assets/menu.png'
import menuImage from 'assets/outline_menu_white_24dp.png'

export default function Navigation() {
	const [menuButtonClicked, setMenuButtonClicked] = useState(false)

	const routes = [
		{
			label: 'A experiência',
			to: '/codechella/experience'
		},
		{
			label: 'Mapa de Setores',
			to: '/codechella/sectormap'
		},
		{
			label: 'Informações',
			to: '/codechella/info'
		},
		{
			label: 'Ingresso',
			to: '/codechella/ticket'
		}
	]

	const clickMenuButton = () => {
		console.log('test')

		setMenuButtonClicked(!menuButtonClicked)

		console.log(menuButtonClicked)
	}

	return (
		<header className={styles.header}>
			<Link to={'/codechella'}>
				<img src={logo} alt="Logo do Codechella" />
			</Link>
			<button onClick={clickMenuButton} className={styles.header__menuButton}>
				<img className={styles.header__menuButton__image} src={menuImage} alt="Imagem do menu" />
			</button>
			<ul className={`${styles.header__menu} ${menuButtonClicked ? styles.header__menuButtonClicked : ''}`}>
				{
					routes.map((route, index) => (
						<li key={index} className={styles.header__menu__link}>
							<Link to={route.to}>
								<h6>{route.label}</h6>
							</Link>
						</li>
					))
				}
			</ul>
		</header>
	)
}