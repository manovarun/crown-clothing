import { createSelector } from "reselect";

const selectShop = (state) => state.Shop;

export const selectCollections = createSelector(
  [selectShop],
  (Shop) => Shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
