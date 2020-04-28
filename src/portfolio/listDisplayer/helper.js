import moment from 'moment';

export const fromatTime = (timeInMilisecond) => moment(timeInMilisecond).format("DD/MM/YYYY");