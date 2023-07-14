import Head from 'next/head'
import React from 'react'

const MyHead = ({ title, description, image, url }) => {
	return (
		<Head>
			<meta name='viewport' content='width=device-width' />
			<meta charSet='utf-8' />
			<link
				rel='icon'
				type='image/png'
				href='/images/favicon.ico'
			/>

			<title>
				{(title && title + ' - Xugaadu') ||
					'Xugaadu - Elevate Your Style.'}
			</title>
			{/* <!-- HTML Meta Tags --> */}
			<meta
				name='description'
				content={
					description ||
					'Shop for clothes online at xugaadu.in With our clothing collection, you can take your style to the next level.'
				}
			/>

			<meta name='robots' content='index,follow' />
		</Head>
	)
}

export default MyHead
