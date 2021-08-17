import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

const DEFAULT_FORMAT_TYPE = 'YYYY-MM-DD HH:mm:ss';

export function utcToDateString(value: string, formatType: string = DEFAULT_FORMAT_TYPE) {
  return dayjs.utc(value).format(formatType);
}
