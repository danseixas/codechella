import Banner from 'components/Banner'
import React from 'react'
import styles from './Ticket.module.scss'

export default function Ticket() {
	const infoBanner = '/img/ticket.jpg'
	const bannerStrings = ['Garanta seu Ingresso']

	return (
		<div className={styles.info}>
			<Banner bannerImage={infoBanner} bannerParagraphs={bannerStrings}></Banner>
		</div>
	)
}