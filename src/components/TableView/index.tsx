import { useEffect } from 'react'
import { TableViewProps } from './types'

export const TableView = ({ list, heading }: TableViewProps) => {
	return (
		<div className='sunken-panel'>
			<table className='interactive'>
				<thead>
					<tr>
						{heading.map((h) => (
							<th key={h.key}>{h.title}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{list.map((item) => (
						<tr key={item.id} style={{ cursor: 'unset' }}>
							{heading.map((h) => (
								<td key={item.id}>
									{h.link ? (
										<a href={item[h.key]} target='_blank'>
											{h.label}
										</a>
									) : (
										item[h.key]
									)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
