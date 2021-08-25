import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Picker, Switch, Share } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
import { Download, Info_blue, VeryGood, VeryBad, Good, Enough, Bad} from '../../assets'
//import { VeryGood, VeryBad, Good, Enough, Bad } from '../../assets'
import DatePicker from 'react-native-datepicker'
import { useState } from 'react/cjs/react.development'

//install: npm install @react-native-community/datetimepicker --save
import DateTimePicker from '@react-native-community/datetimepicker'

//install : npm i react-native-check-box --save
import CheckBox from 'react-native-check-box'

const Score = () => {
    //inisialisasi default date
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false); 
    const [text, setText] = useState('empty');
    const [selectedPicker, setSelectedPicker] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [isTriggerError, setIsTriggerError] = useState(false);

    //handle share

        const onShare = async () => {
            try {
                const result = await Share.share({
                    message: "Text untuk di share di sini",
                });
                if(result.action === Share.sharedAction){
                    if(result.activityType){

                    }else{

                    }
                }
            }catch (error){
                alert(error.message);
            }
        }
    

    //handle on date / time change
    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();

        setText(fDate + ' (' + fTime + ')');
      };
    
    //show picker
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    //show date picker
    const showDatepicker = () => {
        showMode('date');
      };
    
    //show time picker
    const showTimepicker = () => {
        showMode('time');
    }
    
    return (
        <View style={styles.page}>
            <View style={styles.header}>
                <Download style={styles.download}/>
                <Info_blue style={styles.info}/>
            </View>
            <View style={styles.container}>
                <View style={styles.firstBox}>
                    {/* <View style={[styles.box, { backgroundColor: "powderblue" }]}/> */}
                    <View style={styles.grade}>
                        <View style={styles.gradeTitle}>
                            <Text style={styles.grade2}>Grade</Text>
                            <Text style={styles.pass}>Pass</Text>
                        </View>
                        <View style = {{paddingTop: 8,
                            borderBottomColor: '#C4C4C4',
                            borderBottomWidth: 2,}}/>
                    </View>
                    <View style={styles.grading}>
                        <View style={{alignItems:'center'}}>
                            <Text style={styles.gradingTitle}>Grading</Text>
                        </View>
                        <View style = {{paddingTop: 8,
                            borderBottomColor: '#C4C4C4',
                            borderBottomWidth: 2}}/>
                        <View style= {styles.containerGrading}>
                            <View style={styles.ketGrade}>
                                <Text style={styles.ketGrading}>A</Text>
                                <Text style={styles.ketGrading}>B</Text>
                                <Text style={styles.ketGrading}>C</Text>
                                <Text style={styles.ketGrading}>D</Text>
                                <Text style={styles.ketGrading}>E-F</Text>
                            </View>
                            <View style ={styles.indikasi}>
                                <Text style ={styles.ketIndikasi}>Very Good</Text>
                                <Image source={require('../../assets/icons/Good.png')}/>
                                <Text style ={styles.ketIndikasi}>Good</Text>
                                <Image source={require('../../assets/icons/Good.png')}/>
                                <Text style ={styles.ketIndikasi}>Enough</Text>
                                <Image source={require('../../assets/icons/Good.png')}/>
                                <Text style ={styles.ketIndikasi}>Bad</Text>
                                <Image source={require('../../assets/icons/Good.png')}/>
                                <Text style ={styles.ketIndikasi}>Very Bad</Text>
                                <Image source={require('../../assets/icons/Bad.png')}/>
                            </View>
                        </View>
                        </View>
                    </View>
                {/* <View style = {style.scoreContainer}>
                        <View style = {style.scoreHeader}>
                            <Text>Presentation skills</Text>
                        </View>
                        <View style = {style.scoreMain}>
                            <View style = {style.scoreLeft}>
                                <Text>uhsduhudheuhe</Text>
                            </View>
                            <View style = {style.scoreRight}>
                                <Text>uhsduhudheuhe</Text>
                            </View>
                        </View>
                </View> */}
            </View>
            
            {/* Date Picker */}
            {/* cara 1 */}
            <DatePicker 
            date={date}
            mode="date"
            onDateChange={(date) => {
                setDate(date);
              }}
            customStyles={{}}
            />

            {/* cara 2 */}
            <TouchableOpacity onPress={showDatepicker}>
                <Text>Click to Pick a Date</Text>
            </TouchableOpacity>

            {/* Time Picker */}
            <TouchableOpacity onPress={showTimepicker}>
                <Text>Click to Pick a Time</Text>
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                testID = "dateTimePicker" //id datetime picker
                value={date} //default value (tanggal hari ini)
                mode={mode} //pilih date atau time untuk mode datetimepicker nya
                is24Hour={true} //untuk mode 24 jam / 12 jam
                display="default" //tampilan yang di display di hp
                onChange={onDateChange} //handle ubah date / time
                />
            )}

            <Text>Date and time will show here</Text>
            <Text>{text}</Text>

            {/* Picker */}
            <Picker
                style={{paddingLeft: 10}}
                selectedValue={selectedPicker}
                onValueChange={(itemValue, itemIndex)=> setSelectedPicker(itemValue)}>
                <Picker.Item label="Label 1" value="1"/>
                <Picker.Item label="Label 2" value="2"/>
            </Picker>
            <Text>{selectedPicker}</Text>

            {/* CheckBox */}
            <CheckBox
                style={{paddingLeft: 10}}
                isChecked = {isChecked}
                onClick= {() => {setIsChecked(!isChecked)}}
                rightText={"Checkbox"}
            />
            <Text>Checked: {isChecked ? "True" : "False"}</Text>

            {/* Switch */}
            <View style={{}}>
                <Switch
                    trackColor={{false: "#767577", true:"#81b0ff"}}
                    thumbColor={isEnabled? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={setIsEnabled}
                    value={isEnabled}
                    ios_backgroundColor="#3e3e3e"
                />
            </View>

            <Text>Switch : {isEnabled? "True" : "False"}</Text>

            {/* Share */}
            <TouchableOpacity
                onPress={onShare}>
                <Text>Share Button</Text>
            </TouchableOpacity>

            {/* Trigger Error text */}
            <Text>{isTriggerError? "Error": ""}</Text>
            
            
        </View>
    )
}

