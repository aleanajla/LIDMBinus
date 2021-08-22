import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { Home } from '../../pages/index.js'


const DetailAnnouncement = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <View style = {styles.detailCon}>
                <TouchableOpacity
                    onPress={()=>{navigation.navigate('Home',{type:''});}}
                    >
                        <Image source = {require('../../assets/icons/arrowBackBlack.png')} />
                    </TouchableOpacity>
                    <View style = {styles.newsCon}>
                        <Text style = {styles.date}>Tuesday, 11 May 2021</Text>
                        <Text style = {styles.title}>Pembukaan Pendaftaran Mobilitas Mahasiswa Internasional – IISMA</Text>
                        <Text style ={styles.content}>Indonesian International Student Mobility Awards (IISMA) atau Beasiswa Mobilitas 
                        Internasional Mahasiswa Indonesia merupakan salah satu program Direktorat Belmawa yang membuka kesempatan bagi 
                        mahasiswa S1 dari perguruan tinggi di Indonesia untuk mengikuti proses pembelajaran di perguruan tinggi terkemuka
                        di dunia untuk memperkaya dan meningkatkan wawasan serta kompetensinya di dunia nyata sesuai dengan minat dan cita-citanya.
                        Selama belajar 1 semester di perguruan tinggi mitra luar negeri, mahasiswa akan mengambil 3-4 mata kuliah dari 10 mata 
                        kuliah yang ditawarkan perguruan tinggi mitra luar negeri dan berkuliah bersama mahasiswa asing lainnya di dalam kelas yang sama.
                        Kepmen Nomor 74/P/2021 memberikan jaminan pengakuan 20 SKS untuk kegiatan pembelajaran di program kampus merdeka. Kegiatan 
                        mahasiswa selama satu semester di perguruan tinggi mitra internasional akan mendapatkan pengakuan setara maksimal 20 sks 
                        di perguruan tinggi asal mahasiswa di Indonesia.Mahasiswa yang mengikuti program IISMA tidak boleh mengambil program 
                        MBKM Kemendikbud dalam waktu yang bersamaan (tidak double funding). Mahasiswa bidik misi diijinkan untuk mengikuti 
                        program IISMA di perguruan tinggi mitra luar negeri dengan syarat beasiswa bidik misinya akan dihentikan sementara.
                        Sebagai persyaratan, mahasiswa yang dapat mengikuti IISMA adalah mahasiswa yang terdaftar pada semester 4 
                        sampai dengan 7 pada perguruan tinggi di bawah Kemendikbud dan PTS di wilayah LLDIKTI. Selain itu, 
                        mahasiswa juga harus memenuhi persyaratan kemahiran Bahasa Inggris serta rekomendasi dari pimpinan perguruan tinggi asal.
                        </Text>
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