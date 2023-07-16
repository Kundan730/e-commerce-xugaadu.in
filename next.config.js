/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ['i.postimg.cc', 'images.unsplash.com', 'staticinm2.ishalife.com']
	},
}

module.exports = nextConfig
