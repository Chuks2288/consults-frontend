import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dropdown: false,
    mobileView: false,
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        toggleDropdwn: (state) => {
            state.dropdown = !state.dropdown
        },
        OpenDropdown: (state) => {
            state.dropdown = true;
        },
        toggleMobileView: (state) => {
            state.mobileView = !state.mobileView
        },
        openMobileView: (state) => {
            state.mobileView = true
        },
        closeMobileView: (state) => {
            state.mobileView = false
        },

    }
})


export const { toggleDropdwn, OpenDropdown, toggleMobileView, openMobileView, closeMobileView } = searchSlice.actions
export default searchSlice.reducer