/// Local JSON File
import quotes from './quotes.json';

import React, {Component} from 'react';
import {AppRegistry, Alert, StyleSheet, Button, View, Text, Title } from 'react-native';

export default class QuoteGen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: quotes.quotes,
            quoteNum: 1
            //maxQuoteNum: 0
        }
        this.onPress.bind(this)
    }

    onPress(props) {
        this.setState({
            quoteNum: Math.floor(Math.random() * 9)
        })
    }

    render() {
        return(
            <View>
                <Button
                onPress={this.onPress.bind(this)}
                title="Press Me"
                />
                <Text> {/* Will possibly become its own component (DisplayedQuote) */ }
                {this.state.quote[this.state.quoteNum]}
                </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('QuoteGen', () => QuoteGen);
