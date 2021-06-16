import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity, SafeAreaView, Platform, StatusBar, ImageBackground} from 'react-native';
//import{Card,Header,Icon} from 'react-native-elements';
//import firebase from 'firebase';
import MyHeader from "../components/MyHeader";

export default class HomeScreen extends Component {
    render() {
        return(
            <SafeAreaView style = {styles.safeArea}>
                <MyHeader title = "App Name"/>
                
                <TouchableOpacity style = {styles.titleBar} onPress = {() => {this.props.navigation.navigate("ISSTracker")}}>
                    <Text style = {styles.titleText}>ISS Tracker</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.titleBar}  onPress = {() => {this.props.navigation.navigate("MeteorTracker")}}>
                    <Text style = {styles.titleText}>Meteor Information</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.titleBar}  onPress = {() => {this.props.navigation.navigate("SpaceNews")}}>
                    <Text style = {styles.titleText}>Space News</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText : {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    }
})