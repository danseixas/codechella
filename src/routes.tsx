import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Experience from 'pages/Experience'
import SectorMap from 'pages/SectorMap'
import useLocalStorage from 'use-local-storage'
import './routes.css'
import Information from 'pages/Information'
import Ticket from 'pages/Ticket'
import TicketConfirmation from 'pages/TicketConfirmation'

export default function AppRouter() {
	const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
	const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light') // setTheme when we have the button to do so

	return (
		<main data-theme={theme}>
			<Router>
				<Navigation />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/experience' element={<Experience />} />
					<Route path='/sectormap' element={<SectorMap />} />
					<Route path='/info' element={<Information />} />
					<Route path='/ticket' element={<Ticket />} />
					<Route path='/ticket-confirmation' element={<TicketConfirmation />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	)
}