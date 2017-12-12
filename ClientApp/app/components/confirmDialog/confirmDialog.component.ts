import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfirmService } from '../../services/confirm.service';
import { Subscription } from 'rxjs/Subscription';
import { trigger, state, style, transition, animate } from '@angular/animations';



@Component({
    selector: 'app-confirmDialog',
    templateUrl: './confirmDialog.component.html',
    styleUrls:['./confirmDialog.component.css'], animations: [
        trigger('playBox', [
            state('inactive', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(200)
            ]),
            transition('* => void', [
                animate(200, style({ transform: 'translateX(100%)' }))
            ])
        ])
    ]
})
export class ConfirmDialogComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
        this.subcription.unsubscribe();
    }
    isActivated = false;
    action: any;
    subcription: Subscription;
    title = "";
    message = "";
    state = "inactive";
    constructor(private confirm: ConfirmService) { }

    ngOnInit() {

        this.subcription = this.confirm.confirmChanged.subscribe((body: any) => {
            this.action = body.action;
            this.title = body.title;
            this.message = body.message;
            this.showDialog();
        });
        if (this.state == "inactive") {
            setTimeout(() => this.state = "active")
        }
    }
    showDialog() {
        this.isActivated = true;
    }
    close() {
        this.action = null;
        this.isActivated = false;
    }
    ok() {
        this.action()
        this.close()
    }
}