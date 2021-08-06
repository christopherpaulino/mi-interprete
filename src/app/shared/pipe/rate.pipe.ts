import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate'
})
export class RatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (true) {
      case (value <= 1): {
        return "Novato"
      }
      case (value > 1 && value <= 2): {
        return "Regular"
      }
      case (value > 2 && value <= 3): {
        return "Bueno"
      }
      case (value > 3 && value <= 4): {
        return "Novato"
      }
      case (value > 4): {
        return "Experto"
      }
    }
  }

}
