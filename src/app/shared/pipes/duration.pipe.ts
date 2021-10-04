import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    const minutesPerHour = 60;
    const resultHours: string =
      Math.floor(value / minutesPerHour) <= 10
        ? `0${Math.floor(value / minutesPerHour)}`
        : `${Math.floor(value / minutesPerHour)}`;
    const resultMinutes: string =
      value % minutesPerHour <= 10 ? `0${value % minutesPerHour}` : `${value % minutesPerHour}`;
    const hourString = Math.floor(value / minutesPerHour) > 1 ? 'hours' : 'hour';

    return `${resultHours}: ${resultMinutes} ${hourString}`;
  }
}
