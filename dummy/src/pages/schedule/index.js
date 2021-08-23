import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform, Dimensions, FlatList, TextInput} from 'react-native';
import { Calendar, Agenda, AgendaList, CalendarList } from 'react-native-calendars';
import { WARNA_SEKUNDER } from '../../utils/constants';
import {format} from 'date-fns';
import Modal from 'react-native-modal'
import { useNavigation } from '@react-navigation/core'
import DatePicker from 'react-native-datepicker'
import {TimePicker} from 'react-native-simple-time-picker';
import DateTimePicker from '@react-native-community/datetimepicker'


const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const formats = (date = new Date()) => format(date, 'yyyy-MM-dd');

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const getMarkedDates = (baseDate, appointments) => {
  const markedDates = {};

  markedDates[formats(baseDate)] = { selected: true, selectedColor: '#FAD586'};

  appointments.forEach((appointment) => {
    const formattedDate = formats(new Date(appointment.date));
    markedDates[formattedDate] = {
      ...markedDates[formattedDate],
      marked: true,
      dotColor: '#FAD586'
    };
  });

  return markedDates;
};

const Schedule = () => {
    const baseDate = new Date(2021, 7, 21);
    const [items, setItems] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const[date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false); 
    const [text, setText] = useState('empty');

    const onDateChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);

      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
      let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();

      setText(fDate + ' (' + fTime + ')');
    };

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    }

    const showTimepicker = () => {
      showMode('time');
  }


    const loadItems = (day) => {
      setTimeout(() => {
        for (let i = -15; i < 85; i++) {
          const time = day.timestamp + i * 24 * 60 * 60 * 1000;
          const strTime = timeToString(time);
          if (!items[strTime]) {
            items[strTime] = [];
            const numItems = Math.floor(Math.random() * 3 + 1);
            for (let j = 0; j < numItems; j++) {
              items[strTime].push({
                // name: 'Item for ' + strTime + ' #' + j,
                // height: Math.max(50, Math.floor(Math.random() * 150)),
              });
            }
          }
        }
        const newItems = {};
        Object.keys(items).forEach((key) => {
          newItems[key] = items[key];
        });
        setItems(newItems);
      }, 1000);
    };
    
    const renderItem = (item) => {
      return (
        <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
            </View>
        </TouchableOpacity>
      );
    };
  
    const APPOINTMENTS = [
      {
        date: '2021-08-04T05:00:00.000Z',
        title: 'Presentation Project'
      },
      {
        date: '2021-08-07T05:00:00.000Z',
        title: 'Meeting with team'
      },
      {
        date: '2021-08-09T05:00:00.000Z',
        title: 'Mentoring'
      },
      {
        date: '2021-08-15T05:00:00.000Z',
        title: 'Meeting with team'
      },
      {
        date: '2021-08-17T08:00:00.000Z',
        title: 'Meeting with team for project'
      },
      {
        date: '2021-08-17T09:00:00.000Z',
        title: 'Presentation Project'
      },
      {
        date: '2021-08-17T10:00:00.000Z',
        title: 'Data Annotation'
      },


    ];

    return (
       <View style={styles.container}>
         <Modal
            animationType="slide" //slide, fade, none
            transparent={true} //true or false
            visible={modalVisible}
            hasBackdrop={true}
            backdropOpacity={0.5}
            onRequestClose={() => {
                setModalVisible(!modalVisible)}}
            >
                <View styles={styles.centeredView}>
                    <View style={styles.modalView}>
                      <TouchableOpacity
                        onPress={()=> setModalVisible(!modalVisible)}>
                        <View style={styles.closeBtn}>
                            <Image source = {require('../../assets/icons/closeBlack.png')}/>
                        </View>
                      </TouchableOpacity>
                      <View>
                        <Text style={styles.titlePopUP}>Create an Event</Text>
                        <View>
                            <View style={styles.eachCon}>
                              <Text style={styles.subTitle}>Title</Text>
                              <TextInput placeholder="Write title here.."/>
                            </View>
                            <View style={styles.eachCon}>
                              <Text style={styles.subTitle}>Date</Text>
                              <DatePicker
                                date={date}
                                mode = "date"
                                onDateChange= {(date)=>{
                                  setDate(date);
                                }}
                                customStyles={{
                                    
                                }}
                              />
                            </View>
                            <View style={styles.eachCon}>
                              <Text style={styles.subTitle}>Time</Text>
                              <TouchableOpacity onPress={showTimepicker} style={{flexDirection:'row', alignItems:'center'}}>
                                  <TextInput  placeholder={text}/>
                                  <Image style={{marginLeft:5, width:25, height:25}} source={require('../../assets/icons/clock.png')}/>
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
                                {/* <TextInput  placeholder={text}/> */}
                            </View>
                            <TouchableOpacity style={styles.conCreateBtn} onPress={()=> setModalVisible(!modalVisible)}>
                              <View style={styles.createBtn}>
                                <Text style={styles.textBtn}>Create</Text>
                              </View>
                            </TouchableOpacity>
                        </View>
                      </View>
                    </View> 
                </View>
          </Modal>
          <View style={{backgroundColor:'#28527A', padding:10, alignItems:'flex-end'}}>
              <TouchableOpacity onPress={()=> setModalVisible(true)}>
                <Image source={require('../../assets/icons/circle_plus.png')} style={{marginRight:15, marginTop:10}}/>
              </TouchableOpacity>
            </View>
          
           <Agenda
              items={{
                '2021-08-15': [{name: 'item 1 - any js object'}],
                '2021-08-17': [{name: 'item 2 - any js object', height: 80}],
                '2021-08-21': [],
                '2021-08-21': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
              }}
              items={items}
              current={formats(baseDate)}
              onDayPress={(day) => {console.log('selected day', day)}}
              markingType={'custom'}
              markedDates={getMarkedDates(baseDate, APPOINTMENTS)}
              pastScrollRange={25}
              showClosingKnob={true}
              loadItemsForMonth={loadItems}
              renderItem={renderItem}
              theme={{
                calendarBackground: '#28527A',
                selectedDayBackgroundColor: 'white',
                selectedDayTextColor: '#166088',
                selectedDotColor: '#166088',
      
                dayTextColor: '#DBE9EE',

                textDisabledColor: '#729DAF',
                dotColor: '#DBE9EE',
      
                monthTextColor: '#DBE9EE',
                textMonthFontWeight: 'bold',
      
                arrowColor: '#DBE9EE',
                week:{
                  backgroundColor: 'white'
                }
              }}
            />
       </View>
    )
}

export default Schedule;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    // backgroundColor: 'black',
  },
  centeredView :{
    flex: 1,
    justifyContent: "center",
    width: windowsWidth,
    height: windowsWidth,
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
      margin:20,
      backgroundColor: "white",
      borderRadius: 20,
      paddingTop: 20,
      paddingLeft:35,
      paddingRight:35,
      paddingBottom:35,
      // alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2
      },
      shadowOpacity: 0.25,
      elevation:5,
  },
  closeBtn :{
    marginLeft : 240,
    marginBottom : 15,
  },
  titlePopUP:{
    color:'#022E57',
    fontSize:25,
    fontWeight:'900',
    marginBottom:5
  },
  eachCon:{
    marginTop:10
  },
  createBtn:{
    backgroundColor:'#022E57',
    width:111,
    height:39,
    borderRadius:20,
    justifyContent:'center'
  },
  textBtn:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center'
  },
  conCreateBtn:{
    alignItems:'flex-end',
    marginTop:20
  },
  subTitle:{
    fontSize:18,
    color:'#28527ACC',
    fontWeight:'bold'
  }
})
