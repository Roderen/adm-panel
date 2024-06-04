const initialState = {
  isOpen: false,
};

export const sidebarCollapse = (state = initialState, action) => {
  switch (action.type) {
    case 'collapsed':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};
