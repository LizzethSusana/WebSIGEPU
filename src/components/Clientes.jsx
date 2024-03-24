import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Clientes = () => {
  const [clientes, setClientes] = useState([
    // Datos de ejemplo
    { id: 1, usuario: 'Usuario1', nombre: 'Anna', apellido: 'Garcia', telefono: '555-123-4567', direccion: 'Avenida Independencia', estatus: 'Activo' },
    // Agrega más clientes según sea necesario
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCliente, setCurrentCliente] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const changeStatus = (cliente) => {
    setCurrentCliente(cliente);
    toggleModal();
  };

  const confirmStatusChange = () => {
    setClientes(clientes.map(c => {
      if (c.id === currentCliente.id) {
        return { ...c, estatus: c.estatus === 'Activo' ? 'Inactivo' : 'Activo' };
      }
      return c;
    }));
    toggleModal();
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [clientesPerPage] = useState(5); // Número de clientes por página

  const indexOfLastCliente = currentPage * clientesPerPage;
  const indexOfFirstCliente = indexOfLastCliente - clientesPerPage;
  const currentClientes = clientes.slice(indexOfFirstCliente, indexOfLastCliente);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="centrado-container">
        {/* Título */}
        <h1 className="text-4xl font-bold text-gray-900 my-8 text-left">
          Clientes
        </h1>

        {/* Tabla */}
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-white uppercase bg-red-600">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Usuario
                </th>
                <th scope="col" className="py-3 px-6">
                  Nombre
                </th>
                <th scope="col" className="py-3 px-6">
                  Apellido
                </th>
                <th scope="col" className="py-3 px-6">
                  Num. Teléfono
                </th>
                <th scope="col" className="py-3 px-6">
                  Dirección
                </th>
                <th scope="col" className="py-3 px-6">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody>
              {clientes.map(cliente => (
                <tr key={cliente.id}>
                  <td className="py-4 px-6">{cliente.usuario}</td>
                  <td className="py-4 px-6">{cliente.nombre}</td>
                  <td className="py-4 px-6">{cliente.apellido}</td>
                  <td className="py-4 px-6">{cliente.telefono}</td>
                  <td className="py-4 px-6">{cliente.direccion}</td>
                  <td className="py-4 px-6">
                    <button 
                      onClick={() => changeStatus(cliente)}
                      className={`status-btn ${cliente.estatus === 'Activo' ? 'active' : 'inactive'}`}
                    >
                      {cliente.estatus}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
      
        <Transition show={isModalOpen} as={React.Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={toggleModal}>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Confirmación
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    ¿Estás seguro de que quieres cambiar el estado de este cliente?
                  </p>
                </div>
                
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={confirmStatusChange}
                  >
                    Aceptar
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 ml-4"
                    onClick={toggleModal}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      {/* Paginación */}
      <div className="pagination">
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            Anterior
          </button>
          {Array.from({ length: Math.ceil(clientes.length / clientesPerPage) }, (_, i) => (
            <button key={i} onClick={() => paginate(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>
              {i + 1}
            </button>
          ))}
          <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(clientes.length / clientesPerPage)}>
            Siguiente
          </button>
        </div>


        {/* Estilos */}
        <style jsx>{`
          /* Estilos para la cabecera de la tabla */
          thead tr th {
            background-color: #a2160f;
            color: white;
          }

          /* Estilos para las filas de la tabla al pasar el ratón */
          tbody tr:hover {
            background-color: #fee2e2;
          }

          /* Estilos para el botón de estado */
          .status-btn {
            padding: 5px 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            color: white;
            font-weight: bold;
          }

          .status-btn.active {
            background-color: green;
          }

          .status-btn.inactive {
            background-color: red;
          }

          /* Estilos para centrar el contenido */
          .centrado-container {
            margin: auto;
            width: 100%;
            max-width: 960px; /* Ajusta este valor según el ancho deseado para tu tabla y título */
          }

          /* Espacio entre los datos y los bordes de la tabla */
          table td, table th {
            padding: 8px 12px; /* Puedes ajustar los valores según sea necesario */
          }
          /* Estilos para la paginación */
          .pagination {
            margin-top: 20px;
            display: flex;
            justify-content: center;
          }
          .pagination button {
            margin: 0 5px;
            padding: 5px 10px;
            background-color: #a2160f;
            color: white;
            border: none;
            cursor: pointer;
          }
          .pagination button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          .pagination button.active {
            background-color: #a2160f;
          }
        `}</style>
      </div>
    </>
  );
};

export default Clientes;
