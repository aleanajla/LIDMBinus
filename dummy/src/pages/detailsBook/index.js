import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Share } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { News } from '../../pages/index.js'

const DetailsBook = ({route}) => {
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
    const {id, title, author, image_url, desc}  = route.params;
    return(
        <ScrollView>
            <View style={styles.page}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={()=>{navigation.goBack()}}
                    >
                        <Image source = {require('../../assets/icons/arrowBackBlue.png')} style={styles.img1}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onShare}
                    >
                        <Image source={require('../../assets/icons/shareBlue.png')}/>
                        
                    </TouchableOpacity>
                </View>
                <View style={styles.header}>
                    <View style={styles.left}>
                        <Image source={{uri: image_url}} style={styles.images}/>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.author}>{author}</Text>
                        <TouchableOpacity
                        onPress = {()=>{
                            navigation.navigate('MyBooks',{type:''})
                        }}> 
                            <View style={styles.add}>
                                <Text style={styles.addText}>Add to Libary</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.desc}>{desc}</Text>
            </View>
        </ScrollView>
    )
}

export default DetailsBook;

const styles = StyleSheet.create({
    page:{
        paddingTop : 20,
        paddingLeft : 17,
        paddingRight : 17
    },
    header:{
        flexDirection : 'row',
        marginBottom : 12,
        paddingTop : 3,
        paddingBottom : 3,
        marginRight : 10,
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    left:{
        width : '40%',
        // backgroundColor : 'blue',
        justifyContent : 'center',
        alignItems : 'center'
    },
    right:{
        width : '60%'
    },
    title:{
        width : 200,
        paddingLeft : 10,
        fontWeight : 'bold',
        fontSize : 20,
        color : '#28527A'
    },
    author:{
        paddingLeft : 10,
        fontSize : 18,
        color : '#28527A8C'
    },
    add:{
        marginLeft : 10,
        marginTop : 4,
        backgroundColor : '#FAD586',
        width : 112,
        height : 35,
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center'
    },
    addText:{
        fontSize : 15,
        color : '#28527A',
        fontWeight : 'bold'
    },
    desc:{
        fontSize : 14,
        color : '#00000080',
        paddingTop : 17,
        paddingLeft : 20,
        paddingRight : 15,
        textAlign : "justify"
    },
    images:{
        width : 111,
        height : 163
    }

})