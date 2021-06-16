import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity, Image, ImageBackground, Alert, SafeAreaView, StatusBar} from 'react-native';
import MyHeader from "../components/MyHeader";
import MapView, {Marker} from 'react-native-maps';
import axios from 'axios';

export default class ISSTrackerScreen extends Component {
    constructor() {
        super();
        this.state = {
            location: {}
        }
    }
    
    getIssLocation = ()=>{
        axios.get("https://api.wheretheiss.at/v1/satellites/25544")
        .then((response) => {
                this.setState({
                    location: response.data
                })
            }
        ).catch((error) => {
            Alert.alert(error.message);
        })
    }    

    componentDidMount() {
        this.getIssLocation();
    }
    
    render() {
        if(Object.keys(this.state.location).length === 0) {
            return(
                <View
                style = {{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style = {{fontWeight: "bold"}}>Loading...</Text>
                </View>
            )
        }

        else {
            return(
                <View style = {styles.container}>
                    <SafeAreaView style = {styles.safeArea}>

                        <ImageBackground 
                        source = {require('../assets/ISSbg.jpg')}
                        style = {styles.bgImage}>
                        <MyHeader title = "ISS Tracker"/>

                        <View style = {styles.mapContainer}>
                            <MapView
                            region = {{
                                latitude: this.state.location.latitude,
                                longitude: this.state.location.longitude,
                                latitudeDelta: 100,
                                longitudeDelta: 100
                            }}
                            style = {styles.map}>

                                <Marker 
                                coordinate = {{
                                    latitude: this.state.location.latitude,
                                    longitude: this.state.location.longitude
                                }}>
                                    <Image 
                                    style = {{height: 50, width: 50}}
                                    source = {require("../assets/iss_icon.png")}/>
                                </Marker>

                            </MapView>
                        </View>

                        </ImageBackground>
                        
                    </SafeAreaView>
                
                </View>
            )          
        }
    }
}

const styles = StyleSheet.create({
    conatainer: {
        flex: 1
    },
    safeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    map: {
        width: "100%",
        height: "100%"
    },
    mapContainer: {
        flex: 0.6
    },
});