export default Score

const styles = StyleSheet.create({
    page:{
        backgroundColor : '#F6F5F5'
    },
    header:{
        flexDirection : 'row',
        justifyContent : 'flex-end',
        paddingTop : 15,
        paddingRight: 20,
    },
    download:{
        padding : 14,
        marginTop : 5,
        right : 8
    },
    info:{
        padding : 18
    },
    firstBox:{
        marginTop: 20,
        padding:5,
        flexDirection : 'row',
        marginRight: 5,
    },
    grade:{
        width: 227,
        height: 178,
        backgroundColor : '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    gradeTitle:{
        flexDirection : 'row',
        padding :5,
        paddingTop : 7,
        paddingLeft: 20,
        alignItems : 'center'
    },
    grade2:{
        fontWeight : 'bold',
        fontSize : 20,
        color : WARNA_SEKUNDER,
    },
    pass : {
        fontSize : 18,
        color: '#28527A',
        left : 80
    },
    grading:{
        width: 150,
        height: 178,
        backgroundColor : '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 4
        },
        elevation: 5,
    },
    gradingTitle:{
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        fontSize: 20,
        color: WARNA_SEKUNDER,
        fontWeight: 'bold',
        paddingTop: 7
    },
    containerGrading: {
        flexDirection: 'row',
        justifyContent: 'center',
        // paddingTop : 10
    },
    ketGrade:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    ketGrading: {
        fontSize: 17,
        fontWeight: 'bold',
        color: WARNA_SEKUNDER
    },
    indikasi:{
        alignItems: 'center',
        // justifyContent: 'center',
    },
    ketIndikasi :{
        fontSize: 9,
        color: '#28527A',
    },
})

// {/* <View style={styles.containerGrading}>
//                                 <View>
//                                     <Text style={styles.ketGrade}>A</Text>
//                                 </View>
//                                 <View style = {styles.conIndikasi}>
//                                     <Text style={styles.indikasi}>Very Good</Text>
//                                     {/* <VeryGood/> */}
                            //     </View>
                            // </View>
                            // <View style={styles.containerGrading}>
                            //     <View>
                            //         <Text style={styles.ketGrade}>B</Text>
                            //     </View>
                            //     <View style = {styles.conIndikasi}>
                            //         <Text style={styles.indikasi}>Good</Text>
                            //         {/* <Good/> */}
                            //     </View>
                            // </View>
                            // <View style={styles.containerGrading}>
                            //     <View>
                            //         <Text style={styles.ketGrade}>C</Text>
                            //     </View>
                            //     <View style = {styles.conIndikasi}>
                            //         <Text style={styles.indikasi}>Enough</Text>
                            //         <Enough/>
                            //     </View>
                            // </View>
                            // <View style={styles.containerGrading}>
                            //     <View>
                            //         <Text style={styles.ketGrade}>D</Text>
                            //     </View>
                            //     <View style = {styles.conIndikasi}>
                            //         <Text style={styles.indikasi}>Bad</Text>
                            //         <Bad/>
                            //     </View>
                            // </View>
                            // <View style={styles.containerGrading}>
                            //     <View>
                            //         <Text style={styles.ketGrade}>E-F</Text>
                            //     </View>
                            //     <View style = {styles.conIndikasi}>
                            //         <Text style={styles.indikasi}>Very Bad</Text>
                            //         <VeryBad/>
                            //     </View>
                            // </View> }