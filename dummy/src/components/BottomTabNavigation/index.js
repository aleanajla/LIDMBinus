import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import TabItem from '../Tabitem';

const BottomTabNavigation = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
                options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
                const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                navigation.navigate({ name: route.name, merge: true });
                }
            };

            const onLongPress = () => {
                navigation.emit({
                type: 'tabLongPress',
                target: route.key,
                });
            };

            return (
                <TabItem
                    key = {index}
                    isFocused = {isFocused} 
                    label = {label}
                    onLongPress = {onLongPress}
                    onPress = {onPress}
                />
            );
            })}
        </View>
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        backgroundColor : '#28527A',
        justifyContent : 'space-between',
        paddingLeft : 1, //STOP RIBUT BROTHER brother spread love not hate --awai
        paddingTop : 13, // STOP THE HATE MAN love each other like god love you --awai
        paddingBottom : 18
    }
})
