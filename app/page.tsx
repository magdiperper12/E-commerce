'use client';
import Banner from './_component/Banner';

import BoxContainer from './product/boxContainer';
import { useEffect, useState } from 'react';

export default function Home() {
	const [show, setShow] = useState(false);
	const handellShow = () => {
		setShow(true);
	};
	return (
		<div className=' flex flex-col  w-full mb-20  space-y-20'>
			<Banner />
			<h1 className='my-12 mx-16 text-4xl text-blue-900 font-bold'>
				Start Shopping Today!
			</h1>
			<BoxContainer />
			<button
				onClick={() => handellShow()}
				className={` ${
					show ? 'hidden' : 'block'
				} border-2 rounded-lg border-dashed border-blue-400 px-5  text-blue-500 italic font-bold  py-2 hover:border-blue-600 hover:bg-blue-600 hover:text-white duration-150 text-lg w-52 m-auto`}>
				Show more offers
			</button>
			{show ? (
				<div>
					<BoxContainer />
					<BoxContainer />
					<BoxContainer />
					<BoxContainer />
					<BoxContainer />
					<BoxContainer />
				</div>
			) : (
				''
			)}
		</div>
	);
}
