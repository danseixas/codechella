import Banner from 'components/Banner'
import React from 'react'
import styles from './Experience.module.scss'
import experience1 from 'assets/experience1.jpg'
import experience2 from 'assets/experience2.jpg'
import experience3 from 'assets/experience3.jpg'
import classNames from 'classnames'

export default function Experience() {
	const experienceBanner = '/img/Experience.jpg'
	const bannerStrings = ['A Experiência']
	const experienceSections = [
		{
			image: experience1,
			title: 'Acessibilidade e Inclusão',
			text: 'Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos! Isso está presente no espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!'
		},
		{
			image: experience2,
			title: 'Sustentabilidade',
			text: 'Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.'
		},
		{
			image: experience3,
			title: 'Atrações',
			text: 'Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!'
		}
	]

	return (
		<div className={styles.experience}>
			<Banner bannerImage={experienceBanner} bannerParagraphs={bannerStrings}></Banner>
			{
				experienceSections.map((sectionInfo, index) => (
					// <section key={index} className={styles.experience__section}>
					<section key={index} className={classNames({
						[styles.experience__section]: true,
						[styles['experience__section--reverse']]: index % 2 == 1
					})}>
						<img className={styles.experience__section__image} src={sectionInfo.image} alt="Foto da audiência" />
						<div className={classNames({
							[styles.experience__section__info]: true,
							[styles['experience__section__info--reverse']]: index % 2 == 1
						})}>
							<h6 className={styles.experience__section__info__title}>{sectionInfo.title}</h6>
							{/* <p className={styles.experience__section__info__text}>{sectionInfo.text}</p> */}
							<p className={classNames({
								[styles.experience__section__info__text]: true,
								[styles['experience__section__info__text--reverse']]: index % 2 == 1
							})}>{sectionInfo.text}</p>
						</div>
					</section>
				))
			}
		</div>
	)
}