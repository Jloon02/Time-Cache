import React from 'react';

import {
	Text,
	Image,
	StyleSheet,
	SafeAreaView,
} from 'react'


// props(prompt, caption, log, imageURL)
function Entry(props) {
	return (
		<SafeAreaView style={styles.allContainer}>
			<SafeAreaView style={styles.imageContainer}>
			<Image
				style={styles.imageStyle}>
				source={props.imageURL}
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
	)
}

const styles = StyleSheet.create({
	allContainer: {
		display: flex,
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

	},
	droplogContainer: {

	},
	droplogStyle: {
		
	},
})