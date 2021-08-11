import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const News = () => {
    return (
        <View>
            <View style = {styles.conHeader}>
                <View style = {styles.optHeader}>
                    <Text style = {styles.titleHeader}>Dashboard</Text>
                </View>

                <View style = {styles.optHeader}>
                    <Text style = {styles.titleHeader}>Program</Text>
                </View>

                <View style = {styles.optHeader2}>
                    <Text style = {styles.titleHeader2}>News</Text>
                </View>
            </View>
        </View>
    )
}

export default News;

const styles = StyleSheet.create({
    conHeader: {
        flexDirection: 'row',
        padding:15
    },
    optHeader: {
        // padding: 20,
        margin:8,
        // backgroundColor : '#ffffff',
        width: 105,
        height: 35,
        borderRadius:20,
        alignItems: 'center'
    },
    titleHeader: {
        color: '#28527A',
        marginTop: 6
    },
    titleHeader2: {
        color: '#28527A',
        marginTop:6,
        fontWeight: 'bold'
    },
    optHeader2: {
        backgroundColor: '#FAD586',
        margin: 8,
        width: 105,
        height: 35,
        borderRadius:20,
        alignItems: 'center'
    }
})
