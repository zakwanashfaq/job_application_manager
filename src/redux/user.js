import { createSlice } from '@reduxjs/toolkit'


export const getUser = (state) => state?.value?.user;

export const userSlice = createSlice({
  name: 'userStore',
  initialState: {
    value: {
        user: {}
    },
    isLoading: false,
    error: null
  },
  reducers: {
    setUser: (state, action) => {
      state.value.user = action.payload;
    }
  },
})


export const { setUser } = userSlice.actions
export default userSlice.reducer