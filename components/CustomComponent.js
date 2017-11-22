import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class CustomComponent extends React.Component {

	render() {
		return (
			<View>
                <Text> HI </Text>
			</View>
		);
	}
}

AppRegistry.registerComponent('CustomComponent', () => CustomComponent);
