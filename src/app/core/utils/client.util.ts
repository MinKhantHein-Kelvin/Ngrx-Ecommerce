import moment from 'moment';

export class Client {
  // changestringtodateclient(date : string){
  //   const momentDate = moment(date, 'M/D/YYYY h:mm:ss A');
  //   if (!momentDate.isValid()) {
  //     return null;
  //   }
  //   return momentDate.format('DD MMM YYYY');
  // }

  changeDateObjectToString(date: Date): string {
    if (date) {
      return moment(date).format('YYYY-MM-DD');
    }
    return '';
  }

  // changedatetimeobjecttostring(date: Date): string {
  //   if (date) {
  //     return moment(date).format('YYYY-MM-DD HH:mm:ss');
  //   }
  //   return '';
  // }

  // changeDateTimeToYYYYMMDD(date: Date | string): string {
  //   if (date) {
  //     const parsedDate = moment(date);
  //     if (parsedDate.isValid()) {
  //       return parsedDate.format('YYYY-MM-DD');
  //     }
  //   }
  //   return '';
  // }

  disableFutureDates = (current: Date): boolean => {
    const today = new Date();

    return current > today;
  };
}
