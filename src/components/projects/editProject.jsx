import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { editProjectAction } from '../../actions/projectsAction';

// Redux
import { useDispatch, useSelector } from 'react-redux';

const EditProject = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [ editedproject, saveEditedProject ] = useState({
        name: '',
        description: '',
        category: '',
        year: '',
        languages: ''
    })

    const project = useSelector( state => state.projects.toedit )

    useEffect(() => {
        saveEditedProject(project)
    }, [project])

    const onChange = e => {
        saveEditedProject({
            ...editedproject,
            [e.target.name] : e.target.value
        })
    }

    const { name, description, category, year, languages } = editedproject

    const onSubmit = e => {
        e.preventDefault()

        // Validamos
        if(name.trim() === '' || description.trim() === '' || category.trim() === '' || year < 1900 || languages.trim() === ''){
            console.log('Errores')
            return;
        }

        // Si hay errores

        // Guardamos el proyecto
        dispatch( editProjectAction(editedproject) )

        // Redireccionamos
        history.push('/proyectos')
    }

    return (
        <section id="container" className="create-container">
            <h1>Editar proyecto</h1>

            <form
                onSubmit={onSubmit}
            >
                <div>
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange}
                    />
                </div>

                <div>
                    <label>Descripcion</label>
                    <textarea
                        name="description"
                        value={description}
                        onChange={onChange}
                    ></textarea>
                </div>

                <div>
                    <label>Categoria</label>
                    <input
                        type="text"
                        name="category"
                        value={category}
                        onChange={onChange}
                    />
                </div>

                <div>
                    <label>Año de lanzamiento</label>
                    <input
                        type="number"
                        name="year"
                        value={year}
                        onChange={onChange}
                    />
                </div>

                <div>
                    <label>Lenguajes utilizados</label>
                    <input
                        type="text"
                        name="languages"
                        value={languages}
                        onChange={onChange}
                    />
                </div>

                <input 
                    type="submit"
                    value="Editar Proyecto"
                />
            </form>
        </section>
    );
}
 
export default EditProject;