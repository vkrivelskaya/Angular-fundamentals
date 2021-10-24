import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'creationDate'
})
export class CreationDatePipe implements PipeTransform {
  transform(date: string, format = 'dd.MM.YYYY'): string | null {
    const transformedDate = new Date(date);
    return new DatePipe('en-US').transform(transformedDate, format);
  }
}
