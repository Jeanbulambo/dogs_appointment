/* eslint-disable default-param-last */
import { ReserveHotelAPI } from '../../api/api';

const CREATE = 'hotels/reservations/CREATE_RESERVATION';

export const createReservation = (data) => async (dispatch) => {
  const res = await ReserveHotelAPI(data);
  dispatch({ type: CREATE, payload: res });
};

const reservationReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE:
      if (action.payload.data) {
        return [...state, action.payload.data];
      }
      return [...state];
    default:
      return state;
  }
};

export default reservationReducer;
