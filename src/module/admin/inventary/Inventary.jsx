import React, { useState } from 'react';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import InventoryItem from '../inventary/components/InventoryItem';
import InventoryOffcanvas from '../inventary/components/InventoryOffcanvas';
import AddPreparationModal from '../inventary/components/AddPreparationModal';
import Imagen from '../../../assets/img/costillas.jpg'

function Inventary() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [itemData, setItemData] = useState({
        image: Imagen,
        name: 'Costillas',
        quantity: 100,
        cost: 130,
    });
    const [preparationFormValues, setPreparationFormValues] = useState({ preparation: '', cost: '' });

    const validationSchema = Yup.object().shape({
        preparation: Yup.string().required('Campo Obligatorio'),
    });

    const handleSaveClick = (values) => {
        Swal.fire({
            title: "¿Deseas agregar la preparacíón?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Guardar",
            denyButtonText: "No guardar"
        }).then((result) => {
            if (result.isConfirmed) {
                // Perform save operation here
                Swal.fire("Guardado Correctamente!", "", "success");
                setShowModal(false);
                setShowOffcanvas(true);
                resetForm();
            } else if (result.isDenied) {
                Swal.fire("Cambios no guardados", "", "info");
                setShowOffcanvas(true);
                resetForm();
            }
        });
        setPreparationFormValues(values);
    };

    const handleModalToggle = () => {
        setShowModal(!showModal);
        setShowOffcanvas(false);
    };

    const handleCloseModal = (resetForm) => {
        if (preparationFormValues.preparation.trim() !== '') {
            Swal.fire({
                title: "Desea agregar la preparación?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Guardar y Cerrar",
                denyButtonText: "Cerrar sin guardar"
            }).then((result) => {
                if (result.isConfirmed) {
                    setShowOffcanvas(true);
                    handleSaveClick(preparationFormValues);
                    resetForm();
                } else if (result.isDenied) {
                    Swal.fire("No se guardo", "", "info");
                    setShowModal(false);
                    setShowOffcanvas(true);
                    resetForm();
                }
            });
        } else {
            setShowModal(false);
            setShowOffcanvas(true);
        }
    };

    return (
        <div className="">
            <div className='grid grid-flex justify-center '>
                <h2 className='text-4xl font-sans font-semibold '>Inventario</h2>
            </div>
            <div className='effect-shadow-div p-2'>
                <InventoryItem
                    image={itemData.image}
                    name={itemData.name}
                    quantity={itemData.quantity}
                    cost={itemData.cost}
                    showOffcanvas={showOffcanvas}
                    setShowOffcanvas={setShowOffcanvas}
                    setItemData={setItemData}
                />
                <InventoryOffcanvas
                    showOffcanvas={showOffcanvas}
                    setShowOffcanvas={setShowOffcanvas}
                    handleModalToggle={handleModalToggle}
                    itemData={itemData}
                />
                <AddPreparationModal
                    showModal={showModal}
                    handleCloseModal={(resetForm) => handleCloseModal(resetForm)}
                    handleSaveClick={handleSaveClick}
                    validationSchema={validationSchema}
                    preparationFormValues={preparationFormValues}
                    setPreparationFormValues={setPreparationFormValues}
                />

            </div>
        </div>
    );
}

export default Inventary