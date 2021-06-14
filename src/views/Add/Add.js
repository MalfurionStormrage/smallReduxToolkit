import { thunkAgregarProducto } from "../../redux/actions/Productos";

export const handleAdd = (e, dispatch) => {
  try {
    e.preventDefault();

    if (
      document.getElementById("nombre").value === "" ||
      document.getElementById("descripcion").value === "" ||
      document.getElementById("precio").value === ""
    ) {
      return true;
    }

    const InfoProducto = {
      id: Date.now(),
      nombre: document.getElementById("nombre").value,
      descripcion: document.getElementById("descripcion").value,
      precio: parseInt(document.getElementById("precio").value),
    };

    dispatch(thunkAgregarProducto(InfoProducto));
  } finally {
    e.target.reset();
  }

};
