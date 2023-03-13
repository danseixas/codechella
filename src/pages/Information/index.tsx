import Banner from 'components/Banner'
import React from 'react'
import styles from './Information.module.scss'
import arrowDropUp from 'assets/arrow_drop_up.png'
import arrowDropDown from 'assets/arrow_drop_down.png'

export default function Information() {
	const infoBanner = '/img/Information.jpg'
	const bannerStrings = ['Informações Gerais']

	const questions = [
		{
			question: 'Quais serão as atrações?',
			answer: 'Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando neste link!'
		},
		{
			question: 'Qual é a classificação etária?',
			answer: 'A partir de 16 anos, todo mundo pode entrar. De 13 a 15 anos, tem que estar acompanhado dos pais ou responsáveis legais. Menores de 10 anos não podem entrar.'
		},
		{
			question: 'Quais são os setores disponíveis?',
			answer: 'Pista Premium, Pista Comum, Cadeiras térreo, Cadeiras superiores e Rampas'
		},
		{
			question: 'Quais são os itens proibidos?',
			answer: 'Garrafas, latas, bebidas, utensílios de armazenagem, embalagens rígidas com tampa, capacetes, cadeiras ou bancos, armas de fogo e armas brancas, objetos pontiagudos, cortantes e/ou perfurantes, correntes e cinturões, fogos de artifício, objetos de vidro, substâncias inflamáveis, cigarro eletrônico, corrosivas e ou tóxicas, revistas, jornais, livros e copo térmico ou similares.'
		},
		{
			question: 'Quem tem direito a meia-entrada?',
			answer: 'De acordo com a Lei Federal, têm direito ao benefício da meia-entrada aqueles que preencherem os requisitos e apresentarem os documentos comprobatórios.'
		}
	]

	return (
		<div className={styles.info}>
			<Banner bannerImage={infoBanner} bannerParagraphs={bannerStrings}></Banner>
			<section className={styles.info__section}>
				<h1 className={styles.info__section__title}>Perguntas Frequentes:</h1>
				<div className={styles.info__section__container}>
					{
						questions.map((question, index) => (
							<div className={styles.info__section__container__dropdown} key={index}>
								<div className={styles.info__section__container__dropdown__question}>
									<input type="checkbox" id={`button_${index}`} className={styles.info__section__container__dropdown__question__button} />
									<label htmlFor={`button_${index}`} className={styles.info__section__container__dropdown__question__label}>
										<h2 className={styles.info__section__container__dropdown__question__text}>{question.question}</h2>
										<span className={styles.info__section__container__dropdown__question__icon}></span>
									</label>
									<p className={styles.info__section__container__dropdown__question__answer}>{question.answer}</p>
								</div>
								{/* <p className={styles.info__section__container__dropdown__question__answer}>{question.answer}</p> */}
							</div>
						))
					}
				</div>
			</section>
		</div>
	)
}