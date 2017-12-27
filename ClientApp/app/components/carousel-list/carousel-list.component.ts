import { Component, OnInit, Input, ElementRef, Renderer, ViewChild, AfterViewInit, AfterViewChecked, PLATFORM_ID, Inject, Renderer2 } from '@angular/core';
import { trigger, transition, style, animate, state, group } from '@angular/animations';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
    selector: 'app-carousel-list',
    templateUrl: 'carousel-list.component.html',
    styleUrls: ['./carousel-list.component.scss'],
    animations: [
        trigger('smoothchange', [
            state('void', style({ transform: 'translateX(0)'})),
            transition('void => *', [
                style({ transform: 'translateX(100%)'}),
                animate('500ms ease-out')
            ]),
            transition('* => void', [
                animate('500ms ease-in', style({ transform: 'translateX(-100%)' }))
            ])
        ])
    ]
})

export class CarouselListComponent implements OnInit {
    ngAfterViewChecked(): void {
    }
    @Input() listItem: CarouselItem[]
    @Input() show: number = 4;
    @Input() size: number = 136;
    @ViewChild('carousel') carousel: ElementRef;
    public static server: string;
    constructor(private el: ElementRef, private render: Renderer, @Inject(PLATFORM_ID) platformId: object, private render2: Renderer2) {
        if (isPlatformBrowser(platformId)) {
            setTimeout(() => this.slide(), 3000);
        }
    }
    ngOnInit() {
    }
    slide() {
        let item = this.listItem.shift();
        this.listItem.push(item!);
        setTimeout(() => this.slide(), 3000)
    }
}

interface CarouselItem {
    img: string;
    text: string
    url: string;
}