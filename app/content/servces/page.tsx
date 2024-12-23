// pages/services.tsx
export default function Services() {
	const services = [
		{
			id: 1,
			title: 'Free Delivery',
			description:
				'Enjoy free delivery on all orders over $50. Fast and secure shipping to your doorstep.',
			icon: '🚚',
		},
		{
			id: 2,
			title: 'Easy Returns',
			description:
				'Hassle-free returns within 30 days. Shop with confidence and satisfaction guaranteed.',
			icon: '🔄',
		},
		{
			id: 3,
			title: '24/7 Support',
			description:
				'Our team is here to help, anytime, anywhere. Reach out to us for assistance 24/7.',
			icon: '📞',
		},
		{
			id: 4,
			title: 'Secure Payments',
			description:
				'We provide safe and secure payment options to ensure your transactions are protected.',
			icon: '💳',
		},
	];

	return (
		<div className='min-h-screen bg-gray-50 pt-24'>
			<div className='max-w-7xl mx-auto px-4 py-16'>
				<h1 className='text-4xl font-bold text-center text-gray-800 mb-8'>
					Our Services
				</h1>
				<p className='text-center text-gray-600 mb-12'>
					We aim to provide the best shopping experience with our range of
					premium services.
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{services.map((service) => (
						<div
							key={service.id}
							className='bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300'>
							<div className='text-5xl mb-4'>{service.icon}</div>
							<h2 className='text-2xl font-semibold text-gray-800 mb-2'>
								{service.title}
							</h2>
							<p className='text-gray-600'>{service.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
