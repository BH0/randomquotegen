import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class Title extends React.Component {

	render() {
		return (
			<View>
                <Text> Random Quote Generator </Text>
			</View>
		);
	}
}

AppRegistry.registerComponent('Title', () => Title);
