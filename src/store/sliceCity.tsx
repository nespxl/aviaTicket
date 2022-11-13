import { createSlice } from "@reduxjs/toolkit";

interface ITicket {
	cityStart: string,
	cityEnd: string,
	dateStart: string,
	dateEnd: string,
	timeStart: string,
	timeEnd: string,
	timeSecondStart: string,
	timeSecondEnd: string,
}

const initialState: ITicket = {
	cityStart: '',
	cityEnd: '',
	dateStart: '',
	dateEnd: '',
	timeStart: '9:20',
	timeEnd: '11:05',
	timeSecondStart: '9:20',
	timeSecondEnd: '11:15',
}

export const sliceCity = createSlice({
	name: 'sliceCity',
	initialState,
	reducers: {
		startCity(state, actions) {
			state.cityStart = actions.payload
		},
		endCity(state, actions) {
			state.cityEnd = actions.payload
		},
		startDate(state, actions) {
			state.dateStart = actions.payload
		},
		endDate(state, actions) {
			state.dateEnd = actions.payload
		},
		startTime(state, actions) {
			state.timeStart = actions.payload
		},
		endTime(state, actions) {
			state.timeEnd = actions.payload
		},
		timeSecondStart(state, actions) {
			state.timeSecondStart = actions.payload
		},
		timeSecondEnd(state, actions) {
			state.timeSecondEnd = actions.payload
		}
	}
})

export default sliceCity.reducer
