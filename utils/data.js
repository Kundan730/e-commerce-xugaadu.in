import bcrypt from 'bcryptjs'

const data = {
	users: [
		{
			name: 'John',
			email: 'admin@example.com',
			password: bcrypt.hashSync('123456'),
			isAdmin: true,
		},
		{
			name: 'Jane',
			email: 'user@example.com',
			password: bcrypt.hashSync('123456'),
			isAdmin: false,
		},
	],

	products: [
		{
			name: 'Black Colored Sweatpants With Elastic Hems',
			slug: 'black-colored-sweatpants-with-elastic-hems',
			category: 'Pants',
			images: [
				'https://i.postimg.cc/0yQtPrVC/sweatpants1.jpg',
				'https://i.postimg.cc/XYzsJ3h6/sweatpants2.jpg',
				'https://i.postimg.cc/G2kKqDpb/sweatpants3.jpg',
				'https://i.postimg.cc/26pTQGrH/sweatpants4.jpg',
			],
			price: 530,
			brand: 'test',
			rating: 0,
			numReviews: 0,
			countInStock: 20,
			description:
				'<p>Dummy Text:- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Faucibus a pellentesque sit amet porttitor eget. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ornare aenean euismod elementum nisi quis eleifend quam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. In fermentum posuere urna nec tincidunt. Commodo sed egestas egestas fringilla. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Faucibus et molestie ac feugiat sed lectus vestibulum. Aliquam faucibus purus in massa tempor nec feugiat. A lacus vestibulum sed arcu non odio euismod lacinia.</p>',
		},
		{
			name: 'Carpenter Jeans',
			slug: 'carpenter-jeans',
			category: 'Pants',
			images: [
				'https://i.postimg.cc/hP3YJ9zY/carpenter1.jpg',
				'https://i.postimg.cc/1RvCTpHz/carpenter2.jpg',
				'https://i.postimg.cc/Pq1VF93G/carpenter3.jpg',
				'https://i.postimg.cc/g2CBsmKq/carpenter4.jpg',
			],
			price: 910,
			brand: 'test',
			rating: 0,
			numReviews: 0,
			countInStock: 20,
			description:
			'<p>Dummy Text:- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Faucibus a pellentesque sit amet porttitor eget. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ornare aenean euismod elementum nisi quis eleifend quam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. In fermentum posuere urna nec tincidunt. Commodo sed egestas egestas fringilla. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Faucibus et molestie ac feugiat sed lectus vestibulum. Aliquam faucibus purus in massa tempor nec feugiat. A lacus vestibulum sed arcu non odio euismod lacinia.</p>',
		},
		{
			name: 'Basic Slim Fit Chinos Trousers',
			slug: 'basic-slim-fit-chinos-trousers',
			category: 'Pants',
			images: [
				'https://i.postimg.cc/dVkxGLGV/chinos1.jpg',
				'https://i.postimg.cc/rmcZ6j3D/chinos2.jpg',
				'https://i.postimg.cc/3NxLNRK7/chinos3.jpg',
				'https://i.postimg.cc/Y93ntgBb/chinos4.jpg',
			],
			price: 860,
			brand: 'test',
			rating: 0,
			numReviews: 0,
			countInStock: 20,
			description:
			'<p>Dummy Text:- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Faucibus a pellentesque sit amet porttitor eget. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ornare aenean euismod elementum nisi quis eleifend quam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. In fermentum posuere urna nec tincidunt. Commodo sed egestas egestas fringilla. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Faucibus et molestie ac feugiat sed lectus vestibulum. Aliquam faucibus purus in massa tempor nec feugiat. A lacus vestibulum sed arcu non odio euismod lacinia.</p>',
		},

		{
			name: 'Cropped Satin Bomber Jacket',
			slug: 'cropped-satin-bomber-jacket',
			category: 'Jackets',
			images: [
				'https://i.postimg.cc/Fzr6SpVM/bomber1.jpg',
				'https://i.postimg.cc/Xqszk52p/bomber2.jpg',
				'https://i.postimg.cc/3Jw6JLRp/bomber3.jpg',
				'https://i.postimg.cc/c1h2Wqs0/bomber4.jpg',
			],
			price: 1800,
			brand: 'Test',
			rating: 0,
			numReviews: 0,
			countInStock: 20,
			description:
			'<p>Dummy Text:- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Faucibus a pellentesque sit amet porttitor eget. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ornare aenean euismod elementum nisi quis eleifend quam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. In fermentum posuere urna nec tincidunt. Commodo sed egestas egestas fringilla. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Faucibus et molestie ac feugiat sed lectus vestibulum. Aliquam faucibus purus in massa tempor nec feugiat. A lacus vestibulum sed arcu non odio euismod lacinia.</p>',
		},

		{
			name: 'Basic High-Neck Puff Jacket',
			slug: 'basic-high-neck-puff-jacket',
			category: 'Jackets',
			images: [
				'https://i.postimg.cc/sg4Z6JY6/high-neck1.jpg',
				'https://i.postimg.cc/jj8nKdky/high-neck2.jpg',
				'https://i.postimg.cc/mDJczp4D/high-neck3.jpg',
				'https://i.postimg.cc/bJsDvcKW/high-neck4.jpg',
			],
			price: 700,
			brand: 'Gap',
			rating: 0,
			numReviews: 0,
			countInStock: 20,
			description:
			'<p>Dummy Text:- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Faucibus a pellentesque sit amet porttitor eget. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ornare aenean euismod elementum nisi quis eleifend quam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. In fermentum posuere urna nec tincidunt. Commodo sed egestas egestas fringilla. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Faucibus et molestie ac feugiat sed lectus vestibulum. Aliquam faucibus purus in massa tempor nec feugiat. A lacus vestibulum sed arcu non odio euismod lacinia.</p>',
		},
		{
			name: 'Oversize Faux Leather Biker Jacket',
			slug: 'oversize-faux-leather-biker-jacket',
			category: 'Jackets',
			images: [
				'https://i.postimg.cc/BbbgsVgn/faux1-1.jpg',
				'https://i.postimg.cc/HnNtL9Z4/faux2-1.jpg',
				'https://i.postimg.cc/xjp5g9fJ/faux3.jpg',
				'https://i.postimg.cc/PrL4R0J6/faux4.jpg',
			],
			price: 650,
			brand: 'Faux',
			rating: 0,
			numReviews: 0,
			countInStock: 18,
			description:
			'<p>Dummy Text:- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Faucibus a pellentesque sit amet porttitor eget. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ornare aenean euismod elementum nisi quis eleifend quam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. In fermentum posuere urna nec tincidunt. Commodo sed egestas egestas fringilla. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Faucibus et molestie ac feugiat sed lectus vestibulum. Aliquam faucibus purus in massa tempor nec feugiat. A lacus vestibulum sed arcu non odio euismod lacinia.</p>',
		},
		{
			name: 'Oversized Denim Jacket',
			slug: 'oversized-denim-jacket',
			category: 'Jackets',
			images: [
				'https://i.postimg.cc/CKpmDJFc/denim1.jpg',
				'https://i.postimg.cc/zfwpkWv8/denim2.jpg',
				'https://i.postimg.cc/RFMdpFJf/denim3.jpg',
				'https://i.postimg.cc/9MJp6hyk/denim4.jpg',
			],
			price: 550,
			brand: 'test',
			rating: 0,
			numReviews: 0,
			countInStock: 8,
			description:
			'<p>Dummy Text:- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Faucibus a pellentesque sit amet porttitor eget. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ornare aenean euismod elementum nisi quis eleifend quam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. In fermentum posuere urna nec tincidunt. Commodo sed egestas egestas fringilla. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Faucibus et molestie ac feugiat sed lectus vestibulum. Aliquam faucibus purus in massa tempor nec feugiat. A lacus vestibulum sed arcu non odio euismod lacinia.</p>',
		},
		{
			name: 'Lightweight Zipped Bomber Jacket',
			slug: 'lightweight-zipped-bomber-jacket',
			category: 'Jackets',
			images: [
				'https://i.postimg.cc/65RHQDK8/zipped1.jpg',
				'https://i.postimg.cc/RZBgJXCX/zipped2.jpg',
				'https://i.postimg.cc/jS4ZHPLK/zipped3.jpg',
				'https://i.postimg.cc/TP2QC1Db/zipped4.jpg',
			],
			price: 895,
			brand: 'test',
			rating: 0,
			numReviews: 0,
			countInStock: 20,
			description:
			'<p>Dummy Text:- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Faucibus a pellentesque sit amet porttitor eget. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ornare aenean euismod elementum nisi quis eleifend quam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. In fermentum posuere urna nec tincidunt. Commodo sed egestas egestas fringilla. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Faucibus et molestie ac feugiat sed lectus vestibulum. Aliquam faucibus purus in massa tempor nec feugiat. A lacus vestibulum sed arcu non odio euismod lacinia.</p>',
		},
		{
			name: 'Rose Printed Hoodie',
			slug: 'rose-printed-hoodie',
			category: 'Hoodies',
			images: [
				'https://i.postimg.cc/5tJSj03G/rose1.jpg',
				'https://i.postimg.cc/ydQmfTH4/rose2.jpg',
				'https://i.postimg.cc/BbjxR1S8/rose3.jpg',
				'https://i.postimg.cc/kGLxCXGT/rose4.jpg',
			],
			price: 1400,
			brand: 'Casely',
			rating: 0,
			numReviews: 0,
			countInStock: 10,
			description:
			'<p>Dummy Text:- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Faucibus a pellentesque sit amet porttitor eget. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ornare aenean euismod elementum nisi quis eleifend quam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. In fermentum posuere urna nec tincidunt. Commodo sed egestas egestas fringilla. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Faucibus et molestie ac feugiat sed lectus vestibulum. Aliquam faucibus purus in massa tempor nec feugiat. A lacus vestibulum sed arcu non odio euismod lacinia.</p>',
		},
		{
			name: 'Black Hoodie With Contrast Graphic',
			slug: 'black-hoodie-with-contrast-graphic',
			category: 'Hoodies',
			images: [
				'https://i.postimg.cc/8PsKVjKm/contrast1.jpg',
				'https://i.postimg.cc/wM4wmpvN/contrast2.jpg',
				'https://i.postimg.cc/P5wSP0kL/contrast3.jpg',
				'https://i.postimg.cc/tCfrRp8Q/contrast4.jpg',
			],
			price: 405,
			brand: 'Starter',
			rating: 0,
			numReviews: 0,
			countInStock: 30,
			description:
			'<p>Dummy Text:- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Faucibus a pellentesque sit amet porttitor eget. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ornare aenean euismod elementum nisi quis eleifend quam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. In fermentum posuere urna nec tincidunt. Commodo sed egestas egestas fringilla. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Faucibus et molestie ac feugiat sed lectus vestibulum. Aliquam faucibus purus in massa tempor nec feugiat. A lacus vestibulum sed arcu non odio euismod lacinia.</p>',
		},
		{
			name: 'Hot Stuff Hoodie',
			slug: 'hot-stuff-hoodie',
			category: 'Hoodies',
			images: [
				'https://i.postimg.cc/LsvLXVhY/stuff1.jpg',
				'https://i.postimg.cc/yN70sG6C/stuff2.jpg',
				'https://i.postimg.cc/TwwmWWWk/stuff3.jpg',
				'https://i.postimg.cc/C1Q8CLGw/stuff4.jpg',
			],
			price: 850,
			brand: 'Hot Stuff',
			rating: 0,
			numReviews: 0,
			countInStock: 20,
			description:
			'<p>Dummy Text:- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Faucibus a pellentesque sit amet porttitor eget. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ornare aenean euismod elementum nisi quis eleifend quam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. In fermentum posuere urna nec tincidunt. Commodo sed egestas egestas fringilla. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Faucibus et molestie ac feugiat sed lectus vestibulum. Aliquam faucibus purus in massa tempor nec feugiat. A lacus vestibulum sed arcu non odio euismod lacinia.</p>',
		},

		{
			name: 'Orange Starter Logo T-shirt',
			slug: 'orange-starter-logo-t-shirt',
			category: 'T-shirts',
			images: [
				'https://i.postimg.cc/FF6b3Gp0/starter1.jpg',
				'https://i.postimg.cc/yYSmP9pt/starter2.jpg',
				'https://i.postimg.cc/13GpxSQK/starter3.jpg',
				'https://i.postimg.cc/9Q5GNMvM/starter4.jpg',
			],
			price: 458,
			brand: 'Starter',
			rating: 0,
			numReviews: 0,
			countInStock: 20,
			description:
				'<p>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.</p><p>Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas laucs odio, feugiat eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat mauris, sed egestas purus commodo vel.</p>',
		},
		{
			name: 'Tupac California Love T-Shirt',
			slug: 'tupac-california-love-t-shirt',
			category: 'T-shirts',
			images: [
				'https://i.postimg.cc/T15DtM0g/tupac1.jpg',
				'https://i.postimg.cc/gr965St5/tupac2.jpg',
				'https://i.postimg.cc/sfb6s3kF/tupac3.jpg',
				'https://i.postimg.cc/c1v9pv5M/tupac4.jpg',
			],
			price: 458,
			brand: 'Tupac',
			rating: 0,
			numReviews: 0,
			countInStock: 30,
			description:
			'<p>Dummy Text:- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Faucibus a pellentesque sit amet porttitor eget. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ornare aenean euismod elementum nisi quis eleifend quam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. In fermentum posuere urna nec tincidunt. Commodo sed egestas egestas fringilla. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Faucibus et molestie ac feugiat sed lectus vestibulum. Aliquam faucibus purus in massa tempor nec feugiat. A lacus vestibulum sed arcu non odio euismod lacinia.</p>',
		},
		{
			name: 'Naruto Itachi Print T-shirt',
			slug: 'naruto-itachi-print-t-shirt',
			category: 'T-shirts',
			images: [
				'https://i.postimg.cc/BQdg9N1J/naruto1.jpg',
				'https://i.postimg.cc/NjmxgT1m/naruto2.jpg',
				'https://i.postimg.cc/NMf87zZk/naruto3.jpg',
				'https://i.postimg.cc/JhQcXLYh/naruto4.jpg',
			],
			price: 170,
			brand: 'Test',
			rating: 0,
			numReviews: 0,
			countInStock: 20,
			description:
			'<p>Dummy Text:- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem nulla pharetra. Faucibus a pellentesque sit amet porttitor eget. Condimentum lacinia quis vel eros donec ac odio tempor orci. Ornare aenean euismod elementum nisi quis eleifend quam. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. In fermentum posuere urna nec tincidunt. Commodo sed egestas egestas fringilla. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Faucibus et molestie ac feugiat sed lectus vestibulum. Aliquam faucibus purus in massa tempor nec feugiat. A lacus vestibulum sed arcu non odio euismod lacinia.</p>',
		},
	],
}

export default data
