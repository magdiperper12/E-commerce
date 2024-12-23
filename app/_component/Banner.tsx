import React from 'react';

function Banner() {
	return (
		<div>
			<section className='dark:bg-gray-900 bg-blue-50 w-full dark:text-white text-emerald-950'>
				<div className='w-full px-4 py-32 lg:flex lg:h-screen lg:items-center'>
					<div className='mx-auto w-full  text-center'>
						<h1 className='bg-gradient-to-r from-green-800 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl'>
							Discover the Best Deals Online – Shop
							<span className='sm:block'> Your Favorite Brands Now! </span>
						</h1>

						<p className='mx-auto mt-4 max-w-xl sm:text-xl/relaxed bg-gradient-to-r from-green-900 via-blue-600 to-purple-950 bg-clip-text text-lg text-transparent'>
							Exclusive discounts, fresh arrivals, and unbeatable prices – all
							in one place!
						</p>

						<div className='mt-8 flex flex-wrap justify-center gap-4'>
							<a
								className='block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:text-blue-700 hover:bg-transparent  focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'
								href='#'>
								Get Started
							</a>

							<a
								className='block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium dark:text-white  text-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto'
								href='#'>
								Learn More
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Banner;
