// BoxContainer.tsx
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadCard from '@/app/product/loadCard';
import Box from '@/app/product/box';
import Link from 'next/link';

interface RatingType {
	rate: number;
	count: number;
}

interface BoxType {
	rating: RatingType;
	id: string;
	title: string;
	price: string; // Ensure price is a string
	description: string;
	category: string;
	image: string;
}

const BoxContainer: React.FC = () => {
	const [products, setProducts] = useState<BoxType[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get('https://fakestoreapi.com/products');
				setProducts(response.data);
			} catch {
				setError('No products found.');
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	if (error) {
		return <div className='bg-red-500 text-white p-10'>{error}</div>;
	}

	if (loading) {
		return (
			<div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 gap-y-14 px-8'>
				{Array(4)
					.fill(null)
					.map((_, index) => (
						<LoadCard key={index} />
					))}
			</div>
		);
	}

	// Filter unique categories
	const uniqueCategories = new Set();
	const filteredProducts = products.filter((product) => {
		if (!uniqueCategories.has(product.category)) {
			uniqueCategories.add(product.category);
			return true;
		}
		return false;
	});

	return (
		<div className='min-h-screen'>
			<h1 className='pt-32 pb-10 mx-16 text-4xl text-blue-700 font-bold'>
				Start Shopping Today!
			</h1>
			<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 gap-y-14 px-8 xl:grid-cols-4'>
				{filteredProducts.map((box) => (
					<div
						key={box.id}
						className='w-72 mx-auto transform transition-transform bg-blue-50 rounded-t-3xl overflow-hidden duration-300 hover:shadow-lg'>
						<div className='relative block shadow-md hover:shadow-xl bg-blue-50 transition-shadow duration-300'>
							<div className='overflow-hidden'>
								<img
									src={box.image}
									alt={`Image of ${box.title}`}
									loading='lazy'
									className='h-72 w-full object-cover transition-transform duration-300 hover:scale-110'
								/>
							</div>
							<div className='relative border-t-2 mx-7 py-6 border-blue-100 bg-blue-50'>
								<Link
									href={`/content/categories/${box.id}`}
									className='block w-full rounded bg-blue-900 px-10 py-3 text-center text-lg font-medium text-white transition hover:scale-105'>
									{box.category}
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BoxContainer;
