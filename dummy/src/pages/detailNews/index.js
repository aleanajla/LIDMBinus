import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { News } from '../../pages/index.js'

const DetailNews = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <View style = {styles.detailCon}>
                <TouchableOpacity
                   onPress={()=>{navigation.navigate('News',{type:''});}}
                >
                    <Image source = {require('../../assets/icons/arrowBackBlack.png')} />
                </TouchableOpacity>
                <View style = {styles.newsCon}>
                    <Text style = {styles.date}>Thursday, 20 Agustus 2020</Text>
                    <Text style = {styles.title}>Kampus Merdeka ala Mas Menteri Nadiem Makarim, Seperti Apa Konsepnya?</Text>
                    <Image source={require('../../assets/images/nadiem.png')} style = {styles.pic}/>
                    <Text style ={styles.content}>Menteri Pendidikan dan Kebudayaan Republik Indonesia, Nadiem Makarim, 
                        baru saja mengeluarkan lima permendikbud mengenai landasan penerapan kebijakan Merdeka Belajar dan Kampus Merdeka.
                        Dalam praktiknya, Nadiem mengatakan bahwa inovasi dan kreativitas perguruan tinggi sangat penting dalam menjalankan 
                        kebijakan Kampus Merdeka. Di Jakarta, salah satu universitas swasta mengklaim telah menerapkan konsep Kampus Merdeka sejak lama, 
                        jauh sebelum kebijakan tersebut dikeluarkan oleh Menteri Nadiem. "Di kampus Budi Luhur, mahasiswa merdeka untuk memilih kuliah sesuai hobi. 
                        Tentunya hal tersebut ditopang dengan kurikulum yang merdeka juga. Sehingga mahasiswa dapat memiliki banyak keahlian di luar jurusan yang ia pilih,"
                        kata Rektor Universitas Budi Luhur, Wendi Usino, M.Sc., MM dalam siaran pers.
                        Tak hanya itu, Wendi juga mengatakan bahwa kebebasan memilih jadwal kuliah dapat disesuaikan dengan kebutuhan mahasiswa. "Proses belajar juga dapat 
                        ditentukan oleh si mahasiswa sendiri. Kampus yang menerapkan blended learning ini memberikan kemudahan belajar bagi para mahasiswanya. Jadi, dimanapun,
                        kapanpun, dan dalam kondisi apapun mereka tidak ketinggalan pelajaran," tambahnya.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailNews;

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
        textAlign: 'justify'
    }

})