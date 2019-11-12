import React, { Component } from 'react';
import{
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from 'react-native'
import Category from '../components/Category'

const { height, width} = Dimensions.get('window')
class Explore extends Component{
    render(){
        return(
            <ScrollView scrollEventThrottle={16}>
                <View style ={{flex: 1, paddingTop:60}}>
                <View style={{marginTop: 40}}>
                    <View style={{borderRadius:15, shadowOffset:{width:0, height:2}, shadowOpacity:0.1, shadowRadius:13, shadowColor:"#2F2F2F", padding: 20, marginBottom:16, backgroundColor:'white', flex:1, alignItems:'center'}}>
                        <View style={{width: width - 40, height: 200, marginTop: 20}}>
                            <Image 
                            style={{flex:1, height: null, width: null, resizeMode:'cover', borderRadius:5, borderWidth:1, borderColor:'#dddddd'}}
                            source={require('../assets/HomeHome.png')}/>
                        </View>
                        <Text style={{fontSize:24, fontWeight: '700', textAlign:'center', paddingTop:20}}>
                            Welcome to Project Metis
                        </Text>
                        <Text style={{fontWeight:'100', marginTop:10}}>
                            Você só se torna melhor que as outras pessoas se doa um pouco de si para ajudar ao próximo.
                        </Text>
                        </View>
                    </View>
                    <View style={{borderRadius:15, shadowOffset:{width:0, height:2}, shadowOpacity:0.1, shadowRadius:13, shadowColor:"#2F2F2F", padding: 20, marginBottom:16, backgroundColor:'white', margin:20}}>
                        <Text style={{fontSize:24, fontWeight:'700', paddingHorizontal: 30, paddingTop:20, paddingBottom:20}}>
                            What can we help you find, Jean?
                        </Text>
                        <View style={{height: 130, marginTop: 20, backgroundColor:"white"}}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <Category imageUrl={require('../assets/Home.jpg')} name="Home"/>
                                <Category imageUrl={require('../assets/ProfileHead.jpg')} name="Profile"/>
                                <Category imageUrl={require('../assets/Map.jpeg')} name="Map"/>
                                <Category imageUrl={require('../assets/Award.jpg')} name="Awards"/>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default Explore;