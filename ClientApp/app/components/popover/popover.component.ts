import { Component, OnInit, Input, ElementRef, ViewChild, Renderer } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
@Component({
    selector: 'app-popover',
    templateUrl: 'popover.component.html',
    styleUrls: ['./popover.component.scss'], animations: [
        trigger('menuChanged', [
            state('0', style({
                height: '0',
                opacity: 0,
                'z-index': -999999
                //'display': 'none'
            })),
            state('1', style({
                height: 'auto',
                opacity: 1,
                //'display': 'block'
                'z-index': 1
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
    enabled = false;
    @ViewChild('btn') btn: ElementRef;
    @ViewChild('popover') popover: ElementRef;
    @ViewChild('arrow') arrow: ElementRef;
    constructor(private renderer: Renderer, private element: ElementRef) { }
    change() {
        if (!this.enabled) {
            let parenTop = this.element.nativeElement.offsetTop;
            let parentLeft = this.element.nativeElement.offsetLeft || window.innerWidth - this.element.nativeElement.offsetRight - this.element.nativeElement.offsetWidth;
            let parentHeight = this.element.nativeElement.offsetHeight;
            let parentWidth = this.element.nativeElement.offsetWidth;
            let parentRight = this.element.nativeElement.offsetRight || window.innerWidth - this.element.nativeElement.offsetLeft - this.element.nativeElement.offsetWidth;

            let popoverWidth = this.popover.nativeElement.offsetWidth;
            this.renderer.setElementStyle(this.popover.nativeElement, 'top', parenTop + parentHeight + 10 + 'px');
            this.renderer.setElementStyle(this.popover.nativeElement, 'left', -popoverWidth / 2 + parentWidth / 2 + 'px');
            console.log(parentLeft); console.log(parentRight);
            let sizeOutRight = parentLeft + parentWidth / 2 + popoverWidth / 2 - window.innerWidth;
            let sizeOutLeft = parentRight + parentWidth / 2 + popoverWidth / 2 - window.innerWidth;
            if (sizeOutLeft > 0) {
                let valToTransform = sizeOutLeft + 10;
                this.renderer.setElementStyle(this.popover.nativeElement, 'transform', 'translateX(' + valToTransform + 'px)');
                this.renderer.setElementStyle(this.arrow.nativeElement, 'transform', 'translateX(' + -valToTransform + 'px)');
            } else if (sizeOutRight > 0) {
                let valToTransform = sizeOutRight + 10;
                this.renderer.setElementStyle(this.arrow.nativeElement, 'transform', 'translateX(' + valToTransform + 'px)');
                this.renderer.setElementStyle(this.popover.nativeElement, 'transform', 'translateX(' + -valToTransform + 'px)');
            }

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