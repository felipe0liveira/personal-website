/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<title>Felipe Oliveira - Software Engineer</title>
				<link rel='shortcut icon' href='/favicon.png' type='image/png' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
