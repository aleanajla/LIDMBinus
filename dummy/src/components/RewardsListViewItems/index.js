import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,Dimensions } from 'react-native';
import { WARNA_SEKUNDER } from '../../utils/constants';

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const RewardsListViewItems = ({id, company, details, deadline, image_url}) => (
    <View style={styles.eachBox}>
         <Image source={{uri: image_url}} style={styles.img}/>
        <View style = {styles.ket}>
            <Text style= {styles.company}>{company}</Text>
            <Text style={styles.details}>{details}</Text>
            <Text style={styles.untillDate}>{deadline}</Text>
        </View>
        {/* <TouchableOpacity onPress={()=> setModalVisible(true)}> */}
        <View style = {styles.btnUse}>
            <Text style= {styles.textUse}>Use</Text>
        </View>
        {/* </TouchableOpacity> */}
    </View>
);

export default RewardsListViewItems;

const styles = StyleSheet.create({
    eachBox:{
        flexDirection:'row',
        marginBottom:10,
        backgroundColor: '#FFFFFF',
        borderRadius:10,
        width:334,
        height:98,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        elevation:5,
        marginLeft : 5,
        marginRight: 5,
        marginTop : 5
    },
    boxContent:{
        margin:10,
        // marginTop:15,
        alignItems: 'center',
        paddingTop:20,    
    },
    ket:{
        marginLeft:15,
        justifyContent:'center'
    },
    company:{
        fontSize:12,
        color:'#022E57',
        fontWeight:'bold'
    },
    untillDate:{
        fontSize:10,
        marginTop:10,
        color:'#28527AB0'
    },
    img:{
        marginTop:15,
        marginLeft:15,
        width : 69,
        height : 69,

    },
    details:{
        color:WARNA_SEKUNDER
    },
    btnUse:{
        backgroundColor:'#28527A',
        width:52,
        height:26,
        justifyContent:'center',
        borderRadius:10,
        marginTop:10,
        marginLeft:25
    },
    textUse:{
        color:'#FFFFFF',
        textAlign:'center'
    },
    centeredView :{
        flex: 1,
        justifyContent: "center",
        width: windowsWidth,
        height: windowsWidth,
        alignItems: "center",
    },
    modalView: {
        paddingTop:20,
        margin:40,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        elevation:5,
    },
    text4:{
        fontSize : 22,
        color : '#022E57',
        fontWeight : 'bold',
        textAlign : 'center'
    },
    voucher:{
        backgroundColor : '#F6F5F5',
        borderRadius : 10,
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingLeft : 22,
        width:235,
        height:36,
        marginTop : 13,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        elevation:5,
        flexDirection : 'row',
        paddingRight : 18,
        marginTop : 25
    },
    closeTxt:{
        color : '#28527A',
        fontSize : 22,
    },
    closeBtn:{
        alignItems : 'flex-end',
        width : 235,
        marginBottom : 10
    }
})