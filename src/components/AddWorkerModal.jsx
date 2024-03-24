import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddWorkerModal = ({ isOpen, onClose }) => {
  const [modalOpen, setModalOpen] = useState(isOpen); // Estado interno del modal

  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      contraseña: '',
      confirmarContraseña: ''
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required('El nombre es obligatorio'),
      apellido: Yup.string().required('El apellido es obligatorio'),
      correo: Yup.string().email('Ingrese un correo electrónico válido').required('El correo electrónico es obligatorio'),
      telefono: Yup.string().required('El teléfono es obligatorio'),
      contraseña: Yup.string().required('La contraseña es obligatoria'),
      confirmarContraseña: Yup.string().oneOf([Yup.ref('contraseña'), null], 'Las contraseñas deben coincidir')
    }),
    onSubmit: values => {
      // Aquí puedes manejar el envío de los datos del trabajador
      console.log(values);
      onClose();
    }
  });
  
  // Función para cerrar el modal
  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <Transition show={modalOpen} as={React.Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
        {/* Resto del código del modal */}
      </Dialog>
    </Transition>
  );
};

export default AddWorkerModal;
