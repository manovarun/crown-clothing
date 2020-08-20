import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleHiddenCart } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import {
  CartContainer,
  ItemCountContainer,
  ShoppingIcon,
} from "./cart-icon.styles";

const CartIcon = ({ toggleHiddenCart, itemCount }) => (
  <CartContainer onClick={() => toggleHiddenCart()}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleHiddenCart: () => dispatch(toggleHiddenCart()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
