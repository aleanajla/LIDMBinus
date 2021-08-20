import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import CheckBox from '@react-native-community/checkbox';


const Schedule = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
    )
}

export default Schedule;

const styles = StyleSheet.create({
    
})
