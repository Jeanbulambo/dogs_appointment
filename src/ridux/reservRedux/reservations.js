// Actions
const GET_RESERVATION_DATA = 'GET_RESERVATION_DATA';
const RESERVATION_ADD = 'RESERVATION_ADD';
const RESERVATION_DESTROYED = 'RESERVATION_DESTROYED';

// Actions creators
const fetchReservations = (payload) => ({
  type: GET_RESERVATION_DATA,
  payload,
});

const postReservations = (payload) => ({
  type: RESERVATION_ADD,
  payload,
});

const removeReservation = (id) => ({
  type: RESERVATION-DESTROYED,
  id,
});

// get resrvations from server
const url = (id) => ``;

// fetch reservations from the server
export const fetchReservationsFromServer = (id) => async (dispatch) => {
  const data = await fetch(``);
  const reservations = await data.json();
  dispatch(fetchReservations(reservations));
};

// add input/form data to reservation
export const addReservation = (formData) => async (dispatch) => {
  await fetch(url(formData.user_id), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  dispatch(postReservations(formData));
};

// delete specific reservation
export const removeReservations = (data) => async (dispatch) => {
  await fetch(`${url(data.user_id)}/${data.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: data.id }),
  });
  dispatch(removeReservation(data.id));
};

const initialState = {
  reservations: [],
};

// Reducers
export const reservations = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVATION_DATA:
      return {
        ...state,
        reservations: action.payload,
      };

    case RESERVATION_ADD:
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    case RESERVATION_DESTROYED:
      return {
        ...state,
        reservations: state.reservations.filter(
          (reservation) => reservation.id !== action.id,
        ),
      };
    default:
      return state;
  }
};
