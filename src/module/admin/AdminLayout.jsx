import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import Logo from "../../assets/img/logo.png"

const AdminLayout = () => {
	// Diseñar el layout de admin
	return (
		<>

			<div className="flex">
				<aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-2 transition-transform bg-red dark:bg-gray-800">
					<div className="h-full px-3 overflow-y-auto bg-red dark:bg-gray-800">
						<div className="flex items-center">
							<img width="135" height="135" src={Logo} alt="Logo de la carniceria" />
						</div>
						<ul className="space-y-2 font-medium">
							<li>
								<Link to="/home" className=" flex nav-a items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hobver:text-red dark:hover:bg-gray-700 group">
									<i className="fa-solid fa-house mr-2"></i>
									<span className="flex-1 ms-3 whitespace-nowrap">Inicio</span>
								</Link>
							</li>
							<li>
								<Link to="/inventary" className=" flex nav-a items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hobver:text-red dark:hover:bg-gray-700 group">
									<i className="fa-solid fa-grip mr-2"></i>
									<span className="flex-1 ms-3 whitespace-nowrap">Inventario </span>
								</Link>
							</li>
							<li>
								<Link to="/orders" className=" flex nav-a items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hobver:text-red dark:hover:bg-gray-700 group">
									<i className="fa-solid fa-calendar-days mr-2"></i>
									<span className="flex-1 ms-3 whitespace-nowrap">Pedidos</span>
								</Link>
							</li>
							<li>
								<Link to="/clients" className=" flex nav-a items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hobver:text-red dark:hover:bg-gray-700 group">
									<i className="fa-solid fa-user mr-2"></i>
									<span className="flex-1 ms-3 whitespace-nowrap">   Clientes</span>
								</Link>
							</li>
							<li>
								<Link to="/workers" className=" flex nav-a items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 hobver:text-red dark:hover:bg-gray-700 group">
									<i className="fa-solid fa-users mr-2"></i>
									<span className="flex-1 ms-3 whitespace-nowrap">   Trabajadores</span>
								</Link>
							</li>
						</ul>
					</div>
				</aside>
				<main className="ml-64 p-5 ">
					<section>
						<Outlet />
					</section>
				</main>
			</div>
		</>
	);
};

export default AdminLayout;

