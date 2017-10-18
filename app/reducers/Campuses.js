import axios from 'axios';

//action types

const INIT_CAMPUSES = 'INIT_CAMPUSES';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const EDIT_CAMPUS = 'EDIT_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

//action creators

const initCampuses = campuses => ({ type: INIT_CAMPUSES, campuses});
const createCampus = campus => ({ type: CREATE_CAMPUS, campus });
const editCampus = campus => ({ type: EDIT_CAMPUS, campus});
const deleteCampus = campus => ({ type: DELETE_CAMPUS, campus});

//reducer

export default function reducer(campuses = [], action) {
  switch (action.type) {

    case INIT_CAMPUSES:
      return action.campuses;

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

//thunk creators

export const fetchCampuses = () => dispatch => {
  axios.get('/api/campus')
    .then(res => dispatch(initCampuses(res.data)))
    .catch(err => console.error('Error fetching campuses!', err));
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
