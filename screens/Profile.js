import React, { Component } from 'react'
import {View, Text, Image} from 'react-native'

import MenuButton from '../components/MenuButton'

class Profile extends Component {
    render(){
        return(
            <View style={{height: 1000, backgroundColor:"#461C5D"}}>
                <View style={{marginTop:50, marginLeft:24, marginRight:24, marginBottom:70}}>
                    <Image style={{marginLeft:150, marginTop:50, height:120, width:120, borderRadius: 50}} source={require("../assets/MUVLUV-Icon.png")}/>
                    <Text style={{fontSize:22, marginLeft:150, marginTop:12, color:"white"}}>
                        Jean Magno
                    </Text>
                    <Text style={{fontSize:16, marginLeft:198, marginTop:4, marginBottom:30, color:"white"}}>
                        4.5
                    </Text>
                    <View style={{marginTop:60, paddingBottom:30, flex:2, flexDirection:'row', alignItems:'center'}}>
                        <Image style={{height:60, width: 60}} source={require("../assets/Awards.png")}/>
                        <Text style={{marginTop:-20, marginLeft:20, fontSize:18, color:"white"}}>
                            Awards
                        </Text>
                        <Text style={{marginTop:25, marginLeft:-61, fontSize:16, color:"#50D9EA"}}>
                            Available
                        </Text>
                    </View>
                    <View style={{marginTop:60, paddingBottom:30, flex:2, flexDirection:'row', alignItems:'center'}}>
                        <Image style={{height:60, width: 60}} source={require("../assets/Avatar.jpg")}/>
                        <Text style={{marginTop:-20, marginLeft:20, fontSize:18, color:"white"}}>
                            Edit Profile
                        </Text>
                        <Text style={{marginTop:25, marginLeft:-87, fontSize:16, color:"#50D9EA"}}>
                            Edit
                        </Text>
                    </View>
                    <View style={{marginTop:60, paddingBottom:30, flex:2, flexDirection:'row', alignItems:'center'}}>
                        <Image style={{height:60, width: 60}} source={require("../assets/Score.png")}/>
                        <Text style={{marginTop:-20, marginLeft:20, fontSize:18, color:"white"}}>
                            Rating
                        </Text>
                        <Text style={{marginTop:25, marginLeft:-52, fontSize:16, color:"#50D9EA"}}>
                            4.9
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Profile;