import React from 'react';
import './Entry.css';


// props(prompt, caption, log, imageURL)
function Entry(props) {
	return (
		<div className='box'>
			<div style={allContainer} className={'round'}>
				<div style={imageContainer}>
					<img
						style={imageStyle}
						src={props.imageURL}
					/>
				</div>
				<div>
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
        	</div>	
		</div>
	    
	);
}

const allContainer = {
	// backgroundColor: 'black',
	// marginRight: '25%',
	// marginLeft: '10%',
	marginTop: '10%',
	// marginBottom: '12.5%',
	// flex: 0.5,
	justifyContent: 'center',
	// flexDirection: 'row',
	// width: '40%',
	alignSelf: 'center',
	padding: 50,
}
const imageContainer = {
	
	// flex: 0.5,
	// justifyContent: 'flex-start',
	alignSelf: 'center',
	width: 600,
	height: 600,
	overflow: 'hidden',
	borderRadius: 25,
	marginTop: '-1.5%',
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
}
const captionStyle = {
	marginTop: 20,
	fontWeight: 'bold',
	alignSelf: 'right',
	marginRight: '100',
}
const droplogContainer = {
	flex: 1,
}
const droplogStyle = {
	alignSelf: 'right',
	marginRight: '10',
}

export default Entry;