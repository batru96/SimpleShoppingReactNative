const isDrawerOpen = (state = false, action) => {
    if (action.type === 'TOGGLE_DRAWER') {
        return !state;
    }
    return state;
};

export default isDrawerOpen;
