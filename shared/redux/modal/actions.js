const modalActions = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',

  openModal: (payload) => {
    console.log('hello, payload', modalActions.SHOW_MODAL);
    return {
      type: modalActions.SHOW_MODAL,
      payload,
    };
  },
  closeModal: () => ({
    type: modalActions.HIDE_MODAL,
  }),
};

export default modalActions;
