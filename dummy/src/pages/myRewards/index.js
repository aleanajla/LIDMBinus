import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Platform, Dimensions, FlatList} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Profile } from '../../pages/index.js'
import Modal from 'react-native-modal'
import RewardsListView from '../../components/RewardsListView'
import { myRewardsData } from '../../assets/jsonData/myRewardsData'

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const myRewards = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    return(
        <ScrollView>
            <Modal
                animationType="slide" 
                transparent={true} 
                visible={modalVisible}
                hasBackdrop={true} 
                backdropOpacity={0.5}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)}}
                >
                    <View styles={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity onPress={()=> setModalVisible(!modalVisible)}>
                                <View style={styles.closeBtn}>
                                    <Image source = {require('../../assets/icons/closeBlack.png')}/>
                                </View>
                            </TouchableOpacity>
                            <Text style={styles.text4}><Text>Kode Voucher</Text></Text>
                        <TouchableOpacity
                            onPress={()=> setModalVisible(!modalVisible)}>
                            <View style={styles.voucher}>
                                <Text style={styles.closeTxt}>ABCSH1782</Text>
                                <Image source = {require('../../assets/icons/copy.png')}/>
                            </View>
                        </TouchableOpacity>
                        </View> 
                    </View>
            </Modal>
        <View style= {styles.outer}>
            <View style= {styles.header}>  
                <TouchableOpacity
                    onPress={()=>{navigation.pop()}}
                    >
                    <Image source = {require('../../assets/icons/arrowBackBlack.png')} />
                </TouchableOpacity>
                <Text style={{color:'#022E57',fontSize:25,fontWeight:'bold', marginLeft:80}}>Hadiah Saya</Text>
            </View>
            <View style= {styles.boxContent}>
                <RewardsListView
                    itemList = {myRewardsData}
                />
                {/* <View style={styles.eachBox}>
                    <Image source= {require('../../assets/icons/gojek.png')} style={styles.img}/>
                    <View style = {styles.ket}>
                        <Text style= {styles.company}>Gojek</Text>
                        <Text style={styles.details}>eVoucher Gofood 25k</Text>
                        <Text style={styles.untillDate}>Valid untill 29 September 2021</Text>
                    </View>
                    <TouchableOpacity onPress={()=> setModalVisible(true)}>
                        <View style = {styles.btnUse}>
                            <Text style= {styles.textUse}>Use</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.eachBox}>
                    <Image source= {require('../../assets/icons/gojek.png')} style={styles.img}/>
                    <View style = {styles.ket}>
                        <Text style= {styles.company}>Gojek</Text>
                        <Text style={styles.details}>eVoucher Gofood 50k</Text>
                        <Text style={styles.untillDate}>Valid untill 25 September 2021</Text>
                    </View>
                    <TouchableOpacity onPress={()=> setModalVisible(true)}>
                    <View style = {styles.btnUse}>
                        <Text style= {styles.textUse}>Use</Text>
                    </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.eachBox}>
                    <Image source={require('../../assets/icons/udemy.png')} style={styles.img}/>
                    <View style = {styles.ket}>
                        <Text style= {styles.company}>Udemy</Text>
                        <Text style={styles.details}>eVoucher Udemy 100k</Text>
                        <Text style={styles.untillDate}>Valid untill 20 August 2021</Text>
                    </View>
                    <TouchableOpacity onPress={()=> setModalVisible(true)}>
                    <View style = {styles.btnUse}>
                        <Text style= {styles.textUse}>Use</Text>
                    </View>
                    </TouchableOpacity>
                </View> */}
            </View>
        </View>
        </ScrollView>
    )
}

export default myRewards;

const styles = StyleSheet.create({
    outer:{
        padding:20
    },
    header:{
        flexDirection:'row',
        marginBottom : 10,
        alignItems : 'center'
    },
    boxContent:{
        alignItems: 'center',
        paddingTop:5,    
    },
    // eachBox:{
    //     flexDirection:'row',
    //     marginBottom:20,
    //     backgroundColor: '#FFFFFF',
    //     borderRadius:10,
    //     width:334,
    //     height:98,
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 2
    //     },
    //     shadowOpacity: 0.25,
    //     elevation:5,
    // },
    // ket:{
    //     marginLeft:15,
    //     justifyContent:'center'
    // },
    // company:{
    //     fontSize:12,
    //     color:'#022E57',
    //     fontWeight:'bold'
    // },
    // untillDate:{
    //     fontSize:10,
    //     marginTop:10,
    //     color:'#28527AB0'
    // },
    // img:{
    //     marginTop:15,
    //     marginLeft:15
    // },
    // details:{
    //     color:WARNA_SEKUNDER
    // },
    // btnUse:{
    //     backgroundColor:'#28527A',
    //     width:52,
    //     height:26,
    //     justifyContent:'center',
    //     borderRadius:10,
    //     marginTop:10,
    //     marginLeft:25
    // },
    // textUse:{
    //     color:'#FFFFFF',
    //     textAlign:'center'
    // },
    // centeredView :{
    //     flex: 1,
    //     justifyContent: "center",
    //     width: windowsWidth,
    //     height: windowsWidth,
    //     alignItems: "center",
    // },
    // modalView: {
    //     paddingTop:20,
    //     margin:40,
    //     backgroundColor: "white",
    //     borderRadius: 20,
    //     alignItems: "center",
    //     justifyContent: "center",
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 2
    //     },
    //     shadowOpacity: 0.25,
    //     elevation:5,
    // },
    // text4:{
    //     fontSize : 22,
    //     color : '#022E57',
    //     fontWeight : 'bold',
    //     textAlign : 'center'
    // },
    // voucher:{
    //     backgroundColor : '#F6F5F5',
    //     borderRadius : 10,
    //     justifyContent : 'space-between',
    //     alignItems : 'center',
    //     paddingLeft : 22,
    //     width:235,
    //     height:36,
    //     marginTop : 13,
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 2
    //     },
    //     shadowOpacity: 0.25,
    //     elevation:5,
    //     flexDirection : 'row',
    //     paddingRight : 18,
    //     marginTop : 25
    // },
    // closeTxt:{
    //     color : '#28527A',
    //     fontSize : 22,
    // },
    // closeBtn:{
    //     alignItems : 'flex-end',
    //     width : 235,
    //     marginBottom : 10
    // }
})