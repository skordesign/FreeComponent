import { Component, OnInit,OnDestroy } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styles: [``]
})
export class AlertComponent implements OnInit, OnDestroy {
    subcription: Subscription;
    ngOnDestroy(): void {
       this.subcription.unsubscribe();
    }
    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.subcription =  this.alertService.alertChanged.subscribe((body: any) => {
            //do stuff
        })
    }

}