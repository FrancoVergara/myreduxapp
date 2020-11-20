import {
    GET_PROJECTS,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_ERROR,
    CREATE_PROJECT,
    CREATE_PROJECT_SUCCESS,
    CREATE_PROJECT_ERROR,
    DELETE_PROJECT,
    DELETE_PROJECT_SUCCESS,
    DELETE_PROJECT_ERROR,
    GET_PROJECT_EDIT,
    EDIT_PROJECT_SUCCESS,
    EDIT_PROJECT_ERROR
} from '../types'

const initialState = {
    projects: [],
    newproject: [],
    todelete: [],
    toedit: [],
    loading: null,
    error: null
}

export default function( state = initialState, action ) {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                loading: true
            }
        case GET_PROJECTS_SUCCESS:
            return {
                ...state,
                projects: action.payload,
                loading: null
            }
        case GET_PROJECTS_ERROR:
        case CREATE_PROJECT_ERROR:
        case DELETE_PROJECT_ERROR:
        case EDIT_PROJECT_ERROR:
            return {
                ...state,
                loading: null,
                error: true
            }
        case CREATE_PROJECT:
            return {
                ...state,
                newproject: action.payload,
                loading: true
            }
        case CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                newproject: [],
                loading: null
            }
        case DELETE_PROJECT:
            return {
                ...state,
                todelete: action.payload,
                loading: true
            }
        case DELETE_PROJECT_SUCCESS:
            return {
                ...state,
                projects: state.projects.filter( project => project.id !== state.todelete.id ),
                loading: null
            }
        case GET_PROJECT_EDIT:
            return {
                ...state,
                toedit: action.payload
            }
        case EDIT_PROJECT_SUCCESS:
            return {
                ...state,
                projects: state.projects.map( project => project.id === action.payload.id ? project = action.payload : project )
            }

        default:
            return state;
    }
}