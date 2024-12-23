import React from 'react';

function LoadCard() {
	return (
		<div>
			<div className='text-center text-blue-600 mx-10 my-10'>
				<div className='text-center text-blue-600'>
					<div className='text-center mt-10 text-lg font-medium'>
						<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1  gap-6'>
							<div className='rounded-lg shadow-md bg-blue-200 dark:bg-blue-700 animate-pulse'>
								<div className='h-48 bg-blue-300 dark:bg-blue-600'></div>
								<div className='p-4'>
									<div className='h-6 bg-blue-400 dark:bg-blue-500 rounded mb-2'></div>
									<div className='h-4 bg-blue-300 dark:bg-blue-600 rounded'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoadCard;
