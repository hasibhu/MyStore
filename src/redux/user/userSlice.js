import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    user: { username: 'coding addict' },
    theme: 'dracula'
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            console.log('login');
        },
        logoutUser: (state ) => {
            state.user = null;
            localStorage.removeItem('user')
        },
        toggleTheme: (state) => {
            console.log('toggle theme ');
        },
    }
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;