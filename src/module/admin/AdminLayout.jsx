import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { BiBuoy } from 'react-icons/bi';
import '../../module/auth/img.css'
import ImageLogo from '../../assets/img/logo.png'

const AdminLayout = () => {
	// Diseñar el layout de admin
	return (
		<>

			<div className="flex h-screen ">
				<aside className='h-full'>
					<Sidebar className='h-full '  aria-label="Sidebar with content separator example">
						<img src={ImageLogo} alt="" className='img-menu mx-auto' />
						<Sidebar.Items  className='asi'>

							<Sidebar.ItemGroup >
								<Sidebar.Item to="#" icon={HiChartPie}>
									Inicio
								</Sidebar.Item>
								<Sidebar.Item to="#" icon={HiViewBoards}>
									Inventario
								</Sidebar.Item>
								<Sidebar.Item to="#" icon={HiInbox}>
									Pedidos
								</Sidebar.Item>
								<Sidebar.Item to="#" icon={HiUser}>
									Clientes
								</Sidebar.Item>
								<Sidebar.Item to="#" icon={HiShoppingBag}>
									Trabajadores
								</Sidebar.Item>								
							</Sidebar.ItemGroup>

							<Sidebar.ItemGroup >
								<Sidebar.Item to="#" icon={HiUser}>
									Usuario
								</Sidebar.Item>
							</Sidebar.ItemGroup>

						</Sidebar.Items>
					</Sidebar>
				</aside>
				<main className="w-full">
					<section className="px-4 pt-2 pb-8">
						<Outlet />
					</section>
				</main>
			</div>
		</>
	);
};

export default AdminLayout;

