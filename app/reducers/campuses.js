import axios from 'axios';
//action type 
const GET_CAMPUSES = 'GET_CAMPUSES';


//action creator
export function getCampuses(campuses){
    return {type: GET_CAMPUSES, campuses}
}

//Thunks for channels
export function fetchCampuses(){
    return function thunk (dispatch) {
        axios.get('api/campus_route')
        .then(res => res.data)
        .then(campuses => dispatch(getCampuses(campuses))
        .catch(err => console.log(err))
    }
}

export default function reducer (state = [], action) {
    switch (action.type) {
        case GET_CAMPUSES:
            return action.campuses
        default:
            state;
    }
}
