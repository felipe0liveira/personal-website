import styled from 'styled-components'

export const Paragraph = styled.p`
	text-align: justify;
	font-size: 16px;

	@media (min-width: 1050px) {
		font-size: 14px;
	}
`

export const Heading1 = styled.h1`
	font-size: 30px;
	font-family: 'Handjet', sans-serif;
	font-optical-sizing: auto;
	font-style: normal;
	font-weight: 400;
	font-variation-settings:
		'ELGR' 1,
		'ELSH' 2;
`
export const Heading2 = styled.h2`
	font-size: 24px;
	font-family: 'Handjet', sans-serif;
	font-optical-sizing: auto;
	font-style: normal;
	font-weight: 300;
	font-variation-settings:
		'ELGR' 1,
		'ELSH' 2;
	color: #464646;
`
