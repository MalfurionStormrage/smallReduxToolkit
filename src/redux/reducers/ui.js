import { createReducer } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { ERROR_ACCION, SUCCESS_ACCION } from '../actions/Productos';

const reducerUi = createReducer({}, (builder) => {
    builder.addCase(ERROR_ACCION.toString(), (state, { payload }) => {
        Swal.fire({
            icon: 'error',
            title: 'Error en la accion',
            text: `La accion tuvo un error , causa : ${payload}`
        })
    })
    builder.addCase(SUCCESS_ACCION.toString(), (state, type) => {
        Swal.fire({
            icon: 'success',
            title: 'Estado de la solicitud',
            text: 'El producto se agrego correctamente'
        })
    });
});

export default reducerUi;