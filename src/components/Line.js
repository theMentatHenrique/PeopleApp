import React from "react";
import {View,Text,StyleSheet} from 'react-native';

const Line=({label="",content=""})=>{

    return(
        <View style={Styles.line}>
        <Text style={[Styles.cell,
            Styles.label,
            content.length<10 ? Styles.longLabel :label

            ]}>{label}</Text>
        <Text style={[Styles.cell,Styles.content]}>{content}</Text>
    </View>
    );
}

const Styles=StyleSheet.create({
    label:{
        fontWeight:'bold' ,
        flex:1,
        color:'#8a2be2',
        fontSize:15

      },
      
      cell:{
          fontSize:18,
          paddingLeft:5,

      },

      line:{
          flexDirection:'row',
          paddingTop:3,
          paddingBottom:3,
      },

      content:{
        flex:3,
        fontSize:16,
        color:'#A9A9A9',
        overflow:'scroll'
      },

      longLabel:{
        fontSize:13,
      }


    });

    export default Line;