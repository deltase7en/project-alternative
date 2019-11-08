import MapView, { Marker, PROVIDER_GOOGLE, AnimatedRegion } from 'react-native-maps'
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 0;
const LONGITUDE = 0;
class MapLocation extends Component{

    constructor(props){
        super(props)

        this.state = {
            latitude: LATITUDE,
            longitude: LONGITUDE,

            coordinate: new AnimatedRegion({
                latitude:LATITUDE,
                longitude:LONGITUDE,
                latitudeDelta:0,
                longitudeDelta:0
            })
        };
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,

                    error:null
                })
            },

            error => this.setState({ error: error.message}),
            { enabledHighAccuracy: true, timeout: 200000}
        )
        const { coordinate } = this.state
        this.watchID = navigator.geolocation.watchPosition(
            position => {
                const { latitude, longitude } = position.coords
                this.setState({latitude, longitude
                })
            },

            error => console.log(error),
            { enabledHighAccuracy:true, timeout: 20000, distanceFilter: 10}
        )
    }
    
    getMapRegion = () => ({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      });
    render(){
        return(
            <View style={styles.container}>
                <MapView style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    showUserLocation
                    followUserLocation
                    initialRegion={this.getMapRegion()}
                />
                <Marker.Animated coordinate={this.getMapRegion()}>
                    
                </Marker.Animated>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
})

export default MapLocation;