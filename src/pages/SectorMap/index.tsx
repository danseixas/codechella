import Banner from 'components/Banner'
import React from 'react'
import styles from './SectorMap.module.scss'
import sectorsMapImage from 'assets/mapa-setores.png'
import floorImage from 'assets/pista.jpg'
import premiumFloorImage from 'assets/pista-premium.jpg'
import chairsImage from 'assets/cadeiras.jpg'

export default function SectorMap() {
	const sectorBanner = '/img/Sector-Map.jpg'
	const bannerStrings = ['Mapa de Setores']

	return (
		<div className={styles.sectors}>
			<Banner bannerImage={sectorBanner} bannerParagraphs={bannerStrings}></Banner>
			<div className={styles.sectors__map}>
				<img className={styles.sectors__map__image} src={sectorsMapImage} alt="Foto da audiência" />
				<div className={styles.sectors__map__description}>
					<p className={styles.sectors__map__description__title}>Legenda:</p>
					<div className={styles.sectors__map__description__item}>
						<div className={styles.sectors__map__description__item__rectangle} style={{ backgroundColor: '#0E7DF1' }}></div>
						<p className={styles.sectors__map__description__item__text}>Pista Premium</p>
					</div>
					<div className={styles.sectors__map__description__item}>
						<div className={styles.sectors__map__description__item__rectangle} style={{ backgroundColor: '#FE016E' }}></div>
						<p className={styles.sectors__map__description__item__text}>Pista Comum</p>
					</div>
					<div className={styles.sectors__map__description__item}>
						<div className={styles.sectors__map__description__item__rectangle} style={{ backgroundColor: '#01A89E' }}></div>
						<p className={styles.sectors__map__description__item__text}>Cadeiras térreo</p>
					</div>
					<div className={styles.sectors__map__description__item}>
						<div className={styles.sectors__map__description__item__rectangle} style={{ backgroundColor: '#3F51B5' }}></div>
						<p className={styles.sectors__map__description__item__text}>Cadeiras superiores</p>
					</div>
					<div className={styles.sectors__map__description__item}>
						<div className={styles.sectors__map__description__item__rectangle} style={{ backgroundColor: '#0E7DF1' }}></div>
						<p className={styles.sectors__map__description__item__text}>Rampas</p>
					</div>
				</div>
			</div>
			<div className={styles.sectors__info}>
				<h6 className={styles.sectors__info__title}>Mais detalhes sobre os setores:</h6>
				<div className={styles.sectors__info__container}>
					<div className={styles.sectors__info__container__sector}>
						<img className={styles.sectors__info__container__sector__image} src={floorImage} alt="Foto da pista" />
						<h6 className={styles.sectors__info__container__sector__title}>Pista</h6>
						<p className={styles.sectors__info__container__sector__text}>Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.</p>
					</div>
					<div className={styles.sectors__info__container__sector}>
						<div className={styles.sectors__info__container__sector__rectangle}></div>
						<img className={styles.sectors__info__container__sector__image} src={premiumFloorImage} alt="Foto da pista premium" />
						<h6 className={styles.sectors__info__container__sector__title}>Pista Premium</h6>
						<p className={styles.sectors__info__container__sector__text}>Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.</p>
					</div>
					<div className={styles.sectors__info__container__sector}>
						<img className={styles.sectors__info__container__sector__image} src={chairsImage} alt="Foto das cadeiras" />
						<h6 className={styles.sectors__info__container__sector__title}>Cadeiras</h6>
						<p className={styles.sectors__info__container__sector__text}>Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.</p>
					</div>
				</div>
			</div>
		</div>
	)
}