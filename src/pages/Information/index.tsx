import Banner from 'components/Banner'
import React from 'react'
import styles from './Information.module.scss'

export default function Information() {
	const infoBanner = '/img/Information.jpg'
	const bannerStrings = ['Informações Gerais']

	return (
		<div className={styles.info}>
			<Banner bannerImage={infoBanner} bannerParagraphs={bannerStrings}></Banner>
		</div>
	)
}