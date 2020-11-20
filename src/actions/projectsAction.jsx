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
    EDIT_PROJECT,
    EDIT_PROJECT_SUCCESS,
    EDIT_PROJECT_ERROR
} from '../types'
import clientAxios from '../config/axios';
import Swal from 'sweetalert2';

export function getProjectsAction() {
    return async (dispatch) => {
        dispatch( getProjects() )
        
        try {
            const response = await clientAxios.get('/projects')
            dispatch( getProjectsSuccess(response.data) )

        } catch (error) {
            dispatch( getProjectsError() )
        }
    }
}

const getProjects = () => ({
    type: GET_PROJECTS
})

const getProjectsSuccess = projects => ({
    type: GET_PROJECTS_SUCCESS,
    payload: projects
})

const getProjectsError = () => ({
    type: GET_PROJECTS_ERROR
})

export function createProjectAction(project) {
    return async (dispatch) => {
        dispatch( createProject(project) )
        
        try {
            await clientAxios.post('/projects', project)
            dispatch( createProjectSuccess() )

        } catch (error) {
            dispatch( createProjectError() )
        }
    }
}

const createProject = project => ({
    type: CREATE_PROJECT,
    payload: project,
})

const createProjectSuccess = () => ({
    type: CREATE_PROJECT_SUCCESS
})

const createProjectError = () => ({
    type: CREATE_PROJECT_ERROR
})

export function deleteProjectAction(project) {
    return async (dispatch) => {
        dispatch( deleteProject(project) )

        try {
            await clientAxios.delete(`projects/${project.id}`)
            Swal.fire(
                'Eliminado!',
                'Tu projecto ha sido eliminado',
                'success'
            )
            dispatch( deleteProductSuccess() )
            
        } catch (error) {
            dispatch( deleteProductError() )
        }
    }
}

const deleteProject = project => ({
    type: DELETE_PROJECT,
    payload: project
})

const deleteProductSuccess = () => ({
    type: DELETE_PROJECT_SUCCESS
})

const deleteProductError = () => ({
    type: DELETE_PROJECT_ERROR
})

export function getEditProjectAction(project) {
    return (dispatch) => {
        dispatch( getEditProject(project) )
    }
}

const getEditProject = project => ({
    type: GET_PROJECT_EDIT,
    payload: project
})

export function editProjectAction(project) {
    return async (dispatch) => {
        dispatch( editProject() )

        try {
            await clientAxios.put(`/projects/${project.id}`, project)
            dispatch( editProjectSuccess(project) )

        } catch (error) {
            dispatch( editProjectError() )
            console.log(error)
        }
    }
}

const editProject = () => ({
    type: EDIT_PROJECT
})

const editProjectSuccess = project => ({
    type: EDIT_PROJECT_SUCCESS,
    payload: project
})

const editProjectError = () => ({
    type: EDIT_PROJECT_ERROR
})