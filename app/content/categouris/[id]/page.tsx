'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import BreadCramps from '@/app/_component/breadCramps';
import { FaShoppingCart } from 'react-icons/fa';
import { useUser } from '@clerk/nextjs';
import LoadCard from '@/app/product/loadCard';
import Box from '@/app/product/box';

interface RatingType {
	rate: number;
	count: number;
}

interface BoxType {
	rating: RatingType;
	id: string;
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
						(product: BoxType) => product.category === item.category
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
				subtitle='categories'
				id={item.category}
			/>

			{similarItems.length > 0 ? (
				<div className='px-5'>
					<h1 className='pb-5 pt-10 text-blue-500 text-4xl font-bold'>
						{item.category}
					</h1>
					<div className='grid pt-10 lg:grid-cols-3  md:grid-cols-2 grid-cols-1  gap-4'>
						{similarItems.map((simItem) => (
							<Box
								key={simItem.id}
								id={simItem.id}
								title={simItem.title}
								price={simItem.price}
								description={simItem.description}
								category={simItem.category}
								image={simItem.image}
								ratingRate={simItem.rating.rate.toString()}
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
