import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType'
import { useNavigation } from '@react-navigation/core'
import { VideoLearning, ShareMaterials, Profile } from '../../pages/index.js'
import RelatedListView from '../../components/relatedListView'
import { relatedBooksData } from '../../assets/jsonData/relatedBooksData'

const Learning = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={styles.pages}>
                <RelatedListView
                    itemList = {relatedBooksData}
                    navigation={navigation}
                />
            </View>
        </ScrollView>
    )
}

export default Learning;

const styles = StyleSheet.create({
    pages:{
        marginTop : 15
    }
    
})
