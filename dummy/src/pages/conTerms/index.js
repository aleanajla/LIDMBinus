import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { useNavigation } from '@react-navigation/core'
import { BrowseAllRewards } from '../../pages/index.js'

const ConTerms = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
            <View style={styles.pages}>
                <TouchableOpacity onPress={()=>{navigation.navigate('BrowseAllRewards',{type:''});}}>
                    <Image source = {require('../../assets/icons/arrowBackBlue.png')} style={{marginTop : 15, left:17, width : 34, height:34}}/>
                </TouchableOpacity>
                <View style={styles.logo}>
                    <Image source = {require('../../assets/icons/gojek2.png')}/>
                </View>
                <View style={styles.box}>
                    <Text style={styles.pt}>Gojek</Text>
                    <Text style={styles.voucher}>eVoucher Gofood 25k</Text>
                    <View style={styles.point}>
                    <View style={styles.angka}>
                        <Text style={styles.text1}>100</Text>
                    </View>
                    <View style={styles.points}>
                        <Text style={styles.text2}>Points</Text>
                    </View>
                </View>
                <Text style={styles.tukar}>Tukarkan point reward dengan eVoucher Shopee dengan nominal Rp.25.000,00 </Text>
                <Text style={styles.syarat}>Syarat & Ketentuan</Text>
                <Text style={styles.text}>- Potongan harga sebesar Rp.25.000,00 tanpa ada minimum transaksi</Text>
                <Text style={styles.text}>- Potongan harga berlaku pada produk dengan harga normal</Text>
                <Text style={styles.text}>- Telah aktivasi dompet digital ShopeePay, karena pada umumnya memiliki ketentuan voucher bisa digunakan hanya menggunakan ShopeePay.</Text>
                <Text style={styles.text}>- Jika voucher telah di klaim, harus menyelesaikan order pada Shopee Food.</Text>
                <View style={styles.boxRedeem}>
                    <Text style={styles.reedem}>Reedem</Text>
                </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ConTerms;

const styles = StyleSheet.create({
    logo:{
        height : 180,
        // backgroundColor : 'grey',
        justifyContent : 'center',
        alignItems : 'center'
    },
    box:{
        backgroundColor : '#28527A',
        height : 557,
        // borderRadius : 20,
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20,
        paddingTop : 20,
        paddingLeft : 30
    },
    pt:{
        fontSize : 20,
        color : '#FAD586',
        fontWeight : 'bold'
    },
    voucher:{
        fontSize : 24,
        color : 'white',
        fontWeight : 'bold',
        paddingTop : 6
    },
    point:{
        flexDirection : 'row',
        alignItems : 'center',
        paddingTop : 1
    },
    text1:{
        color : 'white',
        fontSize : 18,
        fontWeight : 'bold'
    },
    text2:{
        color : 'white',
        fontSize : 14,
        paddingLeft : 4
    },
    tukar:{
        color : 'white',
        width : 330,
        paddingTop : 25,
        fontSize : 15
    },
    syarat:{
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold',
        paddingTop : 16,
        marginBottom : 16,
        
    },
    text:{
        fontSize : 15,
        width : 335,
        color: 'white',
        paddingTop : 2
    },
    reedem:{
        fontSize : 20,
        fontWeight : 'bold',
        color : '#022E57'
    },
    boxRedeem:{
        backgroundColor : '#FAD586',
        width : 308,
        marginTop : 75,
        height : 41,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 10,
        marginLeft : 12
    }
})