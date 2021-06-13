import Swal from "sweetalert2";
import { REMOVER_PRODUCTO } from "../../redux/actions/Productos";

export const handleRemover = (id, productos, dispatch) => {
  try {
    Swal.fire({
      title: "Eliminar registro",
      icon: "warning",
      text: "Esta acción es irreversible.",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "¡Si, Eliminar el registro!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const arrayFiltrado = productos.filter((item) => item.id !== id);
        dispatch(REMOVER_PRODUCTO(arrayFiltrado));

        Swal.fire(
          "!Eliminado!",
          "El registro fue eliminado correctamente.",
          "success"
        );
      }
    });
  } catch (error) {
    Swal.fire({
      title: "Estado de la acción",
      icon: "error",
      text: "No fue posible agregar el producto.",
    });
  }
};
