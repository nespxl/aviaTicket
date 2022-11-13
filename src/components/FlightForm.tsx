import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/customHookQuery'
import classes from '../style/form.module.css'
import Calendar from './calendar/Calendar'
import { sliceCity } from '../store/sliceCity'

export default function FlightForm() {
	
	const dispatch = useAppDispatch()
	const {dateStart, dateEnd} = useAppSelector(state => state.cityMove)
	const [activeStartCalendar, setActiveStartCalendar] = useState(false)
	const [activeEndCalendar, setActiveEndCalendar] = useState(false)
	const [flagDate, setFlagDate] = useState(true)

	function openStartCalendar() {
		setFlagDate(true)
		setActiveStartCalendar(true)
	}
	function closeStartCalendar() {
		setFlagDate(false)
		setActiveStartCalendar(false)
	}
	function openEndCalendar() {
		if(dateStart.length > 0) setActiveEndCalendar(true)
	}
	function closeEndCalendar() {
		setActiveEndCalendar(false)
	}
	function startCity(e: React.ChangeEvent<HTMLInputElement>) {
		dispatch(sliceCity.actions.startCity(e.target.value))
	}
	function endCity(e: React.ChangeEvent<HTMLInputElement>) {
		dispatch(sliceCity.actions.endCity(e.target.value))
	}
	function startDate(e: React.ChangeEvent<HTMLInputElement>) {
		dispatch(sliceCity.actions.startDate(e.target.value))
	}
	function endDate(e: React.ChangeEvent<HTMLInputElement>) {
		dispatch(sliceCity.actions.endDate(e.target.value))
	}

	return (
		<>
			<form action='' className={classes.form}>
				<div className={classes.containerField}>
					<div className={classes.fieldItem}>
						<label htmlFor='start' className={classes.label}>Откуда</label>
						<input type="text" id='start' onChange={(e) => startCity(e)} placeholder='Город вылета' className={classes.input} />
					</div>
					<div className={classes.fieldItem}>
						<label htmlFor='end' className={classes.label}>Куда</label>
						<input type="text" id='end' onChange={(e) => endCity(e)} placeholder='Город прилета' className={classes.input} />
					</div>
					<div className={classes.fieldItem}>
						<label htmlFor='startDate' className={classes.label}>Туда</label>
						<input type="date" id='startDate' onChange={(e) => startDate(e)} value={dateStart} onClick={() => openStartCalendar()} className={classes.input + ' ' + classes.date} />
					</div>
					<div className={classes.fieldItem}>
						<label htmlFor='endDate' className={classes.label}>Обратно</label>
						<input type="date" id='endDate' onChange={(e) => endDate(e)} value={dateEnd} onClick={() => openEndCalendar()} className={classes.input + ' ' + classes.date} />					
					</div>
				</div>
			</form>
			{activeStartCalendar &&
				<div className={classes.modal} onClick={() => closeStartCalendar()}>
					<Calendar flagDate={flagDate} />
				</div> 
			}
			{activeEndCalendar &&
				<div className={classes.modal} onClick={() => closeEndCalendar()}>
					<Calendar flagDate={flagDate} />
				</div> 
			}
		</>
	)
}
