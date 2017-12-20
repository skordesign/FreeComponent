import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
@Component({
    selector: 'app-overlay-popup',
    templateUrl: 'overlay-popup.component.html',
    styleUrls: ['./overlay-popup.component.scss'], animations: [
        trigger('overlayChanged', [
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

export class OverlayPopupComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}