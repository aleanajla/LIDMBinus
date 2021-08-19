import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, Agenda, AgendaList, CalendarList } from 'react-native-calendars';
import { WARNA_SEKUNDER } from '../../utils/constants';
import dateFns from 'date-fns';


const Schedule = () => {
    const baseDate = new Date(2019, 6, 15);

    return (
        <View style={styles.calendarCon}>
            <Calendar style={styles.bgCalendar}
               
            />
            
        </View>
    )
}

export default Schedule;

const styles = StyleSheet.create({

})
