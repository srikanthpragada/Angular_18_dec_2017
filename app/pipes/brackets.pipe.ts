import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'brackets' })
export class BracketsPipe implements PipeTransform {
    transform(value: string, newcase: string = 'n', btype: string = '1') {
        if (newcase == 'u')
            value = value.toUpperCase();
        else
            if (newcase == "l")
                value = value.toLowerCase();
        if (btype == '1')
            return "[" + value + "]";
        else
            if (btype == '2')
                return "<" + value + ">";

    }
}