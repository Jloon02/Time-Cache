import React from 'react';

import {
	Text,
	Image,
	View,
	StyleSheet,
	SafeAreaView,
} from 'react'


// props(prompt, caption, log, imageURL)
function Entry(props) {
	return (
		<SafeAreaView style={styles.allContainer}>
			<SafeAreaView style={styles.imageContainer}>
			<Image
				style={styles.imageStyle}
				source={props.imageURL}>
			</Image>
			</SafeAreaView>
			<Text style={styles.captionStyle}>{props.caption}</Text>
			<SafeAreaView style={styles.droplogContainer}>
				<Text style={styles.droplogStyle}>
					{props.prompt}
				</Text>
				<Text style={styles.droplogStyle}>
					{props.log}
				</Text>
			</SafeAreaView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	allContainer: {
		backgroundColor: 'white',
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