import moment from 'moment';
import React from 'react';
import { Text } from 'react-native';

interface Props {
    date: Date
}

const getTimeLabel = (date: Date): string => {
    if (moment(date).isSame(moment(), 'day')) {
        return moment(date).format("hh:mm A")
    }

    if (moment(date).isSame(moment().subtract(1, 'day'))) {
        return 'Yesterday'
    }

    if (moment(date).isBefore(moment().subtract(1, 'day'))) {
        return moment().format('MM/DD/YY')
    }

    return ""
}

const TimeDuration: React.FunctionComponent<Props> = ( {
    date
}: Props ) => {
    return <Text>{getTimeLabel(date)}</Text>
};

export default TimeDuration;
