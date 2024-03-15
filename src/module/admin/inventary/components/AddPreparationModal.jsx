import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const AddPreparationModal = ({
  showModal,
  handleCloseModal,
  handleSaveClick,
  validationSchema,
  preparationFormValues,
  setPreparationFormValues,
}) => (
  <>
    {showModal && (
      <div className="fixed inset-0 z-40 bg-black bg-opacity-25">
        <div
          id="authentication-modal"
          className="absolute top-0 right-0 left-0 z-50 flex justify-start items-center h-screen"
        >
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="p-4 md:p-5 ">
              <div className="grid justify-end">
                <button
                  onClick={handleCloseModal}
                  type="button"
                  className=" text-sm font-medium text-end text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              <p className="font-bold text-xl font-sans text-center text-red-800">
                Agregar Tipo de Preparación
              </p>
              <Formik
                initialValues={preparationFormValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  handleSaveClick(values);
                  resetForm();
                }}
              >
                {({ errors, touched, resetForm }) => (
                  <Form>
                    <div className="col-span-12 flex flex-row mt-3 mb-8 gap-4">
                      <div className="">
                        <label
                          htmlFor="preparation"
                          className="block mb-1 font-sans text-ms font-normal text-gray-900 dark:text-white"
                        >
                          Preparación
                        </label>
                        <Field
                          type="text"
                          name="preparation"
                          className="effect-shadow-input w-full"
                        />
                        <div className="grid justify-end">
                          <ErrorMessage
                            name="preparation"
                            component="div"
                            className="text-sm text-red-500 font-sans"
                          />
                        </div>
                      </div>
                      <div className="">
                        <label
                          htmlFor="cost"
                          className="block mb-1 font-sans text-ms font-normal text-gray-900 dark:text-white"
                        >
                          Costo
                        </label>
                        <Field
                          type="number"
                          name="cost"
                          className="effect-shadow-input w-full"
                          min="0"
                        />
                        <ErrorMessage
                          name="cost"
                          component="div"
                          className="text-sm text-red-500 font-sans"
                        />
                      </div>
                    </div>
                    <div className="grid justify-end">
                      <button
                        type="submit"
                        className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 font-sans mb-4"
                      >
                        Guardar
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);

export default AddPreparationModal;