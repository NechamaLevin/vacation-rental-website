import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value<=3)
    return value+"👪";
    return value+"👨‍👩‍👧‍👦👨‍👩‍👧‍👦👩‍👧‍👦";
  }

}
