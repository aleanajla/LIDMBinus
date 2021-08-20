import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, Agenda, AgendaList, CalendarList } from 'react-native-calendars';
import { WARNA_SEKUNDER } from '../../utils/constants';
import dateFns from 'date-fns';
import { announcementData } from '../../assets/jsonData/announcementData';
import  AnnounceListView from '../../components/ListView'


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
