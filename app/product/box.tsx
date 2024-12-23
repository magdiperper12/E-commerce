import Link from 'next/link';
import React from 'react';

interface BoxProps {
	title: string;
	price: string;
	description: string;
	category: string;
	image: string;
	ratingRate: number;
	ratingCount: number;
}

const Box: React.FC<BoxProps> = ({
	title,
	price,
	description,
	category,
	image,
	ratingRate,
	ratingCount,
	id,
}) => {
	return (
		<div className='max-w-sm mx-auto transform transition-transform duration-300 hover:shadow-lg'>
			<div className='relative block rounded-tr-3xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300'>
				<span className='absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-gradient-to-r from-rose-600 to-pink-500 px-6 py-4 font-medium uppercase tracking-widest text-white'>
					{category}
				</span>

				{/* Image with Hover Zoom */}
				<div className='overflow-hidden rounded-bl-3xl rounded-tr-3xl'>
					<img
						src={image}
						alt={`Image of ${title}`}
						loading='lazy'
						className='h-72 w-full border border-gray-300 object-cover transition-transform duration-300 hover:scale-110'
					/>
				</div>

				{/* Content */}
				<div className='relative border border-gray-100 bg-white p-6'>
					<p className='text-gray-700'>${price}</p>

					<h3 className='mt-1.5 text-lg font-medium text-gray-900 line-clamp-1'>
						{title}
					</h3>

					<p className='mt-1.5  text-gray-700 line-clamp-3'>{description}</p>
					<div className='flex justify-between px-5 py-1 items-center'>
						<p className='  text-gray-700 line-clamp-3 font-bold'>
							rate :{' '}
							<span className=' italic text-green-700'>{ratingRate}</span>
							💥
						</p>
						<p className='  text-gray-700 line-clamp-3 font-bold'>
							count :{' '}
							<span className=' italic text-green-700'>{ratingCount}</span>
						</p>
					</div>

					<form className='mt-2 flex gap-4'>
						<Link
							href={'#'}
							className='block w-full rounded bg-gray-100 px-4 text-center py-3 text-sm font-medium text-gray-900 transition hover:scale-105'>
							Add to Cart
						</Link>

						<Link
							href={`/product/${id}`}
							className='block w-full rounded bg-gray-900 px-4 py-3 text-center text-sm font-medium text-white transition hover:scale-105'>
							Buy Now
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Box;
