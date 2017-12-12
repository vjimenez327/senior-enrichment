import axios from 'axios';
//action type
 const GET_STUDENTS = 'GET_STUDENTS';
 const ADD_STUDENT = 'ADD_STUDENT';
 const EDIT_STUDENT = 'EDIT_STUDENT';
 const DELETE_STUDENT = 'DELETE_STUDENT';

 //Action creator

export function getStudents(students){
    return {type: GET_STUDENTS, students};
}

export function addStudent(newStudent){
    return {type: ADD_STUDENT, newStudent};
}

export function editStudent(student){
    return {type: EDIT_STUDENT, student};
}

export function removeStudent(studentId){
    return {type:DELETE_STUDENT, studentId}
}

 //thunk for students
export function fetchStudents(students){
     return function thunks(dispatch){
         return axios.get('api/student_route/')
                .then(res => res.data)
                .then(students => {
                    dispatch(getStudents(students));
                })
                .catch(err => console.log(err));
     };
 }

export function postStudent(studentInfo, history) {
    return function thunk (dispatch) {
        return axios.post('/api/student_route/', studentInfo)
                .then(res => res.data)
                .then(newStudentInfo => {
                    dispatch(addStudent(newStudentInfo));
                    history.push(`/students/${newStudentInfo.id}`);
                })
                .catch(err => console.log(err));
    };
 }

 export function updateStudent(studentInfoToUpdate, studentId){
     return function thunk (dispatch) {
         return axios.put('/api/student_route/' + studentId, studentInfoToUpdate)
                .then(res => res.data)
                .then(updatedInfo => {
                    dispatch(editStudent(updatedInfo));
                })
                .catch(err => console.log(err));
     };
 }

 export function deleteStudent(studentId){
     return function thunk(dispatch) {
         console.log('api/student_route/' + studentId);
        return axios.delete('api/student_route/' + studentId)
                    .then(res => {
                        dispatch(removeStudent(studentId));
                    })
                    .catch(err => console.log(err));
     }
 }

export default function reducer (state = [], action){
    switch (action.type) {
        case GET_STUDENTS:
            return action.students;
        case ADD_STUDENT:
            return [...state, action.newStudent];
        case EDIT_STUDENT:

            const studentsArr = state.filter(student => student.id !== action.student.id);

            return [...studentsArr, action.student];
        case DELETE_STUDENT:
            return state.filter(student => student.id !== action.studentId);
        default:
            return state;
    }
}
