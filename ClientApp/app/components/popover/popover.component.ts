import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
@Component({
    selector: 'app-popover',
    templateUrl: 'popover.component.html',
    styleUrls: ['./popover.component.scss'], animations: [
        trigger('menuChanged', [
            state('0', style({
                height: '0',
                opacity: 0,
            })),
            state('1', style({
                height: 'auto',
                opacity: 1
            })),
            transition('1 => 0', [
                style({ height: '*' }),
                animate(100, style({ height: 0 }))
            ]), transition('0 => 1', [
                style({ height: 0 }),
                animate(100, style({ height: '*' }))
            ]),
        ])
    ]
})

export class PopoverComponent implements OnInit {
    @Input() header = "menu"
    state = false;
    top = -1000;
    left = -1000;
    enabled = false;
    @ViewChild('btn') btn: ElementRef;
    @ViewChild('popover') popover: ElementRef;
    constructor() { }
    change() {
        if (!this.enabled) {
            let top = this.btn.nativeElement.offsetTop;
            let left = this.btn.nativeElement.offsetLeft;
            this.top = top + this.btn.nativeElement.offsetHeight + 10;
            this.left = (left + this.btn.nativeElement.offsetWidth / 2) - (this.popover.nativeElement.offsetWidth / 2);
            this.state = !this.state;
            setTimeout(() => this.enabled = true, 100);
        }
    }
    close() {
        if (this.enabled) {
            this.state = false;
            this.enabled = false;
            return;
        } else {
            return;
        }
    }
    ngOnInit() { }
}