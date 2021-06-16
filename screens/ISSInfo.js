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
        });
    }    

    componentDidMount() {
        this.getIssLocation();
        try{

        }
        catch{

        }
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
                <View style = {styles.infoContainer}>
                   <Text style = {styles.infoText}>Latitude: {this.state.location.latitude}</Text>
                   <Text style = {styles.infoText}>Longitude: {this.state.location.longitude}</Text>
                   <Text style = {styles.infoText}>Velocity: {this.state.location.velocity}</Text>
                   <Text style = {styles.infoText}>Altitude: {this.state.location.altitude}</Text>
                </View>
            )          
        }
    }
}

const styles = StyleSheet.create({
    infoText: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold"
    },
    infoContainer: {
        flex: 0.2,
        backgroundColor: 'white',
        marginTop: -10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    }
});