const screenName = (state = 'SIGN_IN', action) => {
    switch (action.type) {
        case 'GO_TO_SIGN_IN':
            return 'SIGN_IN';
        case 'GO_TO_LIST_CART':
            return 'LIST_CART';
        case 'GO_TO_PRODUCT_DETAIL':
            return 'PRODUCT_DETAIL';
        default:
            return state;
    }
};

export default screenName;
