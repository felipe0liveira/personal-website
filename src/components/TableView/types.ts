interface Heading {
	title: string
	key: string
	label?: string
	link?: boolean
}

export interface TableViewProps {
	heading: Heading[]
	list: any[]
}
