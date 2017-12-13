import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AlertService {
    alertChanged: EventEmitter<any> = new EventEmitter();
    public showConfirm = (action: () => void, title: string, message: string) =>
        this.alertChanged.emit({ action: action, message: message, title: title });
}