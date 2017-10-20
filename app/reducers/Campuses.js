import axios from 'axios';

// CAMPUS ACTION TYPES
const INIT_CAMPUSES = 'INIT_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const EDIT_CAMPUS = 'EDIT_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

// CAMPUS ACTION CREATORS
const initCampuses = campuses => ({ type: INIT_CAMPUSES, campuses});
const getCampus = campus => ({ type: GET_CAMPUS, campus });
const createCampus = campus => ({ type: CREATE_CAMPUS, campus });
const editCampus = campus => ({ type: EDIT_CAMPUS, campus});
const deleteCampus = campus => ({ type: DELETE_CAMPUS, campus});

// CAMPUS REDUCER
export default function reducer(campuses = [], action) {
  switch (action.type) {

    case INIT_CAMPUSES:
      return action.campuses;

    case GET_CAMPUS:
      return action.campus;

    case CREATE_CAMPUS:
      return [...campuses, action.campus];

    case EDIT_CAMPUS:
      return campuses.map(campus => (
        campus.id === action.campus.id ? action.campus : campus
      ));

    case DELETE_CAMPUS:
      return campuses.filter(campus => campus.id !== action.campus.id);

    default:
      return campuses;
  }
}

// CAMPUS THUNK CREATORS
export const fetchCampuses = () => dispatch => {
  axios.get('/api/campus')
    .then(res => dispatch(initCampuses(res.data)))
    .catch(err => console.error('Error fetching campuses!', err));
}

export const fetchCampusById = campus => dispatch => {
  axios.get(`/api/campus/${campus.id}`, campus)
    .then(res => dispatch(getCampus(res.data)))
    .catch(err => console.error(`Error fetching campus: ${campus}`, err));
}

export const addCampus = campus => dispatch => {
  axios.post('/api/campus', campus)
    .then(res => dispatch(createCampus(res.data)))
    .catch(err => console.error(`Error adding campus: ${campus}`, err));
}

export const updateCampus = campus => dispatch => {
  axios.put(`/api/campus/${campus.id}`, campus)
    .then(res => dispatch(editCampus(res.data)))
    .catch(err => console.error(`Error updating campus: ${campus}`, err));
}

export const removeCampus = campus => dispatch => {
  dispatch(deleteCampus(campus));
  axios.delete(`/api/campus/${campus.id}`)
    .catch(err => console.error(`Error deleting campus: ${campus}!`, err));
}
