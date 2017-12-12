import axios from 'axios';
//action type
const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const EDIT_CAMPUS = 'EDIT_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';

//action creator
export function getCampuses(campuses){
    return {type: GET_CAMPUSES, campuses};
}

export function addCampus(newCampus){
    return {type: ADD_CAMPUS, newCampus};
}

export function editCampus(campus){
    return {type: EDIT_CAMPUS, campus};
}

export function removeCampus(campusId){
    return {type: DELETE_CAMPUS, campusId};
}
//Thunks for campuses
export function fetchCampuses(){
    return function thunk (dispatch) {
        return axios.get('api/campus_route')
            .then(res => res.data)
            .then(campuses => {
                dispatch(getCampuses(campuses));
            })
            .catch(err => console.log(err));
    };
}

export function postCampus(campusInfo, history) {
    return function thunk (dispatch) {
        return axios.post('api/campus_route', campusInfo)
                .then(res => res.data)
                .then(newCampusInfo => {
                    dispatch(addCampus(newCampusInfo))
                    history.push(`/campuses/${newCampusInfo.id}`);
                })
                .catch(err => console.log(err));
    };
 }

 export function updateCampus(campusInfoToUpdate, campusId, history){
     return function thunk (dispatch) {
         return axios.put('/api/campus_route/' + campusId, campusInfoToUpdate)
                .then(res => res.data)
                .then(updatedInfo => {
                    dispatch(editCampus(updatedInfo));
                    history.push(`/campuses/`);
                })
                .catch(err => console.log(err));
     };
 }

 export function deleteCampus(campusId){
     return function thunk(dispatch) {
        return axios.delete('/api/campus_route/' + campusId)
                    .then(res => {
                        dispatch(removeCampus(campusId));
                    })
                    .catch(err => console.log(err));
     };
 }

export default function reducer (state = [], action) {
    switch (action.type) {
        case GET_CAMPUSES:
            return action.campuses;
        case ADD_CAMPUS:
            return [...state, action.newCampus];
        case EDIT_CAMPUS:
        const campusArr = state.filter(campus => campus.id !== action.campus.id);
        
                    return [...campusArr, action.campus];
        case DELETE_CAMPUS:
            return state.filter(campus => campus.id !== action.campusId);
        default:
            return state;
    }
}
