import { createSlice } from '@reduxjs/toolkit'


export const getUser = (state) => state?.value?.user;
export const getUserMetadata = (state) => state?.value?.metaData;

export const userSlice = createSlice({
  name: 'userStore',
  initialState: {
    value: {
        user: {},
        metaData: {}
    },
    isLoading: false,
    error: null
  },
  reducers: {
    setUser: (state, action) => {
      state.value.user = action.payload;
    },
    setUserMetaData: (state, action) => {
      state.value.metaData = action.payload;
    }
  },
})


export const { setUser, setUserMetaData} = userSlice.actions
export default userSlice.reducer