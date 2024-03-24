import React, { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditWorker = ({ isOpen, onClose }) => {
  const [modalOpen, setModalOpen] = useState(false); // Estado interno del modal
  const [confirmModalOpen, setConfirmModalOpen] = useState(false); // Estado interno del modal de confirmación
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      correo: "",
      telefono: "",
      contraseña: "",
      confirmarContraseña: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es obligatorio"),
      apellido: Yup.string().required("El apellido es obligatorio"),
      correo: Yup.string()
        .email("Ingrese un correo electrónico válido")
        .required("El correo electrónico es obligatorio"),
      telefono: Yup.string()
        .matches(/^[0-9]*$/, "El teléfono solo puede contener números")
        .required("El teléfono es obligatorio"),
      contraseña: Yup.string()
        .required("La contraseña es obligatoria")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "La contraseña debe contener al menos 8 caracteres, incluyendo al menos una mayúscula, una minúscula, un número y un carácter especial"
        ),
      confirmarContraseña: Yup.string().oneOf(
        [Yup.ref("contraseña"), null],
        "Las contraseñas deben coincidir"
      ),
    }),
    onSubmit: (values) => {
      // Aquí puedes manejar el envío de los datos del trabajador
      console.log(values);
      localStorage.clear();
      onClose(); // Cerrar el modal después de enviar los datos
      formik.resetForm(); // Limpiar el formulario después de enviar los datos
    },
  });

  useEffect(() => {
    if (isOpen) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
      formik.resetForm(); // Limpiar el formulario cuando se cierre el modal
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    formik.resetForm(); // Limpiar el formulario al cerrar el modal
  };

  const handleConfirm = () => {
    setConfirmModalOpen(true); // Abrir el modal de confirmación
  };

  const handleConfirmModalClose = () => {
    setConfirmModalOpen(false); // Cerrar el modal de confirmación
  };

  const handleConfirmModalConfirm = () => {
    setConfirmModalOpen(false); // Cerrar el modal de confirmación
    formik.handleSubmit(); // Enviar el formulario
  };

  return (
    <>
    <Modal show={isOpen} onClose={handleClose}>
      <Modal.Header>Editar Trabajador</Modal.Header>
      <Modal.Body>
      
          <div>
            <label htmlFor="nombre" className="block">
              Nombre:
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nombre}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {formik.touched.nombre && formik.errors.nombre ? (
              <div className="text-red-500">{formik.errors.nombre}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="apellido" className="block">
              Apellido:
            </label>
            <input
              id="apellido"
              name="apellido"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.apellido}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {formik.touched.apellido && formik.errors.apellido ? (
              <div className="text-red-500">{formik.errors.apellido}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="correo" className="block">
              Correo:
            </label>
            <input
              id="correo"
              name="correo"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.correo}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {formik.touched.correo && formik.errors.correo ? (
              <div className="text-red-500">{formik.errors.correo}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="telefono" className="block">
              Teléfono
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel" // Utilizamos el tipo "tel" para habilitar el teclado numérico en dispositivos móviles
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.telefono}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {formik.touched.telefono && formik.errors.telefono ? (
              <div className="text-red-500">{formik.errors.telefono}</div>
            ) : null}
          </div>
          <div>
          <label htmlFor="contraseña" className="block">
            Contraseña:
          </label>
          <input
            id="contraseña"
            name="contraseña"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contraseña}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {formik.touched.contraseña && formik.errors.contraseña ? (
            <div className="text-red-500">{formik.errors.contraseña}</div>
          ) : null}
        </div>
          <div>
            <label htmlFor="confirmarContraseña" className="block">
              Confirmar Contraseña:
            </label>
            <input
              id="confirmarContraseña"
              name="confirmarContraseña"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmarContraseña}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {formik.touched.confirmarContraseña &&
            formik.errors.confirmarContraseña ? (
              <div className="text-red-500">
                {formik.errors.confirmarContraseña}
              </div>
            ) : null}
          </div>
        
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "flex-end" }}>
          <Button color="gray" onClick={handleClose}>
            Cancelar
          </Button>
          <Button style={{ backgroundColor: "#a2160f" }} onClick={handleConfirm}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de confirmación */}
      <Modal show={confirmModalOpen} onClose={handleConfirmModalClose}>
        <Modal.Header>Confirmar Guardar Cambios</Modal.Header>
        <Modal.Body>
          ¿Estás segur@ de que deseas guardar los cambios?
        </Modal.Body>
        <Modal.Footer style={{ justifyContent: "flex-end" }}>
          <Button color="gray" onClick={handleConfirmModalClose}>
            Cancelar
          </Button>
          <Button style={{ backgroundColor: "#a2160f" }} onClick={handleConfirmModalConfirm}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
  </>
);
};

export default EditWorker