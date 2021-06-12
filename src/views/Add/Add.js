import { AGREGAR_PRODUCTO } from "../../redux/actions/Productos";
import Swal from "sweetalert2";

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

    dispatch(AGREGAR_PRODUCTO(InfoProducto));
    e.target.reset();

    Swal.fire({
      title: "Estado de la acción",
      icon: "success",
      text: "El producto fue agregado correctamente.",
    });
  } catch (error) {
    Swal.fire({
      title: "Estado de la acción",
      icon: "error",
      text: "No fue posible agregar el producto.",
    });
  }
};
