import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { Bell1, User} from '../../assets'

const Home = () => {
    return (
        <View style={styles.pages}>
            <View style = {styles.header}>
                <Bell1 style = {styles.bell} />
                <User style= {styles.user}/>
            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    pages : {
        flex : 1,
        backgroundColor : '#F6F5F5'
    },
    bell:{
        
    },
    header :{
        flexDirection : 'row'
    },
    user: {
        
    }
})
