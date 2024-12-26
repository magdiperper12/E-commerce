'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Box from '../box';
import LoadCard from '../loadCard';
import BreadCramps from '@/app/_component/breadCramps';
import { FaShoppingCart } from 'react-icons/fa';
import { useUser } from '@clerk/nextjs';

interface RatingType {
	rate: number;
	count: number;
}

interface BoxType {
	rating: RatingType;
	id: any;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
}

const page: React.FC = () => {
	const params = useParams();
	const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
	const [item, setItem] = useState<BoxType | null>(null);
	const [similarItems, setSimilarItems] = useState<BoxType[]>([]);

	const { user } = useUser();
	const router = useRouter();

	const handleLoginRedirect = () => {
		if (!user) {
			router.push('/sign-in');
		} else {
			// Placeholder for additional functionality
		}
	};

	useEffect(() => {
		if (id) {
			fetch(`https://fakestoreapi.com/products/${id}`)
				.then((response) => {
					if (!response.ok) throw new Error('Failed to fetch item');
					return response.json();
				})
				.then((data) => setItem(data))
				.catch((error) => console.error('Error fetching item:', error));
		}
	}, [id]);

	useEffect(() => {
		if (item) {
			fetch('https://fakestoreapi.com/products')
				.then((response) => {
					if (!response.ok) throw new Error('Failed to fetch similar items');
					return response.json();
				})
				.then((data) => {
					const filteredItems = data.filter(
						(product: BoxType) =>
							product.category === item.category && product.id !== item.id
					);
					setSimilarItems(filteredItems);
				})
				.catch((error) =>
					console.error('Error fetching similar items:', error)
				);
		}
	}, [item]);

	if (!id) {
		return (
			<div className='text-center text-blue-600'>
				No ID provided in the route.
			</div>
		);
	}

	if (!item) {
		return (
			<div className='grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 gap-y-14 px-8'>
				{Array(4)
					.fill(null)
					.map((_, index) => (
						<div key={index}>
							<LoadCard />
						</div>
					))}
			</div>
		);
	}

	return (
		<section className='max-w-screen-lg m-auto py-28 container space-y-10'>
			<BreadCramps
				title='home'
				subtitle='product item'
				id={item.id}
			/>
			<div className='relative gap-10 rounded-tr-3xl shadow-md hover:shadow-xl transition-shadow overflow-hidden rounded-lg grid grid-cols-2 m-auto duration-300'>
				<div className='p-14'>
					<div className='overflow-hidden rounded-bl-3xl rounded-tr-3xl'>
						<img
							src={item.image}
							alt={`Image of ${item.title}`}
							loading='lazy'
							className='h-72 w-full object-cover transition-transform duration-300 hover:scale-110'
						/>
					</div>
				</div>
				<div className='relative bg-white p-14 text-start'>
					<p className='text-blue-700'>${item.price}</p>
					<h3 className='mt-1.5 text-lg font-medium text-gray-900 line-clamp-1'>
						{item.title}
					</h3>
					<span className='absolute -right-px -top-px rounded-bl-3xl z-10 rounded-tr-3xl bg-gradient-to-r from-blue-600 to-gray-500 px-6 py-4 font-medium uppercase tracking-widest text-white'>
						{item.category}
					</span>
					<p className='mt-1.5 text-gray-700 line-clamp-3'>
						{item.description}
					</p>
					<div className='flex flex-col py-1 items-start'>
						<p className='text-blue-700 font-bold'>
							Rate:{' '}
							<span className='italic text-green-700'>{item.rating.rate}</span>{' '}
							💥
						</p>
						<p className='text-blue-700 font-bold'>
							Count:{' '}
							<span className='italic text-green-700'>{item.rating.count}</span>
						</p>
					</div>
					<form className='mt-2'>
						<button
							type='button'
							onClick={() => handleLoginRedirect()}
							className='w-1/2 flex gap-3 justify-center items-center rounded bg-cyan-700 px-4 text-center py-3 text-sm font-medium text-white transition hover:scale-105'>
							<FaShoppingCart />
							Add to Cart
						</button>
					</form>
				</div>
			</div>
			{similarItems.length > 0 ? (
				<div>
					<h1 className='pb-3 pt-20 text-blue-500 text-4xl font-bold'>
						Similar Products
					</h1>
					<div className='grid pt-10 grid-cols-3 gap-4'>
						{similarItems.map((simItem) => (
							<Box
								key={simItem.id}
								id={simItem.id}
								title={simItem.title}
								price={simItem.price.toString()}
								description={simItem.description}
								category={simItem.category}
								image={simItem.image}
								ratingRate={simItem.rating.rate}
								ratingCount={simItem.rating.count}
							/>
						))}
					</div>
				</div>
			) : (
				<p className='text-blue-600'>No similar items found.</p>
			)}
		</section>
	);
};

export default page;
