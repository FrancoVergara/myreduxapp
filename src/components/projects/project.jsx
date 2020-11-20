import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { deleteProjectAction, getEditProjectAction } from '../../actions/projectsAction';
import Swal from 'sweetalert2';

// Redux
import { useDispatch } from 'react-redux';

const Project = ({project}) => {

    const dispatch = useDispatch()

    const history = useHistory()

    const { name, description, category, year, languages } = project

    const onClick = project => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "No podras revertirlo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borralo!'
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch( deleteProjectAction(project) )
            }
        })
    }

    const toEdit = e => {
        dispatch( getEditProjectAction(project) )
        history.push(`/proyecto/editar/${project.id}`)
    }

    return (
        <div className="project-box">
            <h2>{name}</h2>
            <p>{category} | {year} | {languages}</p>
            <h3>{description}</h3>
            <button
                type="button"
                className="btn-alert"
                onClick={ e => onClick(project) }
            >Borrar</button>
            <button
                type="button"
                className="btn-alert"
                onClick={ e => toEdit(project) }
            >Editar</button>
        </div>
    );
}
 
export default Project;