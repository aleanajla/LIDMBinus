import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import TabItem from '../TabItem';

const BottomTabNavigation = ({ state, descriptors, navigation }) => {

    // const focusedOptions = descriptors[state.routes[state.index].key].options;

    // if (focusedOptions.tabBarVisible === false) {
    //   return null;
    // }

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
                //type: 'tabLongPress',
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
        // paddingLeft : 1, 
        paddingTop : 13, 
        paddingBottom : 18,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    }
})
