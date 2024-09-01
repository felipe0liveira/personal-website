import { useState } from 'react'
import { TitleBarProps, WindowProps, WindowState } from './types'

const TitleBar = ({
	title,
	onMinimize,
	onMaximize,
	onClose,
}: TitleBarProps) => {
	return (
		<div className='title-bar'>
			<div className='title-bar-text'>{title}</div>
			<div className='title-bar-controls'>
				<button aria-label='Minimize' onClick={onMinimize}></button>
				<button aria-label='Maximize' onClick={onMaximize}></button>
				<button aria-label='Close' onClick={onClose}></button>
			</div>
		</div>
	)
}

export const Window = ({ title, children }: WindowProps) => {
	const [windowState, setWindowState] = useState<WindowState>('opened')

	if (windowState === 'closed') return <></>
	return (
		<div className='window' style={{ height: 'min-content' }}>
			<div className='title-bar'>
				<div className='title-bar-text'>{title}</div>
				<div className='title-bar-controls'>
					<button
						aria-label='Minimize'
						onClick={() => setWindowState('minimized')}
						disabled={['minimized'].includes(windowState)}
					/>
					<button
						aria-label='Maximize'
						onClick={() => setWindowState('maximized')}
						disabled={['opened', 'maximized'].includes(windowState)}
					/>
					<button aria-label='Close' onClick={() => setWindowState('closed')} />
				</div>
			</div>
			{['opened', 'maximized'].includes(windowState) && (
				<div className='window-body' style={{ display: 'grid', gap: '8px' }}>
					{children}
				</div>
			)}
		</div>
	)
}
