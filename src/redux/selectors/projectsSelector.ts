import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectProjectsVisibility = (state: RootState) => state.projects.visible;