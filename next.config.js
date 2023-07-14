/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ['i.postimg.cc', 'images.unsplash.com']
	},
}

module.exports = nextConfig
