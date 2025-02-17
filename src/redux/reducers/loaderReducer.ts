import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoaderState {
    visible: boolean;
}

const initialState: LoaderState = {
    visible: true
};

const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        setLoaderVisibility(state, action: PayloadAction<boolean>) {
            state.visible = action.payload;
        }
    }
});

export const { setLoaderVisibility } = loaderSlice.actions;
export default loaderSlice.reducer;