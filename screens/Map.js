import MapView, { Marker, PROVIDER_GOOGLE, AnimatedRegion } from 'react-native-maps'
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import MenuButton from '../components/MenuButton'

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = -22.9355145;
const LONGITUDE = -43.184392599999995;
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
            (position) => {
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
                this.setState({latitude, longitude})
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
                <MenuButton navigation={this.props.navigation}/>
                    <MapView style={styles.map}
                        showUserLocation={true}
                        followUserLocation={true}
                        initialRegion={this.getMapRegion()}
                        showMyLocationButton={true}
                    >
                    <Marker coordinate={this.getMapRegion()}/>
                    </MapView>
                    <View style={{borderRadius:15, shadowOffset:{width:0, height:2}, shadowOpacity:0.1, shadowRadius:13, shadowColor:"#2F2F2F", padding: 20, marginBottom:16, backgroundColor:'white', margin:20}}>
                    </View>
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
    },
    map: {
        
        flex:1,
        height:500, 
        width:500,
        alignItems:'center'
    }
})

export default MapLocation;