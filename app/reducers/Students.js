import axios from 'axios';

// STUDENT ACTION TYPES
const INIT_STUDENTS = 'INIT_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

// STUDENT ACTION CREATORS
const initStudents = students => ({ type: INIT_STUDENTS, students });
const createStudent = student => ({ type: CREATE_STUDENT, student });
const editStudent = student => ({ type: EDIT_STUDENT, student});
const deleteStudent = student => ({ type: DELETE_STUDENT, student});

// STUDENT REDUCER
export default function reducer(students = [], action) {
  switch (action.type) {

    case INIT_STUDENTS:
      return action.students;

    case CREATE_STUDENT:
      return [...students, action.student];

    case EDIT_STUDENT:
      return students.map(student => (
        student.id === action.student.id ? action.student : student
      ));

    case DELETE_STUDENT:
      return students.filter(student => student.id !== action.student.id);

    default:
      return students;
  }
}

// STUDENT THUNK CREATORS
export const fetchStudents = () => dispatch => {
  axios.get('/api/student')
    .then(res => dispatch(initStudents(res.data)))
    .catch(err => console.error('Error fetching students!', err));
}

export const addStudent = student => dispatch => {
  axios.post('/api/student', student)
    .then(res => dispatch(createStudent(res.data)))
    .catch(err => console.error(`Error adding student: ${student}`, err));
}

export const updateStudent = student => dispatch => {
  axios.put(`/api/student/${studejnt.id}`, student)
    .then(res => dispatch(editStudent(res.data)))
    .catch(err => console.error(`Error updating student: ${student}`, err));
}

export const removeStudent = student => dispatch => {
  dispatch(deleteStudent(student));
  axios.delete(`/api/student/${student.id}`)
    .catch(err => console.error(`Error deleting student: ${student}!`, err));
}
