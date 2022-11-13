import classes from '../style/dropdown.module.css'
import { useState } from 'react'

interface IDropdown {
	selected: string,
	setSelected: (option: string) => void,
	options: string[],
	changeMonth: (e: React.MouseEvent<HTMLDivElement>) => void
}

export default function Dropdown({ selected, setSelected, options, changeMonth }: IDropdown) {

	const [isActive, setIsActive] = useState(false)

	function changeDate(e: React.MouseEvent) {
    e.stopPropagation()
  }

	return (
		<div className={classes.dropdown} onClick={(e => changeDate(e))}>
			<div className={classes.dropdownBtn} onClick={() => setIsActive(!isActive)}>{selected}</div>
			{isActive && (
				<div className={classes.dropdownContent} onClick={(e) => changeMonth(e)}>
					{options.map((option: string) => (
						<div
							key={JSON.stringify(option)}
							className={classes.dropdownItem}
							onClick={e => { 
								setSelected(option)
								setIsActive(false)
							}}>
								{option}
						</div>
					))}
				</div>
			)}
		</div>
	)
}
