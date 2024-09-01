import { GithubRepository } from '@/types/github'
import type { NextApiRequest, NextApiResponse } from 'next'

type Response = [
	{
		name: string
		description: string
		stargazersCount: number
		size: string
		url: string
	},
]

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Response>,
) {
	const response = await fetch(
		`https://api.github.com/users/${req.query.username}/repos`,
	)
	const data = (await response.json()) as GithubRepository[]

	res.status(200).json(
		data.map((repo) => ({
			name: repo.name,
			description: repo.description,
			stargazersCount: repo.stargazers_count,
			size: `${repo.size} KB`,
			url: repo.html_url,
		})) as Response,
	)
}
