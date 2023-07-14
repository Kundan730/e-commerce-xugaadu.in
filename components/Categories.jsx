import Image from 'next/image'
import NextLink from 'next/link'

/* This example requires Tailwind CSS v2.0+ */
const categories = [
	{
		name: 'Hoodies',
		href: '/search?category=Hoodies',
		imageSrc: 'https://i.postimg.cc/BbjxR1S8/rose3.jpg',
	},
	{
		name: 'T-Shirts',
		href: '/search?category=T-shirts',
		imageSrc: 'https://i.postimg.cc/NMf87zZk/naruto3.jpg',
	},
	{
		name: 'Jackets',
		href: '/search?category=Jackets',
		imageSrc: 'https://i.postimg.cc/3Jw6JLRp/bomber3.jpg',
	},

	{
		name: 'Sculpture',
		href: '/search?category=Sculptur',
		imageSrc: 'https://images.unsplash.com/photo-1599379126660-d10b7e1831c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
	},
]

export default function Categories() {
	return (
		<div>
			<div className='py-16 xl:max-w-7xl xl:mx-auto xl:px-8'>
				<h2 className='text-2xl font-extrabold tracking-tight text-gray-900'>
					Shop by Category
				</h2>

				<div className='mt-4 scrollbar'>
					<div className='-my-2'>
						<div className='box-content py-2 relative h-80 overflow-x-auto overflow-y-hidden xl:overflow-visible'>
							<div className='absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-4 xl:gap-x-8'>
								{categories.map(category => (
									<div key={category.name}>
										<NextLink href={category.href} passHref>
											<div className='relative w-56 h-[17rem]  rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto cursor-pointer'>
												<span className='absolute inset-0'>
													<Image
														src={category.imageSrc}
														alt={category.name}
														layout='fill'
														priority='lazy'
														className='object-center object-cover'
													/>
												</span>
												<span className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50' />
												<span className='relative mt-auto text-center text-xl font-bold text-white'>
													{category.name}
												</span>
											</div>
										</NextLink>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
