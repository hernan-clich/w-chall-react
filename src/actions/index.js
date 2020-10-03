export const isSignedInAction = status => {
  return {
    type: 'IS_SIGNED_IN',
    payload: status
  };
};