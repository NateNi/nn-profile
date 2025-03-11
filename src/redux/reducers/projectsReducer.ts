import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProjectsState {
    visible: boolean;
}

const initialState: ProjectsState = {
    visible: true
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setProjectsVisibility(state, action: PayloadAction<boolean>) {
            state.visible = action.payload;
        }
    }
});

export const { setProjectsVisibility } = projectsSlice.actions;
export default projectsSlice.reducer;