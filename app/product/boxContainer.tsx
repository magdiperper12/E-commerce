'use client';

import React, { useEffect, useState } from 'react';
import Box from './box';
import axios from 'axios';
import LoadCard from './loadCard';

interface RatingType {
	rate: number;
	count: number;
}

interface BoxType {
	rating: RatingType;
	id: string;
	title: string;
	price: string;
	description: string;
	category: string;
	image: string;
}

function BoxContainer() {
	const [products, setProducts] = useState<BoxType[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get('https://fakestoreapi.com/products');
				setProducts(response.data);
			} catch (error) {
				setError('No product found.');
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
			<div className='grid grid-cols-4 gap-8 gap-y-14 px-8'>
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
		<>
			<h1 className='my-10 mx-12 text-5xl text-teal-600 font-bold'>shopping</h1>
			<div className='grid grid-cols-4 gap-8 gap-y-14 px-8'>
				{products.map((box) => (
					<div key={box.id}>
						<Box
							id={box.id}
							title={box.title}
							price={box.price}
							description={box.description}
							category={box.category}
							image={box.image}
							ratingRate={box.rating.rate.toString()}
							ratingCount={box.rating.count.toString()}
						/>
					</div>
				))}
			</div>
		</>
	);
}

export default BoxContainer;
