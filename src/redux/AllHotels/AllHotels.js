/* eslint-disable default-param-last */
import { getHotels } from '../../api/api';

const GET = 'hotels/allhotels/GET_ALL_HOTELS';

export const getAllHotels = () => async (dispatch) => {
  const data = await getHotels();
  dispatch({ type: GET, payload: data });
};

const allHotelsReducer = (state = [], action) => {
  switch (action.type) {
    case GET:
      return action.payload;
    default:
      return state;
  }
};

export default allHotelsReducer;
