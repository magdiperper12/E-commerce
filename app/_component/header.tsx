'use client';

import React, { useEffect, useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { FaCartShopping } from 'react-icons/fa6';
import { SiHoppscotch } from 'react-icons/si';
import { FaShoppingCart } from 'react-icons/fa';

import Link from 'next/link';

function Header() {
	const [login, setLogin] = useState(false);

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

							<div className='flex justify-center items-center gap-5'>
								<div className='text-blue-600 flex gap-1 justify-center items-center'>
									<div>
										( <span className='text-blue-700'>0</span> )
									</div>{' '}
									<FaShoppingCart />
								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
		)
	);
}

export default Header;
