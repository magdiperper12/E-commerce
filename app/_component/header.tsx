'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { FaCartShopping } from 'react-icons/fa6';
import { SiHoppscotch } from 'react-icons/si';
import { FaShoppingCart } from 'react-icons/fa';

import Link from 'next/link';

function Header() {
	const [login, setLogin] = useState(false);
	const { user } = useUser();
	useEffect(() => {
		const url = window.location.href.toString();
		setLogin(url.includes('sign-in') || url.includes('sign-up'));
	}, []);

	return (
		!login && (
			<div>
				<header className='bg-white fixed w-full z-20 p-3  bg-opacity-95'>
					<div className='mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8'>
						<Link
							className='block text-blue-600'
							href='/#'>
							<FaCartShopping className='text-4xl mx-3' />
						</Link>

						<div className='flex flex-1 items-center justify-end md:justify-between'>
							<nav
								aria-label='Global'
								className='hidden md:block'>
								<ul className='flex items-center gap-6 text-sm'>
									<li>
										<Link
											className='text-blue-900 transition hover:text-blue-900/75'
											href='/content/about'>
											{' '}
											About{' '}
										</Link>
									</li>

									<li>
										<Link
											className='text-blue-900 transition hover:text-blue-900/75'
											href='/content/categouris'>
											categouris
										</Link>
									</li>

									<li>
										<Link
											className='text-blue-900 transition hover:text-blue-900/75'
											href='/content/servces'>
											Services{' '}
										</Link>
									</li>

									<li>
										<Link
											className='text-blue-900 transition hover:text-blue-900/75'
											href='/content/contact'>
											Contact
										</Link>
									</li>
								</ul>
							</nav>

							{!user ? (
								<div className='flex items-center gap-4'>
									<div className='sm:flex sm:gap-4'>
										<Link
											className='block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700'
											href='/sign-up'>
											Login
										</Link>

										<Link
											className='hidden rounded-md bg-blue-100 px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:text-blue-600/75 sm:block'
											href='/sign-up'>
											Register
										</Link>
									</div>

									<button className='block rounded bg-blue-100 p-2.5 text-blue-600 transition hover:text-blue-600/75 md:hidden'>
										<span className='sr-only'>Toggle menu</span>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='size-5'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth='2'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M4 6h16M4 12h16M4 18h16'
											/>
										</svg>
									</button>
								</div>
							) : (
								<div className='flex justify-center items-center gap-5'>
									<div className='text-blue-600 flex gap-1 justify-center items-center'>
										<div>
											( <span className='text-blue-700'>0</span> )
										</div>{' '}
										<FaShoppingCart />
									</div>
									<UserButton />
								</div>
							)}
						</div>
					</div>
				</header>
			</div>
		)
	);
}

export default Header;
