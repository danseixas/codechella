import React from 'react'
import styles from './Footer.module.scss'
import useLocalStorage from 'use-local-storage'

import logoBlackIcon from 'assets/logo_black.png'
import logoWhiteIcon from 'assets/logo_white.png'
import wppBlackIcon from 'assets/wpp_black.png'
import wppWhiteIcon from 'assets/wpp_white.png'
import twitchBlackIcon from 'assets/twitch_black.png'
import twitchWhiteIcon from 'assets/twitch_white.png'
import igBlackIcon from 'assets/ig_black.png'
import igWhiteIcon from 'assets/ig_white.png'
import ttBlackIcon from 'assets/tt_black.png'
import ttWhiteIcon from 'assets/tt_white.png'

export default function Footer() {
	const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
	const [theme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

	return (
		<footer className={styles.footer}>
			<div className={styles.footer__info}>
				<img src={theme === 'dark' ? logoWhiteIcon : logoBlackIcon} alt="Logo do Codechella" width='240px' />
				<div className={styles.footer__info__links}>
					<p className={styles.footer__info__links__title}>Acesse nossas redes:</p>
					<div className={styles.footer__info__links__wrapper}>
						<a className={styles.footer__info__links__link}>
							<img src={theme === 'dark' ? wppWhiteIcon : wppBlackIcon} alt="Imagem do Whatsapp" />
						</a>
						<a className={styles.footer__info__links__link}>
							<img src={theme === 'dark' ? twitchWhiteIcon : twitchBlackIcon} alt="Imagem da Twitch" />
						</a>
						<a className={styles.footer__info__links__link}>
							<img src={theme === 'dark' ? igWhiteIcon : igBlackIcon} alt="Imagem do Instagram" />
						</a>
						<a className={styles.footer__info__links__link}>
							<img src={theme === 'dark' ? ttWhiteIcon : ttBlackIcon} alt="Imagem do Twitter" />
						</a>
					</div>
				</div>
			</div>
			<p className={styles.footer__credit}>Desenvolvido por Alura. Projeto fictício sem fins comerciais.</p>
		</footer>
	)
}