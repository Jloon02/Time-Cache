import React from 'react';

import {
	Text,
	Image,
	View,
	StyleSheet,
} from 'react'


// props(prompt, caption, log, imageURL)
function Entry(props) {
	return (
		<View style={styles.allContainer}>
			<View style={styles.imageContainer}>
			<Image
				style={styles.imageStyle}
				source={props.imageURL}
			/>
			</View>
			<Text style={styles.captionStyle}>{props.caption}</Text>
			<View style={styles.droplogContainer}>
				<Text style={styles.droplogStyle}>
					{props.prompt}
				</Text>
				<Text style={styles.droplogStyle}>
					{props.log}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	allContainer: {
		backgroundColor: 'black',
		flex: 0.5,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		width: '50%',
	},
	imageContainer: {
		flex: 0.9,
		justifyContent: 'flex-start',
		alignSelf: 'center',
	},
	imageStyle: {
		flex: 1,
	},
	captionStyle: {
		fontWeight: 'bold',
		alignSelf: 'right',
		marginRight: '10',
	},
	droplogContainer: {
		flex: 1,
	},
	droplogStyle: {
		alignSelf: 'right',
		marginRight: '10',
	},
})

export default Entry;