
import { Injectable } from "@angular/core";

@Injectable()
export class LogService {
    name : string;
    log(msg: string): void {
        console.log( msg + " from " + this.name);
    }

    error(msg: string): void {
        console.error("Error from " + this.name + " : " + msg );
    }
}