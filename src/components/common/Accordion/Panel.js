import React, { useState } from 'react'

const Panel = ({ data }) => {
	const [accordionItems, setAccordionItems] = useState(() => {
		const accordion = data.map((i) => ({
			title: i.title,
			content: i.content,
			open: false,
		}))
		return accordion
	})

	const click = (index) => {
		const newAccordion = [...accordionItems]
		newAccordion[index].open = !newAccordion[index].open
		setAccordionItems(newAccordion)
	}

	return (
		<div className="accordion">
			{accordionItems.map((i, index) => (
				<div key={index}>
					<div
						className="title"
						onClick={() => click(index)}>
						<div className="arrow-wrapper">
							<i
								className={
									i.open
										? 'fa fa-angle-down fa-rotate-180'
										: 'fa fa-angle-down'
								}></i>
						</div>
						<span className="title-text">{i.title}</span>
					</div>
					<div
						className={i.open ? 'content content-open' : 'content'}>
						<div
							className={
								i.open
									? 'content-text content-text-open'
									: 'content-text'
							}>
							{i.content}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Panel
