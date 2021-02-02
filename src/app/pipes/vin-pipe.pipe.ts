import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vinFormat'
})
export class VinPipePipe implements PipeTransform {

    transform(value: string, ...args: unknown[]): any {
        return null;
    }

}
