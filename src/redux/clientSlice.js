import { createSlice } from '@reduxjs/toolkit';

const clientSlice = createSlice({
  name: 'clients',
  initialState: {
    clientData: [],
    loading: false,
    error: null,
  },
  reducers: {
    setClients: (state, action) => {
      state.clientData = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setClients, setLoading, setError } = clientSlice.actions;
export default clientSlice.reducer;
