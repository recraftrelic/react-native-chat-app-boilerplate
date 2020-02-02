import moment from 'moment';
import React, { useContext } from 'react';
import { Text } from 'react-native';
import ConfigContext from '../../config/AppConfigProvider';
import { AppDateFormats } from '../../config/DefaultConfig';

interface Props {
    date: Date
}

const getTimeLabel = (date: Date, dateFormats?: AppDateFormats): string => {
    if (moment(date).isSame(moment(), 'day')) {
        return moment(date).format(dateFormats?.chatHourDisplayFormat)
    }

    if (moment(date).isSame(moment().subtract(1, 'day'), 'day')) {
        return dateFormats?.chatYesterdayText
    }

    if (moment(date).isBefore(moment().subtract(1, 'day'))) {
        return moment(date).format(dateFormats?.chatDateFormat)
    }

    return ""
}

const TimeDuration: React.FunctionComponent<Props> = ( {
    date
}: Props ) => {
    const config = useContext(ConfigContext)
    return <Text>{getTimeLabel(date, config.constants?.dateFormats)}</Text>
};

export default TimeDuration;
