import * as calendar from "./calcCalendar";
import { useState } from "react";
import classes from '../../style/calendar.module.css'
import Dropdown from "../Dropdown";
import { useAppDispatch } from "../../hooks/customHookQuery";
import { sliceCity } from "../../store/sliceCity";
import classNames from "classnames";
import '../../style/log.css';

interface IFlag {
  flagDate: boolean
}

export default function CalFunc({flagDate}: IFlag) {

  const [dateMonth, setDateMonth] = useState(new Date())
  const [dateYear, setDateYear] = useState(new Date().getFullYear())
  const dispatch = useAppDispatch()
  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ]

  const weekDayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

  const [selected, setSelected] = useState(monthNames[dateMonth.getMonth()])

  function handlePrevButton(e: React.MouseEvent<HTMLButtonElement>): void {
    e.stopPropagation()
    const date = new Date(dateMonth.getFullYear(), dateMonth.getMonth() - 1)
    console.log(date)
    if(dateMonth.getMonth() === 0) {
      setSelected('Декабрь')
    } else setSelected(monthNames[dateMonth.getMonth() - 1])
    setDateMonth(date)
    setDateYear(date.getFullYear())
  }
  function handleNextButton(e: React.MouseEvent<HTMLButtonElement>): void {
    e.stopPropagation()
    const date = new Date(dateMonth.getFullYear(), dateMonth.getMonth() + 1)
    if(dateMonth.getMonth() === 11) {
      setDateYear(dateYear + 1)
      setSelected('Январь')
    } else setSelected(monthNames[dateMonth.getMonth() + 1])
    setDateMonth(date)
    setDateYear(date.getFullYear())
  }

  function handleSelectChangeMonth(e: React.MouseEvent<HTMLDivElement>): void {
    if (!(e.target instanceof HTMLElement)) return
    let translateInJs: number = 0
    if(e.target.innerHTML === 'Январь') {
      translateInJs = 0
    } else if(e.target.innerHTML === 'Февраль') {
      translateInJs = 1
    } else if(e.target.innerHTML === 'Март') {
      translateInJs = 2
    } else if(e.target.innerHTML === 'Апрель') {
      translateInJs = 3
    } else if(e.target.innerHTML === 'Май') {
      translateInJs = 4
    } else if(e.target.innerHTML === 'Июнь') {
      translateInJs = 5
    } else if(e.target.innerHTML === 'Июль') {
      translateInJs = 6
    } else if(e.target.innerHTML === 'Август') {
      translateInJs = 7
    } else if(e.target.innerHTML === 'Сентябрь') {
      translateInJs = 8
    } else if(e.target.innerHTML === 'Октябрь') {
      translateInJs = 9
    } else if(e.target.innerHTML === 'Ноябрь') {
      translateInJs = 10
    } else if(e.target.innerHTML === 'Декабрь') {
      translateInJs = 11
    }
    // setMonth(translateInJs)
    const date = new Date(dateMonth.getFullYear(), translateInJs)
    setDateMonth(date)
  };

  function clickItem(e: React.MouseEvent<HTMLTableCaptionElement>): void {
    if (!(e.target instanceof HTMLElement)) return
    const month = String(Number(dateMonth.getMonth()) + 1)
    let refMonth: string = ''
    let refDay: string = ''
    if(month.length === 1) {
      refMonth = '0' + month
    } else refMonth = month
    if(e.target.innerHTML.length === 1) {
      refDay = '0' + e.target.innerHTML
    } else refDay = e.target.innerHTML
    if(flagDate) dispatch(sliceCity.actions.startDate(dateMonth.getFullYear() + '-' + refMonth + '-' + refDay))
    if(!flagDate) dispatch(sliceCity.actions.endDate((dateMonth.getFullYear() + '-' + refMonth + '-' + refDay)))
    console.log(e.target.innerHTML)
  }

  const monthData = calendar.getMonthData(dateMonth.getFullYear(), dateMonth.getMonth());

  return (
    <div className={classes.calendar}>
      <div className={classes.header}>
        <button onClick={(e) => handlePrevButton(e)} className={classes.calendarBtn}>{"<"}</button>
        <Dropdown selected={selected} setSelected={setSelected} options={monthNames} changeMonth={handleSelectChangeMonth} />
        {/* <Dropdown selected={yearSelected} setSelected={setYearSelected} options={years} changeMonth={handleSelectChangeYear} /> */}
        <div className={classes.yearTitle}>{dateYear}</div>
        <button onClick={(e) => handleNextButton(e)} className={classes.calendarBtn}>{">"}</button>
      </div>
      <table className={classes.table}>
        <thead className={classes.titleHead}>
          <tr className={classes.titleRow}>
            {weekDayNames.map((name) => (
              <th className={classes.titleItem} key={name}>
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={classes.titleBody}>
          {monthData.map((week: Array<Date>, index: number) => (
            <tr className={classes.bodyRow} key={index}>
              {week.map((date: Date, index: number) =>
                date ? (
                  <td
                    className={classNames(classes.bodyItem, {
                      'today': calendar.areEqual(date, new Date()),
                      'past': calendar.areEqual1(date, new Date()),
                      'future': calendar.areEqual2(date, new Date()),
                    })}
                    key={index}
                    onClick={(e) => clickItem(e)}
                  >
                    {date.getDate()}
                  </td>
                ) : (
                  <td key={index} />
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
