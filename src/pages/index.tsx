import { Paragraph } from '@components/Typography'
import { Header } from '@components/Header'
import { Window } from '@components/Window'
import { Blockquote } from '@components/Blockquote'
import { Tabs } from '@components/Tabs'
import { Columns } from '@components/Layout'
import { TableView } from '@components/TableView'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { request } from '@/utils/http'

export default function Home() {
	const [githubData, setGithubData] = useState<any[]>()

	useEffect(() => {
		request('/api/github/felipe0liveira/repositories').then((data) =>
			setGithubData(data),
		)
	}, [])
	return (
		<>
			<Header />
			<Window title='Why does my website have this visual?'>
				<>
					<Paragraph>
						{`My website sports a retro look, inspired by none other than Windows 98! Why? Because 1998 is the year I was born, and I wanted something that stands out from the crowd. Blending a modern site with a classic OS vibe felt like the perfect way to create a unique digital experience. It's a playful nod to the past, wrapped in a design that's both nostalgic and fresh.`}
					</Paragraph>
				</>
			</Window>

			<Columns>
				<Window title="That's me">
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
						<Paragraph>
							I really love mountains and nature. This photo is from a trip that
							I did with my wife. I looved it.
						</Paragraph>
					</>
				</Window>
				<Window title='About me'>
					<>
						<Paragraph>
							I am a software engineer passionate about creating innovative and
							high-quality technological solutions, with extensive experience in
							fullstack and frontend development. Throughout my career, I have
							had the opportunity to work at renowned companies such as Gympass,
							Lend, Nubank, and PagSeguro PagBank, where I was responsible for
							the development, maintenance, and leadership of complex projects,
							focusing on content management systems, authentication platforms,
							and robust web applications.
						</Paragraph>

						<Paragraph>
							My skills include creating component libraries using methodologies
							such as Atomic Design, developing unit and end-to-end (E2E) tests
							with Cypress, and utilizing cutting-edge technologies like React,
							Next.js, Node.js, and Clojure. I am proficient in managing the
							full deployment cycle using tools like GitHub Actions, Docker, and
							AWS, and I work with agile methodologies, including Scrum and
							Kanban, to ensure efficient and collaborative deliveries.
						</Paragraph>

						<Paragraph>
							My experience as a Feature Lead has given me a broad perspective
							on software architecture and agile management, always focusing on
							delivering products that meet users{`'`} needs with excellence in
							design and functionality. Additionally, I am an enthusiast in
							enhancing user experience (UX) and applying best web development
							practices to create responsive and intuitive interfaces.
						</Paragraph>

						<Paragraph>
							I am always seeking new challenges that allow me to apply my
							experience, learn new technologies, and contribute to the success
							of innovative projects.
						</Paragraph>
					</>
				</Window>
			</Columns>

			<Blockquote>
				<Paragraph>
					Get to know me better on{' '}
					<a href='https://www.linkedin.com/in/felipe0liveira/' target='_blank'>
						LinkedIn
					</a>
					.
				</Paragraph>
			</Blockquote>

			<Tabs
				tabs={[
					{
						title: 'Frontend Developer',
						content: (
							<Paragraph>
								As a Frontend Developer, I have extensive experience in creating
								intuitive, responsive, and high-performance user interfaces. I
								{`'`}ve worked with modern technologies such as React, Angular,
								Next.js, and Vue.js, applying methodologies like Atomic Design
								to build reusable and consistent component libraries. I also
								have significant experience in implementing design systems,
								using tools like Storybook to encapsulate and share components
								across different teams. My focus is always on continuous
								improvement of user experience (UX) and optimizing application
								performance, ensuring that the final products are visually
								appealing and functional across all devices.
							</Paragraph>
						),
					},
					{
						title: 'Backend Developer',
						content: (
							<Paragraph>
								As a Backend Developer, I have a solid understanding of building
								scalable and efficient architectures. Using technologies such as
								Node.js, Python, and Clojure, I’ve developed robust and secure
								applications, often integrated with authentication systems like
								Auth0. I also have experience working with both relational and
								non-relational databases, including MySQL, MongoDB, and Datomic,
								as well as handling messaging systems using Kafka. My work on
								the backend includes creating REST and GraphQL APIs, always
								focusing on the performance and security of the applications.
							</Paragraph>
						),
					},
					{
						title: 'Fullstack Developer',
						content: (
							<Paragraph>
								As a Fullstack Developer, I combine my frontend and backend
								skills to develop complete solutions, from the user interface to
								the server-side business logic. I am highly proficient in stacks
								like MEAN (MongoDB, Express, Angular, Node.js) and MERN
								(MongoDB, Express, React, Node.js), and I{`’`}ve led complex
								projects from conception to final delivery. My ability to
								navigate between different layers of the application allows me
								to understand and optimize the entire data flow, ensuring that
								all system components work harmoniously.
							</Paragraph>
						),
					},
					{
						title: 'Technologies for Unit and Integration Testing',
						content: (
							<Paragraph>
								I am committed to ensuring software quality through rigorous
								testing. I use tools like Jest, Mocha, and Chai to write unit
								tests, ensuring that each component and function works as
								expected in isolation. Additionally, I implement integration
								tests to validate the interaction between different parts of the
								application, using Cypress and Selenium to simulate real-use
								scenarios. My dedication to quality includes creating continuous
								integration (CI/CD) pipelines that automate test execution with
								each build, ensuring that the code is always stable and bug-free
								before being released to production.
							</Paragraph>
						),
					},
				]}
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
									Get to know more about my profile on{' '}
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
