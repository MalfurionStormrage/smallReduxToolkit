import React from 'react';
import {useSelector} from 'react-redux';

export default function ListView () {

	const { productos } = useSelector(state => state.persistedReducer.ReducerProducto);
	
	return (
		<>	
		<div className="text-center my-3 mt-5">
			<h4 className="fw-bolder">Listado de productos</h4>
		</div>
			<div className="table-responsive">
				<table className="table table-hover table-striped table-bordered">
					<thead className="table-dark">
						<tr>
							<th scope="col">Id Producto</th>
							<th scope="col">Nombre</th>
							<th scope="col">Descripcion</th>
							<th scope="col">Precio</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Id Producto</td>
							<td>Nombre</td>
							<td>Descripcion</td>
							<td>Precio</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}