const isSearching = (state = false, action) => {
    if (action.type === 'TOGGLE_SEARCHING') {
        return !state;
    }
    return state;
};

export default isSearching;
