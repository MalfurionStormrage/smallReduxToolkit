import { ACTUALIZAR_PRODUCTO, ERROR_ACCION } from "../../redux/actions/Productos";
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
      precio: parseInt(document.getElementById("precio").value),
    };

    const datos = Object.assign([], productos);

    const datos2 = datos.map(({ id, nombre, descripcion, precio }) => {
      return id === updateProducto.newid
        ? {
          id: id,
          nombre: updateProducto.nombre,
          descripcion: updateProducto.descripcion,
          precio: updateProducto.precio + ((updateProducto.precio * 19) / 100),/* aqui no implemento thunk como en agregar producto porque solo era para darme idea de la funcionalidad de thunk */
        }
        : { id, nombre, descripcion, precio };
    });

    dispatch(ACTUALIZAR_PRODUCTO(datos2));

  } catch (err) {

    dispatch(ERROR_ACCION(err));

  } finally {
    Swal.fire({
      title: "Estado de la actualizacion",
      icon: "success",
      text: "Los datos fueron actualizado correctamente.",
    }).then((isConfirm) => history.push("/"));
  }
};
