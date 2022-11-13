import FlightForm from '../components/FlightForm'
import { useAppSelector } from '../hooks/customHookQuery'
import classes from '../style/avia.module.css'
import { Link } from 'react-router-dom'

export default function Avia() {

	const {cityStart, cityEnd, dateStart} = useAppSelector(state => state.cityMove)
	let flag: boolean = false

	if(cityStart.length > 0 && cityEnd.length > 0 && dateStart.length > 0) {
		flag = true
	} else flag = false

  return (
		<div className={classes.container}>
			<FlightForm />
			<div className={classes.containerBtn}>
				{flag ? 
					// <MyLink link={'/avia/info'}>Найти билеты</MyLink>
					<Link to={'/avia/info'} className={{flag} && classes.btn}>Найти билеты</Link>
					:
					// <MyLink link={'#'} >Найти билеты</MyLink>
					<Link to={'#'} className={{flag} && classes.btnDisabled}>Найти билеты</Link>
				}
			</div>
		</div>
	)
}
