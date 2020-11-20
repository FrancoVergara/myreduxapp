import React, { useEffect } from 'react';
import { getProjectsAction } from '../../actions/projectsAction';
import Project from './project';

// Redux
import { useDispatch, useSelector } from 'react-redux'

const Projects = () => {

    const projects = useSelector( state => state.projects.projects )
    const loading = useSelector( state => state.projects.loading )
    const error = useSelector( state => state.projects.error )

    const dispatch = useDispatch()

    useEffect( () => {
        const loadProjects = () => dispatch( getProjectsAction() )
        loadProjects()
        // eslint-disable-next-line
    }, [])

    return (
        <section id="container" className="projects-container">
            <h1>Mis Proyectos</h1>

            { loading ? 'Cargando...' : null }
            { error ? 'Hubo un error' : null }

            {
                projects.lenght === 0 ? 'No hay proyectos' : (
                    projects.map( project => (
                        <Project
                            key={project.id}
                            project={project}
                        />   
                    ))
                )
            }
            

        </section>
    );
}
 
export default Projects;