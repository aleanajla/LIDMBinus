import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Share} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Home } from '../../pages/index.js'


const DetailAnnouncement = ({route}) => {

    //handle share

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: "Text untuk di share di sini",
            });
            if(result.action === Share.sharedAction){
                if(result.activityType){

                }else{

                }
            }
        }catch (error){
            alert(error.message);
        }
    }

    const navigation = useNavigation();
    const{id, date, title, description} = route.params;
    return(
        <ScrollView>
            <View style = {styles.detailCon}>
                <View style={{flexDirection:'row', justifyContent:"space-between", alignItems :'center'}}>
                    <TouchableOpacity
                        onPress={()=>{navigation.goBack()}}
                        >
                            <Image source = {require('../../assets/icons/arrowBackBlack.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onShare}
                    >
                        <Image source={require('../../assets/icons/sharee.png')}/>
                        
                    </TouchableOpacity>
                </View>
                <View style = {styles.newsCon}>
                    <Text style = {styles.date}>{date}</Text>
                    <Text style = {styles.title}>{title}</Text>
                    <Text style ={styles.content}>{description}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailAnnouncement;

const styles = StyleSheet.create({
    detailCon: {
        padding: 20,

    },
    newsCon:{
        padding:20
    },
    date:{
        fontSize: 15,
        fontWeight: '600',
        color: '#28527AB2'
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: WARNA_SEKUNDER
    },
    pic:{
        width:304,
        height:146,
        marginTop:10,
        marginBottom:20
    },
    content:{
        color: '#000000D6',
        textAlign: 'justify',
        marginTop:15
    }
})