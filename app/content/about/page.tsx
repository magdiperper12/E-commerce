// pages/about.js

import Head from 'next/head';

export default function About() {
	return (
		<>
			<div className='min-h-screen bg-blue-50 pt-20'>
				<header className=''>
					<div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
						<h1 className='text-3xl font-bold text-blue-900'>About Us</h1>
					</div>
				</header>

				<main>
					<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							{/* Left Column */}
							<div>
								<h2 className='text-2xl font-semibold text-blue-800'>
									Who We Are
								</h2>
								<p className='mt-4 text-blue-900 leading-relaxed'>
									ShopEase is your one-stop destination for a seamless online
									shopping experience. With thousands of products across various
									categories, we aim to bring convenience and quality to your
									doorstep.
								</p>

								<h2 className='mt-8 text-2xl font-semibold text-blue-800'>
									Our Mission
								</h2>
								<p className='mt-4 text-blue-900 leading-relaxed'>
									Our mission is to revolutionize the shopping experience by
									providing unparalleled customer service, fast shipping, and a
									wide range of high-quality products at competitive prices.
								</p>
							</div>

							{/* Right Column */}
							<div className='flex items-center bg-transparent bg-white justify-center'>
								<img
									src='https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
									alt='About Us Image'
									className='rounded-lg shadow-lg bg-white w-full h-auto max-w-md max-h-80 object-contain'
								/>
							</div>
						</div>

						{/* Values Section */}
						<div className='mt-16'>
							<h2 className='text-2xl font-semibold text-blue-800 text-center'>
								Our Core Values
							</h2>

							<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
								<div className='bg-white shadow-md rounded-lg p-6 text-center'>
									<h3 className='text-xl font-bold text-blue-800'>
										Customer Focus
									</h3>
									<p className='mt-2 text-blue-900'>
										Everything we do is centered around providing the best
										experience for our customers.
									</p>
								</div>

								<div className='bg-white shadow-md rounded-lg p-6 text-center'>
									<h3 className='text-xl font-bold text-blue-800'>
										Innovation
									</h3>
									<p className='mt-2 text-blue-900'>
										We embrace cutting-edge technologies to improve our platform
										and services.
									</p>
								</div>

								<div className='bg-white shadow-md rounded-lg p-6 text-center'>
									<h3 className='text-xl font-bold text-blue-800'>
										Sustainability
									</h3>
									<p className='mt-2 text-blue-900'>
										We are committed to environmentally-friendly practices in
										all aspects of our business.
									</p>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}
