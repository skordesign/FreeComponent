import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-2side-card',
    templateUrl: '2side-card.component.html',
    animations: [
        trigger('switchChanged', [
            state('0', style({
                transform: 'rotateY(180deg)'
            })),
            state('1', style({
                transform: 'rotateY(0deg)'
            })),
            transition('1 <=> 0', animate('600ms ease-out')),
        ])
    ]
})

export class TwoSideCardComponent implements OnInit {
    sideBySide = false;
    constructor() { }

    ngOnInit() { }
}