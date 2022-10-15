import React from 'react';
import './Entry.css';


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
	marginRight: '25%',
	marginLeft: '26.5%',
	flex: 0.5,
	justifyContent: 'center',
	flexDirection: 'row',
	width: '40%',
	alignSelf: 'center'
}
const imageContainer = {
	flex: 0.5,
	// justifyContent: 'flex-start',
	alignSelf: 'center',
	width: 50,
	height: 50,
}
const imageStyle = {
	flex: 1,
	width: 600,
	height: 600,
	textAlign: 'center',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    // width: "100%",
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