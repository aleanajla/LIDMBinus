import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ScrollView} from 'react-native'

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const Register2 = () =>{
    return (
        <ScrollView>
        <View style={styles.page}>
            <View style={styles.up}>
                <Image
                    source={require('../../assets/images/logo2.png')}
                />
            </View>
            <View style={styles.data}>
                <Text style={styles.dataText}>DATA</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.textBold}>Perguruan Tinggi Asal</Text>
                <View style={{alignItems : 'center'}}>
                    <View style={styles.box}>
                        <TextInput style={styles.input} placeholder="Masukkan perguruan tinggi asal"/>
                    </View>
                </View>
            </View>
            <View style={styles.form}>
                <Text style={styles.textBold}>Program Studi</Text>
                <View style={{alignItems : 'center'}}>
                    <View style={styles.box}>
                        <TextInput style={styles.input} placeholder="Masukkan program studi"/>
                    </View>
                </View>
            </View>
            <View style={styles.form}>
                <Text style={styles.textBold}>Nomor Induk Mahasiswa (NIM)</Text>
                <View style={{alignItems : 'center'}}>
                    <View style={styles.box}>
                        <TextInput style={styles.input} placeholder="Masukkan NIM lengkap"/>
                    </View>
                </View>
            </View>
            <View style={styles.form}>
                <Text style={styles.textBold}>Nomor Induk Kependudukan (NIK)</Text>
                <View style={{alignItems : 'center'}}>
                    <View style={styles.box}>
                        <TextInput style={styles.input} placeholder="Masukkan NIK lengkap"/>
                    </View>
                </View>
            </View>
            <View style={styles.form}>
                <Text style={styles.textBold}>Tanggal Lahir</Text>
                <View style={{alignItems : 'center'}}>
                    <View style={styles.ttl}>
                        <View style={styles.box2}>
                            <TextInput style={styles.input} placeholder="tgl"/>
                        </View>
                        <View style={styles.box3}>
                            <TextInput style={styles.input} placeholder="bulan"/>
                        </View>
                        <View style={styles.box4}>
                            <TextInput style={styles.input} placeholder="tahun"/>
                        </View>
                    </View>
                </View>
            </View>
            {/* <View>
                <Text>Dengan ini saya menyetujui Ketentuan Penggunaan dan Kebijakan Privasi dari Kampus Merdeka</Text>
            </View> */}
        </View>
        </ScrollView>
    )
}

export default Register2;

const styles = StyleSheet.create({
    page:{
        // alignItems:'center'
    },
    up:{
        paddingTop : 22,
        alignItems: 'center'
    },
    data:{
        width : windowsWidth,
        backgroundColor : '#28527A',
        height : 48,
        justifyContent : 'center',
        alignItems : 'center',
    },
    dataText:{
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold'
    },
    form:{
        top : 53,
        marginBottom : 20
    },
    box:{
        backgroundColor : '#E5E5E5',
        width : 305,
        height : 40,
        borderRadius : 10,
        top : 5,
        paddingLeft : 25
    },
    textBold:{
        left : 47,
        fontSize : 16,
        fontWeight : 'bold',
        color : '#28527A'
    },
    input:{
        fontSize : 14,
        color : '#28527A66'
    },
    box2:{
        backgroundColor : '#E5E5E5',
        width : 77,
        height : 40,
        borderRadius : 10,
        top : 5,
        alignItems : 'center'
    },
    box3:{
        backgroundColor : '#E5E5E5',
        width : 117,
        height : 40,
        borderRadius : 10,
        top : 5,
        alignItems : 'center'
    },
    box4:{
        backgroundColor : '#E5E5E5',
        width : 87,
        height : 40,
        borderRadius : 10,
        top : 5,
        alignItems : 'center'
    },
    ttl:{
        flexDirection : 'row', 
        justifyContent : 'space-between', 
        // backgroundColor : 'yellow', 
        width : windowsWidth,
        paddingLeft : 47,
        paddingRight : 47,
    }

})
