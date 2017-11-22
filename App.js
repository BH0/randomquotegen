
/// Local JSON File
//import quotes from './quotes.json';

/// Import Components
import React, {Component} from 'react';
import {AppRegistry, Alert, StyleSheet, Button, View, Text } from 'react-native';

/// Import Custom Components
import Title from './components/Title';
import QuoteGen from './components/QuoteGen';
// import DisplayedQuote from './components/DisplayedQuote';

/// Main Component
export default class App extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.Title}>
                    <Title></Title>
                </View>
                <View style={styles.QuoteGen}>
                    <QuoteGen></QuoteGen>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('App', () => App);

/// Styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Title: {
        backgroundColor: 'green'
    },
    QuoteGen: {
        backgroundColor: 'orange'
    }
});
