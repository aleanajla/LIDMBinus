import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { WARNA_SEKUNDER } from '../../utils/constants';

function checkMyGrade(grade){
    if(grade ==  "A"){
        return "Sangat Baik";
    }else if(grade == "B"){
        return "Baik";
    }else if(grade == "C"){
        return "Cukup";
    }else if(grade == "D"){
        return "Buruk";
    }else if(grade == "E" || grade == "F"){
        return "Sangat Buruk";
    }
}

function checkMyStars(grade){
    if(grade ==  "A"){
        return require('../../assets/icons/VeryGood.png');
    }else if(grade == "B"){
        return require('../../assets/icons/Good.png');
    }else if(grade == "C"){
        return require('../../assets/icons/Enough.png');
    }else if(grade == "D"){
        return require('../../assets/icons/Bad.png');
    }else if(grade == "E" || grade == "F"){
        return require('../../assets/icons/VeryBad.png');
    }
}


const ScoreListViewItems = ({id, title, grade}) => (
    <View style={styles.course}>
        <View>
            <Text style={styles.courseText}>{title}</Text>
        </View>
        <View style={styles.courseDetails}>
            <View style={styles.left}>
                <Text style={{color : WARNA_SEKUNDER}}>Nilai</Text>
                <Text style={styles.courseGrade}>{grade}</Text>
            </View>
            <View style={styles.verticalLine}></View>
            <View style={styles.right}>
                <Text style={{color : WARNA_SEKUNDER}}>Rincian</Text>
                <Text style={styles.details}>{checkMyGrade(grade)}</Text>
                <Image source={checkMyStars(grade)}/>
            </View>
        </View>
    </View>
);

export default ScoreListViewItems;

const styles = StyleSheet.create({
    course:{
        height: 124,
        backgroundColor : '#FFFFFF',
        marginRight : 15,
        marginLeft : 15,
        marginTop: 13,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        shadowColor : '#000000',
        shadowOpacity : 0.1,
        shadowRadius : 10,
        shadowOffset:{
            width : 0,
            height : 4
        },
        elevation : 5
    },
    courseText:{
        fontWeight : 'bold',
        fontSize : 17,
        padding : 10,
        backgroundColor : WARNA_SEKUNDER,
        color : '#FFFFFF',
    },
    courseDetails:{
        flexDirection : 'row',
    },
    left:{
        padding : 5,
        width : '50%',
        alignItems : 'center',
    },
    right:{
        padding : 5,
        width : '50%',
        alignItems : 'center',
    },
    courseGrade:{
        fontSize : 35,
        color : WARNA_SEKUNDER,
        fontWeight: 'bold'
    },
    details:{
        padding : 3,
        color : '#28527A',
        fontSize : 15
    },
    verticalLine:{
        height: '80%',
        width: 3,
        backgroundColor: '#DADADA',
        marginTop: 10
    }
})