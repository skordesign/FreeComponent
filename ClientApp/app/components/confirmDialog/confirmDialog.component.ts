import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfirmService } from '../../services/confirm.service';
import { Subscription } from 'rxjs/Subscription';
import { trigger, state, style, transition, animate, group } from '@angular/animations';



@Component({
    selector: 'app-confirmDialog',
    templateUrl: './confirmDialog.component.html',
    styleUrls: ['./confirmDialog.component.scss'], animations: [
        trigger('confirmDialogChanged', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate(250, style({ opacity: '*' }))
            ]),
            transition('* => void', [
                style({ opacity: '*' }),
                animate(250, style({ opacity: 0 }))
            ]),

        ])
    ]
})
export class ConfirmDialogComponent implements OnInit, OnDestroy {
    ngOnDestroy(): void {
        this.actions.length = 0;
        this.subcription.unsubscribe();
    }
    isActivated = false;
    actions: Action[];
    subcription: Subscription;
    title = "";
    message = "";
    constructor(private confirm: ConfirmService) { }

    ngOnInit() {

        this.actions = [];
        this.subcription = this.confirm.confirmChanged.subscribe((body: any) => {
            this.actions = body.actions;
            this.title = body.title;
            this.message = body.message;
            this.showDialog();
        });
    }
    showDialog() {
        this.isActivated = true;
    }
    exec(action: any) {
        let act = action as Action;
        act.func();
        this.isActivated = false;
    }
}

interface Action {
    func: () => void;
    text: string;
}