import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleAdd } from "./Add";

export default function AddView() {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3500);
  }, [error]);

  return (
    <>
      <div className="container p-4">
        <div className="text-center">
          <h4 className="fw-bolder">Agregar nuevo producto</h4>
        </div>
        <form onSubmit={(e) => setError(handleAdd(e, dispatch))}>
          <div className="row">
            <div className="mb-2">
              <label className="form-label">Nombre del producto</label>
              <input
                type="Text"
                className="form-control border-dark"
                id="nombre"
                autoComplete="off"
                placeholder="Escribe el nombre del producto"
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Descripcion del producto</label>
              <textarea
                rows="8"
                type="Text"
                className="form-control border-dark"
                id="descripcion"
                autoComplete="off"
                placeholder="Escribe una descripcion sobre el producto"
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Precio del producto</label>
              <input
                type="number"
                className="form-control border-dark"
                id="precio"
                autoComplete="off"
                placeholder="Asigna un precio al producto"
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
                    className="btn btn-outline-success w-100 p-2 fw-bolder"
                  >
                    {" "}
                    <i className="bi bi-check-circle"></i> Agregar producto{" "}
                  </button>
                </div>
                <div className="col-sm my-1">
                  <button
                    type="reset"
                    className="btn btn-outline-secondary w-100 p-2 fw-bolder"
                  >
                    {" "}
                    <i className="bi bi-eraser"></i> Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
