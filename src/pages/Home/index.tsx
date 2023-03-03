import Banner from 'components/Banner'
import React from 'react'
import aboutLightImage from 'assets/AboutLightTheme.jpg'
import aboutDarkImage from 'assets/AboutDarkTheme.jpg'
import ticketImage from 'assets/local_activity.png'
import styles from './Home.module.scss'
import useLocalStorage from 'use-local-storage'
import { Link } from 'react-router-dom'

export default function Home() {
	const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
	const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

	const homeBannerLight = '/img/BannerLightTheme.jpg'
	const homeBannerDark = '/img/BannerDarkTheme.jpg'

	const endPageBannerLight = '/img/endHomeLightTheme.jpg'
	const endPageBannerDark = '/img/endHomeDarkTheme.jpg'

	const bannerStrings = ['Boas Vindas ao', '#CodeChella2023!']

	const lineupDays = [
		{
			day: 'SÁBADO <11/03>',
			firstRowBand: 'System of a DOM',
			secondRowBands: ['Python Maiden', 'Apollo Client 2001', 'Bon Java', 'NickCallback'],
			thirdRowBands: ['Linkin Promises', 'Fullstack Fighters', 'Papa React', 'Angular in Chains'],
			fourthRowBands: ['Agnostic Front-end', 'SlipkNode', 'Pink Flutter', 'Kiss']
		},
		{
			day: 'DOMINGO <12/03>',
			firstRowBand: 'Lana Del Ploy',
			secondRowBands: ['Dua Lib', 'The Backnd', 'CSS Styles', 'ArrayAna Grande', 'DJ Query'],
			thirdRowBands: ['Miley Cypress', 'The Bootstrap Boys', 'Json Derulo', 'CloudPlay', 'Dev Lovato'],
			fourthRowBands: ['Kylie MiLOG', 'Jenkins Brothers', 'Rubycat Dolls']
		}
	]

	return (
		<div>
			<Banner bannerImage={theme === 'dark' ? homeBannerDark : homeBannerLight} bannerParagraphs={bannerStrings}></Banner>
			<div className={styles.about}>
				<img className={styles.about__image} src={theme === 'dark' ? aboutDarkImage : aboutLightImage} alt="Foto da audiência" />
				<div className={styles.about__info}>
					<h5 className={styles.about__info__title}>{'< 11 e 12 de Março > Aluródromo de São Paulo'}</h5>
					<p className={styles.about__info__text}>Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!</p>
					<Link to={'/ticket'} className={styles.about__button}>
						{/* <Link to={'/ticket'}> */}
						<h6 className={styles.about__button__title}>Comprar ingresso!</h6>
						<img className={styles.about__button__icon} src={ticketImage} alt="Imagem de ingresso" />
						{/* </Link> */}
					</Link>
				</div>
			</div>
			<div className={styles.lineupTitle}>
				<h3 className={styles.lineupTitle__text}>/Line-Up/</h3>
			</div>
			{
				lineupDays.map((lineupDay, index) => (
					<div key={index} className={styles.lineup__day}>
						<div className={styles.lineup__day__info}>
							<p className={styles.lineup__day__info__text}>{lineupDay.day}</p>
						</div>
						<div className={styles.lineup__day__bands}>
							<div className={styles.lineup__day__bands__firstRow}>
								<h2 className={styles.lineup__day__bands__firstRow__text}>{lineupDay.firstRowBand}</h2>
							</div>
							<div className={styles.lineup__day__bands__secondRow}>
								{
									lineupDay.secondRowBands.map((band, index) => (
										<h4 key={index} className={styles.lineup__day__bands__secondRow__text}>{band}</h4>
									))
								}
							</div>
							<div className={styles.lineup__day__bands__thirdRow}>
								{
									lineupDay.thirdRowBands.map((band, index) => (
										<h4 key={index} className={styles.lineup__day__bands__thirdRow__text}>{band}</h4>
									))
								}
							</div>
							<div className={styles.lineup__day__bands__fourthRow}>
								{
									lineupDay.fourthRowBands.map((band, index) => (
										<h4 key={index} className={styles.lineup__day__bands__fourthRow__text}>{band}</h4>
									))
								}
							</div>
						</div>
					</div>
				))
			}
			<Banner bannerImage={theme === 'dark' ? endPageBannerDark : endPageBannerLight} imageOpacity={1} />
		</div>
	)
}