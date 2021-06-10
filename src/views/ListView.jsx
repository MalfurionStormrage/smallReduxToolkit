import React from "react";
import { useSelector } from "react-redux";

export default function ListView() {
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
              <th scope="col">Id Producto</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
          <tbody>
            {productos.length >= 1 ? (
              productos.map((item) => (
                <tr key={item.id}>
                  <td> {item.id} </td>
                  <td> {item.nombre} </td>
                  <td> {item.descripcion} </td>
                  <td> {item.precio} </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4"> No hay registros </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
