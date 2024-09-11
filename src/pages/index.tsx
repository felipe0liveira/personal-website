import { Paragraph } from '@components/Typography'
import { Header } from '@components/Header'
import { Window } from '@components/Window'
import { Blockquote } from '@components/Blockquote'
import { Tabs } from '@components/Tabs'
import { Columns } from '@components/Layout'
import { TableView } from '@components/TableView'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { request, getUserLanguage } from '@utils/index'
import * as i18n from '@locales/i18n'

export default function Home() {
	const [githubData, setGithubData] = useState<any[]>()
	const [lang, setLang] = useState<'pt-BR' | 'en-US'>()

	useEffect(() => {
		request('/api/github/felipe0liveira/repositories').then((data) =>
			setGithubData(data),
		)

		if (getUserLanguage() === 'pt-BR') setLang('pt-BR')
	}, [])

	if (!lang)
		return (
			<>
				<Header />
			</>
		)

	return (
		<>
			<Header />
			<Window title={i18n.Homepage.aboutWindows98Theme.title[lang]}>
				<>
					<Paragraph>
						{i18n.Homepage.aboutWindows98Theme.description[lang]}
					</Paragraph>
				</>
			</Window>

			<Columns>
				<Window title={i18n.Homepage.thatsMe.title[lang]}>
					<>
						<Image
							src='/me.png'
							alt='A grayscale photo of me with a looking to the right. the background contains nature and mountains.'
							width={0}
							height={0}
							sizes='100%'
							style={{
								width: '100%',
								height: 'auto',
								filter: 'grayscale(100%)',
							}}
						/>
						<Paragraph>{i18n.Homepage.thatsMe.description[lang]}</Paragraph>
					</>
				</Window>
				<Window title={i18n.Homepage.aboutMe.title[lang]}>
					<>
						{i18n.Homepage.aboutMe.description[lang].map((p, i) => (
							<Paragraph key={i}>{p}</Paragraph>
						))}
					</>
				</Window>
			</Columns>

			<Blockquote>
				<Paragraph>
					{i18n.Homepage.linkedinBlockquote.text[lang]}
					<a href='https://www.linkedin.com/in/felipe0liveira/' target='_blank'>
						LinkedIn
					</a>
					.
				</Paragraph>
			</Blockquote>

			<Tabs
				tabs={i18n.Homepage.tabs.map((tab) => ({
					title: tab.title[lang],
					content: <Paragraph>{tab.description[lang]}</Paragraph>,
				}))}
			/>

			{githubData && (
				<Columns>
					<Window title='Github'>
						<>
							<TableView
								heading={[
									{ title: 'Stars', key: 'stargazersCount' },
									{ title: 'Name', key: 'name' },
									{ title: 'Size', key: 'size' },
									{ title: 'URL', key: 'url', label: 'Visit', link: true },
								]}
								list={githubData}
							/>
							<Blockquote>
								<Paragraph>
									{i18n.Homepage.githubBlockquote.text[lang]}
									<a href='https://github.com/felipe0liveira' target='_blank'>
										Github
									</a>
									.
								</Paragraph>
							</Blockquote>
						</>
					</Window>
				</Columns>
			)}
		</>
	)
}
