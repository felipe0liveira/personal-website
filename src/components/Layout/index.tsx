import styled from 'styled-components'

export const Layout = styled.div`
	display: flex;
	justify-content: center;
`
export const Container = styled.main`
	width: 900px;
	max-width: 90%;
	padding: 24px 0;
	display: grid;
	gap: 16px;
`

export const Columns = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	@media (min-width: 1050px) {
		flex-direction: row;
	}
`
