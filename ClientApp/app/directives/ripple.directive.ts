import { Directive, HostListener, ElementRef, Renderer, Renderer2 } from '@angular/core';
import { style, animate, group, AnimationBuilder } from '@angular/animations';
@Directive({ selector: '[rippleEffect]' })
export class RippleDirective {
   
    constructor(private el: ElementRef, private renderer: Renderer, private renderer2: Renderer2) {
        this.renderer.setElementStyle(this.el.nativeElement, 'overflow', 'hidden');
        this.renderer.setElementStyle(this.el.nativeElement, 'position', 'relative');
    }
    @HostListener('mousedown', ['$event']) onmousedown(event: any) {
        this.createShapeRipple(event.offsetX, event.offsetY)
    }
    // @HostListener('mouseup', ['$event']) onmouseup(event: any) {
    //     this.createShapeRippleChild(event.offsetX, event.offsetY)
    // }
    createShapeRippleChild(x: number, y: number){
        let rippleSize = this.el.nativeElement.offsetWidth / 8;
        var rippleChild = this.renderer.createElement(this.el.nativeElement, 'div');

        this.renderer.setElementStyle(rippleChild, 'border-radius', rippleSize + 'px');
        this.renderer.setElementStyle(rippleChild, 'position', 'absolute');
        this.renderer.setElementStyle(rippleChild, 'height', rippleSize / 2 + 'px');
        this.renderer.setElementStyle(rippleChild, 'width', rippleSize / 2 + 'px');
        this.renderer.setElementStyle(rippleChild, 'pointer-events', 'none');
        let scaleNumber = this.el.nativeElement.offsetWidth / rippleSize;
        this.renderer.setElementStyle(rippleChild, 'background', '#dbdbdb');
        this.renderer.setElementStyle(rippleChild, 'left', (x - (rippleSize / 2)).toString() + 'px');
        this.renderer.setElementStyle(rippleChild, 'top', (y - (rippleSize / 2)).toString() + 'px');
        this.renderer.setElementStyle(rippleChild, 'opacity', '0.5');
        this.renderer.setElementStyle(rippleChild, 'transition', 'all .4s ease-in');
        this.renderer.setElementStyle(rippleChild, 'opacity', '0');
        this.renderer.setElementStyle(rippleChild, 'transform', 'scale(' + scaleNumber * 2 + ')');
        setTimeout(() => {
            this.renderer2.removeChild(this.el.nativeElement, rippleChild);
        }, 400);
    }
    createShapeRipple(x: number, y: number) {
        var ripple = this.renderer.createElement(this.el.nativeElement, 'div');
        
        let rippleSize = this.el.nativeElement.offsetWidth / 8;
        this.renderer.setElementStyle(ripple, 'border-radius', rippleSize + 'px');
        this.renderer.setElementStyle(ripple, 'position', 'absolute');
        this.renderer.setElementStyle(ripple, 'height', rippleSize + 'px');
        this.renderer.setElementStyle(ripple, 'width', rippleSize + 'px');
        this.renderer.setElementStyle(ripple, 'pointer-events', 'none');

      

        this.renderer.setElementStyle(ripple, 'background', '#dbdbdb');
        this.renderer.setElementStyle(ripple, 'left', (x - (rippleSize / 2)).toString() + 'px');
        this.renderer.setElementStyle(ripple, 'top', (y - (rippleSize / 2)).toString() + 'px');
        this.renderer.setElementStyle(ripple, 'opacity', '0.5');
        let scaleNumber = this.el.nativeElement.offsetWidth / rippleSize;
        this.renderer.setElementStyle(ripple, 'transition', 'all .6s ease-out');
        this.renderer.setElementStyle(ripple, 'opacity', '0');
        this.renderer.setElementStyle(ripple, 'transform', 'scale(' + scaleNumber * 2 + ')');

       
        setTimeout(() => {
            this.renderer2.removeChild(this.el.nativeElement, ripple);
        }, 600);
    }
}