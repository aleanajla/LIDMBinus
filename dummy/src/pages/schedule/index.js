import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Calendar, Agenda, AgendaList, CalendarList } from 'react-native-calendars';
import { WARNA_SEKUNDER } from '../../utils/constants';
import {format} from 'date-fns';

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
          <View style={{backgroundColor:'#28527A', padding:10, alignItems:'flex-end'}}>
              <TouchableOpacity>
                <Image source={require('../../assets/icons/Bad.png')} style={{marginRight:15, marginTop:10}}/>
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
})
