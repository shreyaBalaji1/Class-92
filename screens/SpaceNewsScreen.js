import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import MyHeader from "../components/MyHeader";

export default class SpaceNewsScreen extends Component {
    render() {
        return(
            <View>
                <MyHeader title = "Space News"/>
            </View>
        )
    }
}