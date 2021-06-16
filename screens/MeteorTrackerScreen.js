import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import MyHeader from "../components/MyHeader";

export default class MeteorTrackerScreen extends Component {
    render() {
        return(
            <View>
                <MyHeader title = "Meteor Tracker"/>
            </View>
        )
    }
}