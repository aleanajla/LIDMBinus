import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'

const newsDetail = ({route}) => {
    const {ids, image_url, title, description} = route.params; //nerima data dari halaman sebelum
    return (
        <View style={{ flex: 1}}>
            <View>
                <Image source={{uri: image_url}} />
                <Text>News id: {ids}</Text>
                <Text>News Title: {title}</Text>
                <Text>News Description: {description}</Text>
            </View>
        </View>
    )
}

export default newsDetail; 

const styles = StyleSheet.create({})
