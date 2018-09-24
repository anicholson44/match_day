import dateFormat from 'dateformat';

export const isoFormatDate = (date) => dateFormat(date, 'isoDate');

export const timeOfDay = (dateTime) => dateFormat(dateTime, 'h:MM TT');

export const prettyFormatDate = (date) => dateFormat(date, 'dddd, mmmm dS yyyy');
