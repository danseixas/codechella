import Banner from 'components/Banner'
import React from 'react'
import styles from './TicketConfirmation.module.scss'
import logoBlackIcon from 'assets/logo_black.png'
import logoWhiteIcon from 'assets/logo_white.png'
import codeIcon from 'assets/code.png'
import qrCode from 'assets/qr.png'
import useLocalStorage from 'use-local-storage'
import { useLocation } from 'react-router-dom'

export default function TicketConfirmation() {
	const infoBanner = '/img/ticketBought.jpg'
	const bannerStrings = ['Seu ingresso está aqui!']
	const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
	const [theme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

	// fazer try catch para não deixar essa página ser acessada sem state
	const { state } = useLocation()
	const { name, ticketType, ticketDate } = state // Read values passed on state

	console.log(name)
	console.log(ticketType)
	console.log(ticketDate)

	return (
		<div className={styles.info}>
			<Banner bannerImage={infoBanner} bannerParagraphs={bannerStrings}></Banner>
			<div className={styles.ticket}>
				<h2 className={styles.ticket__text}>Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h2>
				<div className={styles.ticket__info}>
					<div className={styles.ticket__info__logo}>
						<img className={styles.ticket__info__logo__image} src={theme === 'dark' ? logoWhiteIcon : logoBlackIcon} alt="Logo do Codechella" />
						<img className={styles.ticket__info__logo__image} src={codeIcon} alt="Ícone de código" />
					</div>
					<div className={styles.ticket__info__qr}>
						<img className={styles.ticket__info__qr__code} src={qrCode} alt="Ícone de código" width='240px' />
						<div className={styles.ticket__info__qr__personInfo}>
							<h2 className={styles.ticket__info__qr__personInfo__name}>{name}</h2>
							<p className={styles.ticket__info__qr__personInfo__detail}>Ingresso Costesia</p>
							<p className={styles.ticket__info__qr__personInfo__detail}>{`Setor: ${ticketType}`}</p>
							<p className={styles.ticket__info__qr__personInfo__detail}>{`Data: ${ticketDate}`}</p>
							<p className={styles.ticket__info__qr__personInfo__detail}>Local: São Paulo-SP</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}