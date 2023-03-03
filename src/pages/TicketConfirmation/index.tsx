import Banner from 'components/Banner'
import React from 'react'
import styles from './TicketConfirmation.module.scss'

export default function TicketConfirmation() {
	const infoBanner = '/img/ticketBought.jpg'
	const bannerStrings = ['Seu ingresso está aqui!']

	return (
		<div className={styles.info}>
			<Banner bannerImage={infoBanner} bannerParagraphs={bannerStrings}></Banner>
		</div>
	)
}