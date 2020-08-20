import { createSelector } from "reselect";

const selectDirectory = (state) => state.Directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (Directory) => Directory.sections
);
