import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaRegEdit } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";
import AddWorkedModal from "../components/AddWorkerModal";
import EditWorker from "./EditWorker";

const Trabajadores = () => {
  const [trabajadores, setTrabajadores] = useState([
    // Datos de ejemplo
    {
      id: 1,
      usuario: "Usuario1",
      nombre: "Anna",
      apellido: "Garcia",
      telefono: "555-123-4567",
      direccion: "Avenida Independencia",
      estatus: "Activo",
    },
    // Agrega más clientes según sea necesario
  ]);

  //Abrir modal de avtivo o ncativo
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Estados para el modal de regstro
  const [registerModal, setRegisterModal] = useState(false);
  // Estados para el modal de edición
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  // Estados para el modal de eliminación
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [currentTrabajador, setCurrentTrabajador] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [trabajadoresPerPage] = useState(5); // Número de clientes por página

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleRegisterModal = () => {
    console.log("Sigo funcinando");
    setRegisterModal(!registerModal);
    console.log(registerModal);
  };

  const changeStatus = (trabajador) => {
    setCurrentTrabajador(trabajador);
    toggleModal();
  };

  const confirmStatusChange = () => {
    setTrabajadores(
      trabajadores.map((trabajador) => {
        if (trabajador.id === currentTrabajador.id) {
          return {
            ...trabajador,
            estatus: trabajador.estatus === "Activo" ? "Inactivo" : "Activo",
          };
        }
        return trabajador;
      })
    );
    toggleModal();
  };

  const confirmDeleteWorker = () => {
    deleteTrabajador(currentTrabajador);
    toggleDeleteModal();
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const editTrabajador = (trabajador) => {
    setCurrentTrabajador(trabajador);
    toggleEditModal();
  };

  const deleteTrabajador = (trabajador) => {
    setCurrentTrabajador(trabajador);
    toggleDeleteModal();
  };

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const toggleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  return (
    <>
      <div className="centrado-container">
        {/* Título */}
        <h1 className="text-4xl font-bold text-gray-900 my-8 text-center">
          Trabajadores
        </h1>

        {/* Contenedor para el botón y la tabla */}
        <div className="boton-y-tabla-container">
          {/* Tabla */}
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            {/* Resto del código de la tabla */}
          </div>

          {/* Botón para agregar trabajador onClick={toggleModal} */}
          <button className="agregar-btn" onClick={() => toggleRegisterModal()}>
            Agregar trabajador
          </button>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg espacio-entre-boton-y-tabla">
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
                <th scope="col" className="py-3 px-6">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {trabajadores.map((trabajador) => (
                <tr key={trabajador.id}>
                  <td className="py-4 px-6">{trabajador.usuario}</td>
                  <td className="py-4 px-6">{trabajador.nombre}</td>
                  <td className="py-4 px-6">{trabajador.apellido}</td>
                  <td className="py-4 px-6">{trabajador.telefono}</td>
                  <td className="py-4 px-6">{trabajador.direccion}</td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => changeStatus(trabajador)}
                      className={`status-btn ${
                        trabajador.estatus === "Activo" ? "active" : "inactive"
                      }`}
                    >
                      {trabajador.estatus}
                    </button>
                  </td>
                  <td className="py-4 px-6">
                    {/* Botones de editar y borrar */}
                    <button
                      onClick={() => editTrabajador(trabajador)}
                      className="rounded-full bg-blue-500 p-2 mr-2"
                    >
                      <FaRegEdit className="h-5 w-5 text-white" />
                    </button>
                    <button
                      onClick={() => deleteTrabajador(trabajador)}
                      className="rounded-full bg-red-500 p-2"
                    >
                      <BsTrashFill className="h-5 w-5 text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        <Transition show={isModalOpen} as={React.Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={toggleModal}
          >
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

              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
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
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Confirmación
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      ¿Estás seguro de que quieres cambiar el estado de este
                      trabajador?
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
        {/* Modal de registro */}
        <Transition show={isDeleteModalOpen} as={React.Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={toggleDeleteModal}
          >
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

              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
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
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Confirmación
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      ¿Estás seguro de que quieres eliminar a este trabajador?
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={confirmDeleteWorker}
                    >
                      {/*onClick={confirmDeleteWorker}*/}
                      Aceptar
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 ml-4"
                      onClick={toggleDeleteModal}
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
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          {Array.from(
            { length: Math.ceil(trabajadores.length / trabajadoresPerPage) },
            (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={currentPage === i + 1 ? "active" : ""}
              >
                {i + 1}
              </button>
            )
          )}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage ===
              Math.ceil(trabajadores.length / trabajadoresPerPage)
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
        /* Estilos para el cuerpo de la tabla */
        tbody tr td {
          color: black; /* Agrega esta regla para cambiar el color del texto en el cuerpo de la tabla a negro */
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
        table td,
        table th {
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
        .agregar-btn {
          background-color: #ffffff; /* Fondo blanco */
          color: #29af5f; /* Color del texto */
          border: 2px solid #29af5f; /* Borde de color #29AF5F */
          padding: 8px 16px; /* Reducción del padding */
          border-radius: 5px; /* Borde redondeado */
          cursor: pointer; /* Cursor de tipo puntero al pasar el ratón */
          font-size: 14px; /* Tamaño de la fuente */
        }

        .agregar-btn:hover {
          background-color: #29af5f; /* Cambia el color de fondo al pasar el ratón */
          color: #ffffff; /* Cambia el color del texto al pasar el ratón */
        }
        .espacio-entre-boton-y-tabla {
          margin-top: 20px; /* Ajusta el valor según sea necesario */
        }
        .boton-y-tabla-container {
          display: flex;
          justify-content: space-between; /* Para distribuir los elementos a lo largo del contenedor */
          align-items: center; /* Para alinear verticalmente los elementos */
        }
      `}</style>
      <AddWorkedModal
        isOpen={registerModal}
        onClose={() => setRegisterModal(!registerModal)}
      />
      <EditWorker
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(!isEditModalOpen)}
      />
    </>
  );
};

export default Trabajadores;
