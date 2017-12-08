import axios from 'axios';
//action type
 const GET_STUDENTS = 'GET_STUDENTS';

 //Action creator 

 export function getStudents(students){
     return {type: GET_STUDENTS, students};
     }

 //thunk for students
 export function fetchStudents(students){
     return function thunks(dispatch){
         return axios.get('api/student_route')
                .then(res => res.data)
                .then(students => {
                    dispatch(getStudents(students));
                })
                .catch(err => console.log(err));
     }
 }

export default function reducer (state = [], action){
    switch (action.type) {
        case GET_STUDENTS:
            return action.students;
    
        default:
            return state;
    }
}