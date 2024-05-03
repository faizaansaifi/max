import React from 'react'

const Button = (props) => {
	const { name, className } = props
	return <button className={`btn ${className}`}>{name}</button>
}

export default Button
