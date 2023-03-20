import Banner from 'components/Banner'
import React, { useState } from 'react'
import styles from './Ticket.module.scss'
import arrowForward from 'assets/outline_arrow_forward_white_24dp.png'
import { useNavigate } from 'react-router-dom'
import InputMask from 'react-input-mask'

export default function Ticket() {
	const infoBanner = '/img/ticket.jpg'
	const bannerStrings = ['Garanta seu Ingresso']
	const navigate = useNavigate()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [cpf, setCPF] = useState('')
	const [birthDate, setBirthDate] = useState('')
	const [ticketType, setTicketType] = useState('')
	const [ticketDate, setTicketDate] = useState('')

	const isValidCPF = (cpf: string) => {
		if (typeof cpf !== 'string') return false
		cpf = cpf.replace(/[^\d]+/g, '')
		if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false
		const cpfSplited = cpf.split('').map(el => +el)
		const rest = (count: number) => (cpfSplited.slice(0, count - 12)
			.reduce((soma, el, index) => (soma + el * (count - index)), 0) * 10) % 11 % 10
		return rest(10) === cpfSplited[9] && rest(11) === cpfSplited[10]
	}

	const isValidAge = (birthdate: Date) => {
		const timeDiff = Math.abs(Date.now() - birthdate.getTime())
		const age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25)
		console.log(age)

		return age >= 16
	}

	const isValidName = (name: string) => {
		return name.length >= 10
	}

	const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		// check cpf, age and email before navigate
		const validName = isValidName(name)
		if (!validName) {
			alert('Nome inválido')
			return
		}

		const validCPF = isValidCPF(cpf)
		if (!validCPF) {
			alert('CPF inválido')
			return
		}

		const validAge = isValidAge(new Date(birthDate))
		if (!validAge) {
			alert('Idade inválida')
			return
		}

		navigate('/ticket-confirmation', { state: { name: name, ticketType: ticketType, ticketDate: ticketDate } })

		// console.log(name)
		console.log(email)
		console.log(cpf)
		console.log(birthDate)
		// console.log(ticketType)
		// console.log(ticketDate)

		/* if (id) {
			http.put(`restaurantes/${id}/`, {
				'nome': restaurantName
			})
				.then(() => {
					alert('Restaurant updated!')
				})
		} else {
			http.post('restaurantes/', {
				'nome': restaurantName
			})
				.then(() => {
					alert('Restaurant saved!')
				})
		} */
	}

	return (
		<div>
			<Banner bannerImage={infoBanner} bannerParagraphs={bannerStrings}></Banner>
			<div className={styles.ticket}>
				<h2 className={styles.ticket__title}>Preencha o formulário a seguir:</h2>
				<form className={styles.ticket__form} onSubmit={onSubmitForm}>
					<div className={styles.ticket__form__field}>
						<label className={styles.ticket__form__field__text}>Nome completo</label>
						<input type='text' id='fullname' name='name' className={styles.ticket__form__field__value} required onChange={event => setName(event.target.value)} />
					</div>
					<div className={styles.ticket__form__field}>
						<label className={styles.ticket__form__field__text}>Email</label>
						<input type='text' id='email' name='email' className={styles.ticket__form__field__value} required onChange={event => setEmail(event.target.value)} />
					</div>
					<div className={styles.ticket__form__field}>
						<label className={styles.ticket__form__field__text}>CPF</label>
						<InputMask
							type='text'
							id='cpf'
							name='cpf'
							className={styles.ticket__form__field__value}
							required
							onChange={event => setCPF(event.target.value)}
							placeholder='___.___.___-__'
							mask='999.999.999-99'
						/>
					</div>
					<div className={styles.ticket__form__field}>
						<label className={styles.ticket__form__field__text}>Data de nascimento</label>
						<input type='date' id='birthdate' name='birthdate' className={styles.ticket__form__field__value} required onChange={event => setBirthDate(event.target.value)} />
					</div>
					<div className={styles.ticket__form__field}>
						<label className={styles.ticket__form__field__text}>Tipo de ingresso</label>
						<select id='ticket-types' name='ticket-types' className={styles.ticket__form__field__value} required onChange={event => setTicketType(event.target.value)}>
							<option value=''></option>
							<option value='Pista Comum'>Pista Comum</option>
							<option value='Pista Premium'>Pista Premium</option>
							<option value='Cadeiras térreo'>Cadeiras térreo</option>
							<option value='Cadeiras superiores'>Cadeiras superiores</option>
							<option value='Rampas'>Rampas</option>
						</select>
					</div>
					<div className={styles.ticket__form__field}>
						<label className={styles.ticket__form__field__text}>Data do ingresso</label>
						<select id='ticket-dates' name='ticket-dates' className={styles.ticket__form__field__value} required onChange={event => setTicketDate(event.target.value)}>
							<option value=''></option>
							<option value='11/03'>11/03 (Sábado)</option>
							<option value='12/03'>12/03 (Domingo)</option>
						</select>
					</div>
					<button className={styles.ticket__form__button} type='submit'>
						<h6 className={styles.ticket__form__button__title}>Avançar</h6>
						<img className={styles.ticket__form__button__icon} src={arrowForward} alt='Imagem de ingresso' />
					</button>
				</form>
			</div>
		</div>
	)
}