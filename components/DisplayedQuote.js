import React, {Component} from 'react';
import {AppRegistry, Alert, StyleSheet, Button, View, Text, Title } from 'react-native';

class DisplayedQuote extends React.Component {
    render() {
        return(
            <View style={styles.quoteGen}>
                <Text>
                {QuoteGem.state.quote[QouteGen.state.quoteNum]}
                </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent("DisplayedQuote", () => DisplayedQuote); 
