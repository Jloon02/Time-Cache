import React from 'react';

import {
	Text,
	Image,
	div,
	StyleSheet,
} from 'react'


// props(prompt, caption, log, imageURL)
function Entry(props) {
	return (
	    <div style={allContainer}>
            <div style={imageContainer}>
            <img
                style={imageStyle}
                src={props.imageURL}
            />
            </div>
            <p style={captionStyle}>{props.caption}</p>
            <div style={droplogContainer}>
                <p style={droplogStyle}>
                    {props.prompt}
                </p>
                <p style={droplogStyle}>
                    {props.log}
                </p>
            </div>
        </div>	
	);
}

const allContainer = {
	// backgroundColor: 'black',
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