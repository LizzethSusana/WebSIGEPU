import React from 'react'

const InventoryOffcanvas = ({ showOffcanvas, setShowOffcanvas, handleModalToggle, itemData }) => (
    <>
        {showOffcanvas && <div className="fixed inset-0 z-40 bg-black bg-opacity-25"></div>}
        <div
            id="drawer-right-example"
            className={`fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800 transition-transform duration-300 ${showOffcanvas ? 'translate-x-0' : 'translate-x-full'
                }`}
            tabIndex="-1"
            aria-labelledby="drawer-right-label"
            role="dialog"
            aria-modal="true"
        >
            <div className="mb-4 ">
                <div className="grid justify-end">
                    <button
                        type="button"
                        onClick={() => setShowOffcanvas(false)}
                        aria-controls="drawer-right-example"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <i className="fa-solid fa-x"></i>
                        <span className="sr-only">Close menu</span>
                    </button>
                </div>
                <div className="flex flex-col items-center mb-2">
                    <img src={itemData.image} className="img-offcanvas mb-1" alt="" width="" />
                    <p className="font-bold text-4xl font-sans">{itemData.name}</p>
                </div>
                <div className="col-span-10 gap-24 flex items-center mb-3">
                    <div className="col-span-5 ">
                        <p className="font-light text-lg font-sans">Kilo(s)</p>
                        <p className="font-semibold text-3xl font-sans">{itemData.cost}</p>
                    </div>
                    <div className="col-span-5">
                        <p className="font-light text-lg font-sans">Costo</p>
                        <p className="font-semibold text-3xl font-sans">${itemData.quantity}</p>
                    </div>
                </div>
                <button type="button" className="w-full text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 font-sans mb-4">
                        Cambiar
                    </button>
                    <div className='tablePreparaciondes mb-6'>
                        <div className='bg-red p-1 pl-2 mb-3 rounded-md'>
                            <p className="text-lg text-normal font-sans text-white">Tipo de preparacion</p>
                        </div>
                        <div className="row-span-10 flex flex-row gap-4 items-center">
                            <div className="row-span-4">
                                <p className="text-normal font-sans">Tipo de preparacion</p>
                            </div>
                            <div className="row-span-4">
                                <p className="font-normal  font-sans">$20</p>
                            </div>
                            <div className="row-span-2">
                                <button  type="button"  className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 text-sm rounded-md text-lg p-1.5 px-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 font-sans mr-1">
                                    <i className="fa-solid fa-pen"></i>
                                </button>
                                <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 text-sm rounded-md text-lg p-1.5 px-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 font-sans ">
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                <button
                    onClick={handleModalToggle}
                    className="w-full text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 font-sans mb-4">
                    Agregar
                </button>
            </div>
        </div>
    </>
);

export default InventoryOffcanvas