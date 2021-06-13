import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { handleEdit } from "./Edit";
import { useSelector, useDispatch } from "react-redux";

export default function EditView() {
  const { id, nombre, descripcion, precio } = useParams();

  const [error, setError] = useState(false);
  const [v, setV] = useState(0);

  const dispatch = useDispatch();
  const hisotry = useHistory();

  const { productos } = useSelector(
    (state) => state.persistedReducer.ReducerProducto
  );

  /*
		↑ esta variable la uso para el if del useEffect 

	*/
  useEffect(() => {
    /* si el valor de error cambia se  ejecutar el setTimeout */
    setTimeout(() => {
      setError(false);
    }, 3500);

    /*
			Al inicio tomo datos de la url que quiero mostrar en inputs, pero solo quiero
			que se coloquen la primera vez que se monta el componente 
			solo esa, sin importar otros factores.
		*/

    if (v === 0) {
      document.getElementById("nombre").value = nombre;
      document.getElementById("descripcion").value = descripcion;
      document.getElementById("precio").value = precio;

      setV(1); /* cambio el valor de la variable*/
    }

    return () => {
      console.log("clean up >:v >:v >:v");
    };
  }, [error]);

  return (
    <section
      className="shadow-lg mt-2 p-3 rounded"
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <div className="text-center p-2">
        <h4 className="fw-bolder">Editar datos del producto</h4>
      </div>
      <form>
        <div className="my-2">
          <label className="form-label">Nombre del producto</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            autoComplete="off"
            required="on"
          />
        </div>
        <div className="my-2">
          <label className="form-label">Descripcion del producto</label>
          <textarea
            rows="6"
            type="text"
            className="form-control"
            id="descripcion"
            autoComplete="off"
            required="on"
          />
        </div>
        <div className="my-2">
          <label className="form-label">Precio del producto</label>
          <input
            type="number"
            className="form-control"
            id="precio"
            autoComplete="off"
            required="on"
          />
        </div>
        {error ? (
          <div className="w-100 p-2 pt-4 mt-2 text-center alert alert-danger border border-danger fw-bolder">
            <p> Todos los campos son obligatorios. </p>
          </div>
        ) : null}
        <div className="my-3">
          <div className="row">
            <div className="col-sm my-1">
              <button
                type="submit"
                className="btn btn-outline-warning w-100 p-2 fw-bolder"
                onClick={(e) => {
                  setError(handleEdit(e, id, productos, dispatch, hisotry));
                }}
              >
                <i className="bi bi-check-circle"></i> Editar producto{" "}
              </button>
            </div>
            <div className="col-sm my-1">
              <Link to="/">
                <button className="btn btn-outline-danger w-100 p-2 fw-bolder">
                  <i className="bi bi-eraser"></i> Cancelar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
