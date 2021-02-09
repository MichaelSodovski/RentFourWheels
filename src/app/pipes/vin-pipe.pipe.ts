import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vinFormat'
})
export class VinPipePipe implements PipeTransform {

    transform(value: number|undefined, ...args: unknown[]): any {
        var valueArray: string[] = Array.from(value!.toString());
        var transformedValue = `${valueArray[0]+valueArray[1]}-${valueArray[2]+valueArray[3]+valueArray[4]}-${valueArray[5]+valueArray[6]}`;
        return transformedValue;
    }

}
