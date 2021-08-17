import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Magang, Profile } from '../../pages/index.js'

const DetailsProgram = () =>{
    const navigation = useNavigation();
    return(
        <ScrollView>
        <View style={styles.pages}>
            <View style={styles.square}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Magang',{type:''});}}> 
                        <Image source = {require('../../assets/icons/arrowBack.png')} style={styles.img1}/>
                    </TouchableOpacity>
                    <Image source = {require('../../assets/icons/info_white.png')} style={styles.img2}/>
                    <Image source = {require('../../assets/icons/share_white.png')} style={styles.img2}/>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.title}>Artificial Intelligence Intern</Text>
                    <Text style={styles.desc}>Lazada</Text>
                    <Text style={styles.desc}>Kota Jakarta Selatan</Text>
                    <Text style={styles.desc}>20 SKS - 5 Bulan</Text>
                </View>
                <View style={styles.conDaftar}>
                    <Text style={styles.daftar}>Daftar</Text>
                </View>
            </View>
            <View style={styles.certif}>
                <View style={styles.left}>
                    <Image source = {require('../../assets/icons/checkGreen.png')} style={{width: 28, height: 28}}/>
                </View>
                <View style={styles.right}>
                    <Text style={styles.title2}>Certified</Text>
                    <Text style={styles.desc2}>Konversi SKS dan kualitas kegiatan dijamin oleh tim Kemendikbudristek</Text>
                </View>
            </View>
            <View style={styles.certif}>
                <View style={styles.left}>
                    <Image source = {require('../../assets/images/portfolio.png')} style={{width: 35, height: 35}}/>
                </View>
                <View style={styles.right}>
                    <Text style={styles.title2}>Pekerjaan ini Kadang Remote</Text>
                    <Text style={styles.desc2}>Kamu akan ada jadwal masuk ke kantor dan  bekerja dari manapun</Text>
                </View>
            </View>
            <View style={styles.box}>
                <View style={styles.duration}>
                    <Text style={styles.title1}>Duration</Text>
                    <Text style={styles.durationText}>23 Aug 2021 - 21 Jan 2022</Text>
                    <Text style={styles.durationText}>5 Bulan</Text>
                </View>
                <View style={styles.description}>
                    <Text style={styles.title1}>Description</Text>
                    <Image source = {require('../../assets/icons/download.png')} style={{width: 21, height: 21, top : 5}}/>
                </View>
            </View>
            <View style={styles.description2}>
                <Text style={styles.title1}>Description</Text>
                <Text style={styles.title3}>Program Magang Lazada Indonesia Customer Care Team</Text>
                <Text style={styles.desc3}>Program Magang Lazada Indonesia Customer Care Team bertujuan untuk memberikan pengembangan kepada mahasiswa/i menggunakan 70-20-10 Learning & Development framework. Mahasiswa akan mendapatkan pengembangan melalui pendampingan intensif selama on-the-job training (70%) dengan disertai oleh dedicated mentor yang akan membantu mahasiswa dalam memberikan pendampingan maupun feedback terkait dengan kinerja mereka (20%) yang akan didukung dengan program kelas pengembangan soft skills yang relevan dengan kebutuhan mahasiswa di dunia kerja (10%).</Text>
            </View>
            <View style={styles.criteria}>
                <Text style={styles.title1}>Criteria</Text>
                <Text style={styles.desc3}>1. Mahasiswa perguruan tinggi aktif yang menempuh minimal Semester 5</Text>
                <Text style={styles.desc3}> 2. Berasal dari Fakultas Ilmu Komputer atau Sistem Informasi dengan IPK Minimal 3.5</Text>
            </View>
        </View>
        </ScrollView>
    )
}

export default DetailsProgram;

const styles = StyleSheet.create({
    pages:{
        backgroundColor : '#F6F5F5'
    },
    square:{
        height: 235,
        width: '100%',
        backgroundColor: '#28527A',
        borderBottomLeftRadius : 25,
        borderBottomRightRadius : 25,
        paddingLeft : 20,
        paddingRight : 20,
        paddingTop : 19
    },
    header:{
        flexDirection : 'row',
        marginBottom : 12
    },
    img1:{
        width : 32,
        height : 32
    },
    img2:{
        width: 32,
        height : 32,
        marginRight : 7,
        left : 245
    },
    detail:{
        left : 18
    },
    title:{
        fontSize : 20,
        color : '#FFFFFF',
        fontWeight : 'bold'
    },
    desc:{
        color : '#FFFFFF',
        fontSize : 15,
        marginTop : 2
    },
    conDaftar:{
        top : 18,
        left : 18,
        backgroundColor : '#FAD586',
        width : 90,
        height : 30,
        borderRadius : 10,
        alignItems :'center',
        justifyContent : 'center'
    },
    daftar:{
        color : '#28527A',
        fontSize : 15,
        fontWeight : 'bold',
    },
    certif:{
        height: 73,
        width: 350,
        backgroundColor: '#E5E5E5',
        marginTop : 12,
        left : 21,
        borderRadius : 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:10,
        flexDirection : 'row'
    },
    left:{
        width : '18%',
        height : '100%',
        justifyContent : 'center',
        alignItems : 'center'
    },
    right:{
        width: '80%',
        top : 4
    },
    title2:{
        fontWeight : 'bold',
        color : '#28527A',
        fontSize : 18
    },
    desc2:{
        color : '#28527A',
        fontSize : 13
    },
    box:{
        flexDirection : 'row',
        width : '85%',
        left : 20,
        top : 12,
        marginBottom : 30
    },
    duration:{
        width : '50%',
        height : 70,
        backgroundColor : '#E5E5E5',
        marginRight : 20,
        alignItems : 'center',
        borderRadius : 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:10,
    },
    description:{
        width : '50%',
        height : 70,
        backgroundColor : '#E5E5E5',
        marginRight : 18,
        alignItems : 'center',
        borderRadius : 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, 
            height: 4
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation:10,
    },
    title1:{
        color : '#28527A',
        fontWeight : 'bold',
        fontSize : 17,
        top : 5,
        marginBottom : 5
    },
    durationText:{
        fontSize : 12,
        color : '#28527A',
    },
    description2:{
        left : 20,
        width : 360
    },
    title3:{
        fontSize : 14,
        color : "#28527A"
    },
    desc3:{
        color : '#00000080',
        fontSize : 13
    },
    criteria:{
        top : 8,
        left : 20,
        marginBottom : 30,
        width : 360
    }
    
})