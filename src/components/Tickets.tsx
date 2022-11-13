import { useAppSelector } from '../hooks/customHookQuery'
import TicketItem from './TicketItem'

export default function Tickets() {

	const { cityStart, cityEnd, dateStart, dateEnd, timeStart, timeEnd, timeSecondStart, timeSecondEnd } = useAppSelector(state => state.cityMove)
	let secondTicket: boolean = false
	const flagTimeTrue: boolean = true
	const flagTimeFalse: boolean = false
	const flagSecondTicket: boolean = true

	const dayEnd = dateEnd.slice(8)
	const monthEnd = dateEnd.slice(5, 7)
	const yearEnd = dateEnd.slice(0, 4)
	const fullDateEnd = dayEnd + '.' + monthEnd + '.' + yearEnd

	const dayStart = dateStart.slice(8)
	const monthStart = dateStart.slice(5, 7)
	const yearStart = dateStart.slice(0, 4)
	const fullDateStart = dayStart + '.' + monthStart + '.' + yearStart

	if (dateEnd.length > 0) {
		secondTicket = true
	} else secondTicket = false

	return (
		<>
			{secondTicket ?
				<>
					<TicketItem timeSecondStart={timeStart} cityStart={cityStart} dateEnd={fullDateStart} timeSecondEnd={timeEnd} cityEnd={cityEnd} flagTime={flagTimeFalse} />
					<TicketItem timeSecondStart={timeSecondStart} cityStart={cityEnd} dateEnd={fullDateEnd} timeSecondEnd={timeSecondEnd} cityEnd={cityStart} flagTime={flagTimeTrue} flagSecondTicket={secondTicket} />
				</>
				:
				<TicketItem timeSecondStart={timeStart} cityStart={cityStart} dateEnd={dateStart} timeSecondEnd={timeEnd} cityEnd={cityEnd} flagTime={flagTimeFalse} flagSecondTicket={secondTicket} flagFirstTicket={flagSecondTicket} />
			}
		</>
	)
}
