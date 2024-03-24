import React, { useState,useEffect } from 'react';
import { Button, Modal } from 'flowbite-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddWorkerModal = ({ isOpen, onClose }) => {
  
  const [modalOpen, setModalOpen] = useState(false); // Estado interno del modal
  useEffect(()=>{
    if(isOpen){
      setModalOpen(true);
    }else{
      setModalOpen(false);
    }
  },[isOpen]);
  console.log("Recibo un ",isOpen);

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

  const AcceptModal = () => {
    setModalOpen(true);
    onClose();
  }

  return (
    <>
      <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => AcceptModal()}>I accept</Button>
          <Button color="gray" onClick={() => closeModal()}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddWorkerModal;
