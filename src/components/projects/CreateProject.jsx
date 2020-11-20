import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createProjectAction } from '../../actions/projectsAction';

// Redux
import { useDispatch, useSelector } from 'react-redux';

const CreateProject = () => {

    const dispatch = useDispatch()

    const history = useHistory()

    const loading = useSelector( state => state.projects.loading )

    const [ newproject, saveNewProject ] = useState({
        name: '',
        description: '',
        category: '',
        year: '',
        languages: ''
    })

    const { name, description, category, year, languages } = newproject

    const addProject = newproject => dispatch( createProjectAction(newproject) )

    const onChange = e => {
        saveNewProject({
            ...newproject,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        // Validamos
        if(name.trim() === '' || description.trim() === '' || category.trim() === '' || year < 1900 || languages.trim() === ''){
            console.log('Errores')
            return;
        }

        // Si hay errores

        // Guardamos el proyecto
        addProject(newproject)

        // Redireccionamos
        history.push('/proyectos')
    }

    return (
        <section id="container" className="create-container">
            <h1>Crear proyecto</h1>

            { loading ? 'Creando proyecto...' : null }

            <form
                onSubmit={onSubmit}
            >
                <div>
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="name"
                        onChange={onChange}
                    />
                </div>

                <div>
                    <label>Descripcion</label>
                    <textarea
                        name="description"
                        onChange={onChange}
                    ></textarea>
                </div>

                <div>
                    <label>Categoria</label>
                    <input
                        type="text"
                        name="category"
                        onChange={onChange}
                    />
                </div>

                <div>
                    <label>Año de lanzamiento</label>
                    <input
                        type="number"
                        name="year"
                        onChange={onChange}
                    />
                </div>

                <div>
                    <label>Lenguajes utilizados</label>
                    <input
                        type="text"
                        name="languages"
                        onChange={onChange}
                    />
                </div>

                <input 
                    type="submit"
                    value="Crear Proyecto"
                />
            </form>
        </section>
    );
}
 
export default CreateProject;