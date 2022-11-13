import { useState } from 'react'
import { useAppDispatch } from '../hooks/customHookQuery'
import { sliceCity } from '../store/sliceCity'
import classes from '../style/timeList.module.css'

interface ITimeDate {
	flagTime: boolean
}

export default function TimeList({flagTime}: ITimeDate) {

	const dispatch = useAppDispatch()
	const [firstBtn, setFirstBtn] = useState(true)
	const [secondBtn, setSecondBtn] = useState(false)
	const [thirdBtn, setThirdBtn] = useState(false)

	function timeFunc(e: React.MouseEvent<HTMLButtonElement>) {
    if (!(e.target instanceof HTMLElement)) return
		if(!flagTime) {
			dispatch(sliceCity.actions.startTime(e.target.innerHTML.slice(0, 5).trim()))
			dispatch(sliceCity.actions.endTime(e.target.innerHTML.slice(7, 13).trim()))
		}
		if(flagTime) {
			dispatch(sliceCity.actions.timeSecondStart(e.target.innerHTML.slice(0, 5).trim()))
			dispatch(sliceCity.actions.timeSecondEnd(e.target.innerHTML.slice(7, 13).trim()))
		}
	}

	function clickFirstItem() {
		setFirstBtn(true)
		setSecondBtn(false)
		setThirdBtn(false)
	}
	function clickSecondItem() {
		setFirstBtn(false)
		setSecondBtn(true)
		setThirdBtn(false)
	}
	function clickThirdItem() {
		setFirstBtn(false)
		setSecondBtn(false)
		setThirdBtn(true)
	}

  return (
		<ul className={classes.list}>
			<li className={classes.elem}>
				<button
					className={firstBtn ? classes.btnActive : classes.btn}
					onClick={e => {
						timeFunc(e)
						clickFirstItem()
					}}
				>
					9:20 - 11:05
				</button>
			</li>
			<li className={classes.elem}>
				<button
					className={secondBtn ? classes.btnActive : classes.btn}
					onClick={e => {
						timeFunc(e)
						clickSecondItem()
					}}
				>
					10:20 - 12:05
				</button>
			</li>
			<li className={classes.elem}>
				<button
					className={thirdBtn ? classes.btnActive : classes.btn}
					onClick={e => {
						timeFunc(e)
						clickThirdItem()
					}}
				>
					13:20 - 14:05
				</button>
			</li>
		</ul>
	)
}
