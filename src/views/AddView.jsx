import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { AGREGAR_PRODUCTO } from "../redux/actions/Productos";

export default function AddView() {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();

    if (
      document.getElementById("nombre").value === "" ||
      document.getElementById("descripcion").value === "" ||
      document.getElementById("precio").value === ""
    ) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3500);
      return;
    }

    const InfoProducto = {
      id: Date.now(),
      nombre: document.getElementById("nombre").value,
      descripcion: document.getElementById("descripcion").value,
      precio: parseInt(document.getElementById("precio").value),
    };

    dispatch(AGREGAR_PRODUCTO(InfoProducto));
    e.target.reset();
  };

  return (
    <>
      <div className="container p-4">
        <div className="text-center">
          <h4 className="fw-bolder">Agregar nuevo producto</h4>
        </div>
        <form onSubmit={(e) => handleAdd(e)}>
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
              <label className="form-label">
                Descripcion sobre el producto
              </label>
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
              <div className="w-100 p-2 pt-4 mt-2 text-center alert alert-danger border border-danger">
                <p> Todo los campos son obligatorios </p>
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
                  <Link to="/">
                    <button
                      type="reset"
                      className="btn btn-outline-secondary w-100 p-2 fw-bolder"
                    >
                      {" "}
                      <i className="bi bi-eraser"></i> Cancelar
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
