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

const BoxContainer: React.FC = () => {
	const [products, setProducts] = useState<BoxType[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string>('');

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

	return (
		<div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 gap-y-14 px-8 xl:grid-cols-4'>
			{products.map((box) => (
				<div key={box.id}>
					<Box
						id={box.id}
						title={box.title}
						price={box.price}
						description={box.description}
						category={box.category}
						image={box.image}
						ratingRate={box.rating.rate} // Pass as a number
						ratingCount={box.rating.count} // Pass as a number
					/>
				</div>
			))}
		</div>
	);
};

export default BoxContainer;
