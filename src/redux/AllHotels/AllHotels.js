/* eslint-disable default-param-last */
import { getHotels } from '../../api/api';

const GET = 'hotels/allhotels/GET_ALL_HOTELS';
const GETSPEC = 'hotels/allhotels/GET_SPECIFIC_HOTEL';

export const getAllHotels = () => async (dispatch) => {
  const data = await getHotels();
  dispatch({ type: GET, payload: data });
};

export const getSpecificHotel = (id) => async (dispatch) => {
  dispatch({ type: GETSPEC, payload: id });
};

const allHotelsReducer = (state = [], action) => {
  switch (action.type) {
    case GET:
      return action.payload;
    case GETSPEC:
      return state.filter((item) => item.symbol === action.payload);
    default:
      return state;
  }
};

export default allHotelsReducer;
