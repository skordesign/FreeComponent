import { Component, OnInit, Input } from '@angular/core';

import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';
import { LoadingService } from '../../services/loading.service';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'], animations: [
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
export class LoadingComponent implements OnInit {
    @Input() isActivated: boolean = false;
    constructor(private loadingSvc: LoadingService) { }
    subcription: Subscription;
    ngOnInit() {
        this.subcription = this.loadingSvc.loadingChanged.subscribe((body: boolean) => {
            this.isActivated = body;
        });
    }
}