import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleRemover } from "./List";

export default function ListView() {
  const dispatch = useDispatch();

  const { productos } = useSelector(
    (state) => state.persistedReducer.ReducerProducto
  );

  return (
    <section>
      <div className="text-center my-3 mt-5">
        <h4 className="fw-bolder">Listado de productos</h4>
      </div>
      <div className="table-responsive">
        <table
          className="table table-hover table-striped table-bordered text-center"
          role="button"
        >
          <thead className="table-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
              <th scope="col">Precio</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          {
            <tbody>
              {productos.length >= 1 ? (
                productos.map(({ id, nombre, descripcion, precio }) => (
                  <tr key={id}>
                    <td> {id} </td>
                    <td> {nombre} </td>
                    <td> {descripcion} </td>
                    <td> $ {precio} </td>
                    <td>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => handleRemover(id, productos, dispatch)}
                      >
                        <i className="bi bi-file-earmark-x"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5"> No hay registros </td>
                </tr>
              )}
            </tbody>
          }
        </table>
      </div>
    </section>
  );
}
