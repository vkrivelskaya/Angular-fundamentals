import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'creationDate'
})
export class CreationDatePipe implements PipeTransform {
  transform(date: Date, format = 'dd.MM.YYYY'): string | null {
    date = new Date(date);
    return new DatePipe('en-US').transform(date, format);
  }
}
