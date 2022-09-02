import { configureStore } from "@reduxjs/toolkit";
import holidaysSlice from './holidaySlice.js';

export const store = configureStore({
	reducer: {
		holidays: holidaysSlice,
	}
});