import '@/styles/globals.css'
import '98.css'
import type { AppProps } from 'next/app'
import { Container, Layout } from '@components/Layout'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Container>
				<Component {...pageProps} />
			</Container>
		</Layout>
	)
}
