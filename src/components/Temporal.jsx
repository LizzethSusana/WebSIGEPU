import React, { useState, Fragment } from "react";
import { FiPlus } from "react-icons/fi";
import { Dialog, Transition } from "@headlessui/react";

const ordersData = [
  {
    id: "1",
    repartidor: "Juan Lopez",
    fechaSolicitud: "23/03/2024",
    fechaEntrega: "25/03/2024",
    estado: "Pendiente",
    clienteNombre: "Anna Garcia",
    clienteTelefono: "555-123-4567",
    clienteDireccion: "Avenida Independencia, Ciudad, País",
    total: "1340",
    productos: [
      {
        corte: "Filete",
        kilos: 13,
        preparacion:
          "Corte estilo filete.",
        total: 130,
      },
      {
        corte: "Costillas",
        kilos: 13,
        preparacion:
          "Perfecto para asar lentamente o cocinar a fuego lento.",
        total: 130,
      },
      // ... más productos
    ],
  },
  {
    id: "1",
    repartidor: "Juan Lopez",
    fechaSolicitud: "23/03/2024",
    fechaEntrega: "25/03/2024",
    estado: "Pendiente",
    clienteNombre: "Anna Garcia",
    clienteTelefono: "555-123-4567",
    clienteDireccion: "Avenida Independencia, Ciudad, País",
    total: "1340",
    productos: [
      {
        corte: "Filete",
        kilos: 13,
        preparacion:
          "Tierno y jugoso, ideal para asar a la parrilla o cocinar a la sartén.",
        total: 130,
      },
      {
        corte: "Costillas",
        kilos: 13,
        preparacion:
          "Sabroso y con un buen marmoleado, perfecto para asar lentamente o cocinar a fuego lento.",
        total: 130,
      },
      // ... más productos
    ],
  },
  // ... más pedidos
];

function Temporal() {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5; // Número de pedidos por página

  const openDetailsModal = (order) => {
    setSelectedOrder(order);
    setIsDetailsModalOpen(true);
  };

  const closeDetailsModal = () => {
    setIsDetailsModalOpen(false);
  };

  // Calcular índices de los pedidos para la página actual
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = ordersData.slice(indexOfFirstOrder, indexOfLastOrder);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="centrado-container">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 my-8 text-left">
          Pedidos
        </h1>

        {/* Tabla */}
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-white uppercase bg-red-600">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Repartidor
                </th>
                <th scope="col" className="py-3 px-6">
                  Fecha de Solicitud
                </th>
                <th scope="col" className="py-3 px-6">
                  Fecha de Entrega
                </th>
                <th scope="col" className="py-3 px-6">
                  Estatus
                </th>
                <th scope="col" className="py-3 px-6">
                  Detalles
                </th>
              </tr>
            </thead>
            <tbody>
              {ordersData.map((order) => (
                <tr
                  className="bg-white border-b hover:bg-gray-100"
                  key={order.id}
                >
                  <td className="py-4 px-6">{order.repartidor}</td>
                  <td className="py-4 px-6">{order.fechaSolicitud}</td>
                  <td className="py-4 px-6">{order.fechaEntrega}</td>
                  <td className="py-4 px-6">{order.estado}</td>
                  <td className="py-4 px-6 flex items-center justify-center">
                    <button
                      className="font-medium text-white bg-red-600 hover:bg-red-800 rounded px-2 py-1 hover:underline"
                      style={{ backgroundColor: "#a2160f" }}
                      onClick={() => openDetailsModal(order)}
                    >
                      <FiPlus />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        <Transition show={isDetailsModalOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeDetailsModal}
          >
           <div className="min-h-screen px-4 text-center">
  <Transition.Child
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
  </Transition.Child>

  {/* Centrar verticalmente el contenido del modal */}
  <span
    className="hidden sm:inline-block sm:align-middle sm:h-screen"
    aria-hidden="true"
  >
    &#8203;
  </span>

  <Transition.Child
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    enterTo="opacity-100 translate-y-0 sm:scale-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  >
    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
            {/* Contenido del modal con detalles del pedido */}
            <div className="mt-2">
              {/* Título del modal */}
              <h2 className="font-bold text-xl text-center mb-4">Información del Pedido</h2>

              {/* Contenido en filas verticales */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Pedido */}
                <div>
                  <h3 className="font-bold text-lg mb-2">Pedido</h3>
                  <div className="flex flex-col space-y-1">
                    <p className="font-bold">Fecha de entrega:</p>
                    <span>{selectedOrder?.fechaEntrega}</span>
                    <p className="font-bold">Repartidor:</p>
                    <span>{selectedOrder?.repartidor}</span>
                    <p className="font-bold">Estado:</p>
                    <span>{selectedOrder?.estado}</span>
                  </div>
                </div>

                {/* Cliente */}
                <div>
                  <h3 className="font-bold text-lg mb-2">Cliente</h3>
                  <div className="flex flex-col space-y-1">
                    <p className="font-bold">Nombre:</p>
                    <span>{selectedOrder?.clienteNombre}</span>
                    <p className="font-bold">Teléfono:</p>
                    <span>{selectedOrder?.clienteTelefono}</span>
                    <p className="font-bold">Dirección:</p>
                    <span>{selectedOrder?.clienteDireccion}</span>
                  </div>
                </div>

                {/* Monto a pagar */}
                <div className="flex flex-col items-center">
                  <h3 className="font-bold text-lg mb-2">Monto a pagar</h3>
                  <div>
                    <p className=" text-2xl">${selectedOrder?.total}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6"></div>
              {/* Tabla con detalles de los productos del pedido */}
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-900 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        Corte
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        Kilo(s)
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        Tipo de preparación
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {selectedOrder?.productos?.map((producto, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {producto.corte}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {producto.kilos}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {producto.preparacion}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ${producto.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Botón de cierre */}
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                  onClick={closeDetailsModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition.Child>
</div>


          </Dialog>
        </Transition>
        {/*controles de paginación */}
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          {Array.from({
            length: Math.ceil(ordersData.length / ordersPerPage),
          }).map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(ordersData.length / ordersPerPage)
            }
          >
            Siguiente
          </button>
        </div>
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

        /* Estilos para el botón de detalles */
        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
        }
        .centrado-container {
          margin: auto;
          width: 100%;
          max-width: 960px; /* Ajusta este valor según el ancho deseado para tu tabla y título */
        }
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
      `}</style>
    </>
  );
}

export default Temporal;
