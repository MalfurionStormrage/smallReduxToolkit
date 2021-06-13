import { ACTUALIZAR_PRODUCTO } from "../../redux/actions/Productos";
import Swal from "sweetalert2";

export const handleEdit = (e, id, productos, dispatch, history) => {
  try {
    e.preventDefault();
    const newid = parseInt(id);

    if (
      document.getElementById("nombre").value === "" ||
      document.getElementById("descripcion").value === "" ||
      document.getElementById("precio").value === ""
    ) {
      return true;
    }

    const updateProducto = {
      newid,
      nombre: document.getElementById("nombre").value,
      descripcion: document.getElementById("descripcion").value,
      precio: document.getElementById("precio").value,
    };

    const datos = Object.assign([], productos);

    const datos2 = datos.map(({ id, nombre, descripcion, precio }) => {
      return id === updateProducto.newid
        ? {
            id: id,
            nombre: updateProducto.nombre,
            descripcion: updateProducto.descripcion,
            precio: updateProducto.precio,
          }
        : { id, nombre, descripcion, precio };
    });

    dispatch(ACTUALIZAR_PRODUCTO(datos2));
  } catch (err) {
    Swal.fire({
      title: "Estado de la actualizacion",
      icon: "error",
      text: `No se pudo realizar la actualizacion , causa : ${err}`,
    });
  } finally {
    Swal.fire({
      title: "Estado de la actualizacion",
      icon: "success",
      text: "Los datos fueron actualizado correctamente.",
    }).then((isConfirm) => history.push("/"));
  }
};
