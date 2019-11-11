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
import Icon from 'react-native-vector-icons/Ionicons'
import Category from '../components/Category'

const { height, width} = Dimensions.get('window')
class Explore extends Component{
    render(){
        return(
            <ScrollView scrollEventThrottle={16}>
                <View style ={{flex: 1, backgroundColor:'white', paddingTop:90}}>
                    <Text style={{fontSize:24, fontWeight:'700', paddingHorizontal: 30}}>
                        What can we help you find, Jean?
                    </Text>
                    <View style={{height: 130, marginTop: 20}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Category imageUrl={require('../assets/MUVLUV-Icon.png')} name="Home"/>
                            <Category imageUrl={require('../assets/MUVLUV-Icon.png')} name="Profile"/>
                            <Category imageUrl={require('../assets/MUVLUV-Icon.png')} name="Map"/>
                            <Category imageUrl={require('../assets/MUVLUV-Icon.png')} name="Awards"/>
                        </ScrollView>
                    </View>
                    <View style={{marginTop: 40, paddingHorizontal: 20}}>
                        <Text style={{fontSize:24, fontWeight: '700', textAlign:'center'}}>
                            Welcome to Project Metis
                        </Text>
                        <Text style={{fontWeight:'100', marginTop:10}}>
                            Você só se torna melhor que as outras pessoas se doa um pouco de si para ajudar ao próximo.
                        </Text>
                        <View style={{width: width - 40, height: 200, marginTop: 20}}>
                            <Image 
                            style={{flex:1, height: null, width: null, resizeMode:'cover', borderRadius:5, borderWidth:1, borderColor:'#dddddd'}}
                            source={require('../assets/MUVLUV-Icon.png')}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default Explore;