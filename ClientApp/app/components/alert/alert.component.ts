import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styles: [``]
})
export class AlertComponent implements OnInit, OnDestroy {
    subcription: Subscription;
    isActivated: boolean;
    alerts: Alert[];
    ngOnDestroy(): void {
        this.subcription.unsubscribe();
    }
    constructor(private alertService: AlertService) {
    }

    ngOnInit() {
        this.subcription = this.alertService.alertChanged.subscribe((body: any) => {
            let alert = body as Alert;
            this.alerts.push(alert);
            this.showAlert(alert);
        })
    }
    private showAlert(alert: Alert) {
    }
}

declare global {
    interface Array<T> {
        deQueue(): void;
    }
}
Array.prototype.deQueue = ( ) => {
    
}

interface Alert {
    message: string;
    action: () => void;
    type: string;
}
