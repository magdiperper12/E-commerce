import Image from 'next/image';
import Banner from './_component/Banner';

import BoxContainer from './product/boxContainer';

export default function Home() {
	return (
		<div className=' flex flex-col  w-full mb-20  space-y-20'>
			<Banner />
			<BoxContainer />
		</div>
	);
}
