//action type
const WRITE_STUDENT_FIRST_NAME = 'WRITE_STUDENT_FIRST_NAME';
const WRITE_STUDENT_LAST_NAME = 'WRITE_STUDENT_LAST_NAME';
const WRITE_STUDENT_GPA = 'WRITE_STUDENT_GPA';
// const WRITE_STUDENT_CAMPUS = 'WRITE_STUDENT_CAMPUS';
const WRITE_STUDENT_EMAIL = 'WRITE_STUDENT_EMAIL';


export function writeStudentFirstName(firstName){
	return {type: WRITE_STUDENT_FIRST_NAME, firstName};
}

export function writeStudentLastName(lastName){
	return {type: WRITE_STUDENT_LAST_NAME, lastName};
}

export function writeStudentGPA(studentGPA){
	return {type: WRITE_STUDENT_GPA, studentGPA};
}

// export function writeStudentCampus(studentCampus){
// 	return {type: WRITE_STUDENT_CAMPUS, studentCampus};
// }
export function writeStudentEmail(studentEmail){
	return {type: WRITE_STUDENT_Email, studentEmail};
}

const initialState = {
	studentFirstName: '',
	// studentLastName: '',
	// studentGPA: '',
	studentEmail: ''
	// studentCampus: ''
};


export default function reducer (state = initialState, action){
	switch (action.type) {
		case WRITE_STUDENT_FIRST_NAME:
			return Object.assign({}, state, {studentFirstName: action.studentFirstName});
		case WRITE_STUDENT_LAST_NAME:
			return Object.assign({}, state, {studentLastName: action.studentLastName});
		case WRITE_STUDENT_GPA:
			return Object.assign({}, state, {studentGPA: action.studentGPA});
		// case WRITE_STUDENT_CAMPUS:
		// 	return Object.assign({}, state, {studentCampus: action.studentCampus});
		case WRITE_STUDENT_EMAIL:
		return Object.assign({}, state, {studentEmail: action.studentEmail});
		default:
			return state;

	}
}
