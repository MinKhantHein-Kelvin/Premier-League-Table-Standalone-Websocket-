import moment from 'moment';

export class Client{

  getSeasons = (count: number): string[] => {
    return Array.from({ length: count }, (_, i) =>
      moment().subtract(i + 1, 'years').format('YYYY')
    );
  };

}
