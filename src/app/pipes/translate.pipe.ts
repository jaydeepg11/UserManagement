import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
  pure:true
})
export class TranslatePipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    if (!value==true) {
      return 'Active';
    }
    return 'InActive';
  }

}
