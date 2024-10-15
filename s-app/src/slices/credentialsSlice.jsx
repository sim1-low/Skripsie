import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'Guest',
    email: null,
};

const credentialsSlice = createSlice({
  name: 'credentials',
  initialState,
  reducers: {
    setCredentials(state, action) {
      const { name, email} = action.payload;
      state.name = name;
      state.email = email;
    },
    clearCredentials(state) {
      state.email = null;
      state.name = null;
    },
  },
});

export const { setCredentials, clearCredentials } = credentialsSlice.actions;
export default credentialsSlice.reducer;