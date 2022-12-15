/* eslint-disable default-param-last */
import { getHotelDetails } from '../../api/api';

const GET = 'hotels/hoteldetails/GET_HOTEL_DETAILS';

export const getDetails = (id) => async (dispatch) => {
  const data = await getHotelDetails(id);
  dispatch({ type: GET, payload: data });
};

const detailsReducer = (state = [], action) => {
  switch (action.type) {
    case GET:
      return action.payload;
    default:
      return state;
  }
};

export default detailsReducer;
