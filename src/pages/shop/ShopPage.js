import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import Collection from "../collection/Collection";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils.js";
import { updateCollections } from "../../redux/shop/shop.actions.js";
import WithSpinner from "../../components/with-spinner/WithSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={(props) => (
            <CollectionOverviewWithSpinner {...props} isLoading={isLoading} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={(props) => (
            <CollectionWithSpinner {...props} isLoading={isLoading} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
