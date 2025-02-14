import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectLoaderVisibility = (state: RootState) => state.loader.visible;