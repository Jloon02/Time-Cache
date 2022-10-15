import React from 'react';
// import './Entry.css';

import {
	Text,
	Image,
	div,
	StyleSheet,
} from 'react'


// props(prompt, caption, log, imageURL)
function Entry(props) {
	return React.createElement(
		<div style={allContainer}>
			<div style={imageContainer}>
			<Image
				style={imageStyle}
				source={props.imageURL}
			/>
			</div>
			<Text style={captionStyle}>{props.caption}</Text>
			<div style={droplogContainer}>
				<Text style={droplogStyle}>
					{props.prompt}
				</Text>
				<Text style={droplogStyle}>
					{props.log}
				</Text>
			</div>
		</div>
	);
}

const allContainer = {
	backgroundColor: 'black',
	flex: 0.5,
	justifyContent: 'flex-start',
	flexDirection: 'row',
	width: '50%',
}
const imageContainer = {
	flex: 0.9,
	justifyContent: 'flex-start',
	alignSelf: 'center',
}
const imageStyle = {
	flex: 1,
}
const captionStyle = {
	fontWeight: 'bold',
	alignSelf: 'right',
	marginRight: '10',
}
const droplogContainer = {
	flex: 1,
}
const droplogStyle = {
	alignSelf: 'right',
	marginRight: '10',
}

export default Entry;