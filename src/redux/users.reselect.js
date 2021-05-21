import { createSelector } from 'reselect';

const selectUserRx = (state) => state.userReducer;

export const selectUsers = createSelector(
  [selectUserRx],
  (userRx) => userRx.users
);

export const selectUserFullName = {};

export const selectCurrentUser = createSelector(
  [selectUserRx],
  (userRx) => userRx.currentUser
);

export const selectInput = createSelector(
  [selectUserRx],
  (userRx) => userRx.inputValue
);

// isEditing: false,
// isLoading: false,
// isSuccess: false,

export const selectIsError = createSelector(
  [selectUserRx],
  (userRx) => userRx.isError
);

export const selectAlertMsg = createSelector(
  [selectUserRx],
  (userRx) => userRx.msg
);
