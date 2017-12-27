import { Component, OnInit, Input, Renderer2, Renderer, ElementRef, AfterViewInit, } from '@angular/core';
import { trigger, animate, style, transition, state } from '@angular/animations';
import { GraphColumnInput } from '@app/graph/graph.shared';

@Component({
    selector: 'graph-col',
    templateUrl: './graph-column.component.html',
    styleUrls: ['./graph-column.component.scss'],
    animations: [
        trigger('colChanged', [
            transition(':enter', [style({
                height: 0
            }), animate('1s ease-out', style({ height: '*' }))]),
        ])
    ]
})
export class GraphColumnComponent implements OnInit, AfterViewInit {
    ngAfterViewInit(): void {
        this.funRandom()
    }
    @Input() graph: GraphColumnInput = {
        title: "Graph",
        data: [{
            label: "October",
            value: 120
        }, {
            label: "November", value: 520
        }, {
            label: "December", value: 300
        },
        {
            label: "June",
            value: 900
        }, {
            label: "July", value: 42
        }, {
            label: "Argust", value: 200
        }, {
            label: "October",
            value: 120
        }, {
            label: "November", value: 520
        }, {
            label: "December", value: 300
        },
        {
            label: "June",
            value: 900
        }, {
            label: "July", value: 42
        }, {
            label: "Argust", value: 200
        }, {
            label: "October",
            value: 120
        }, {
            label: "November", value: 520
        }, {
            label: "December", value: 300
        },
        {
            label: "June",
            value: 900
        }, {
            label: "July", value: 42
        }, {
            label: "Argust", value: 200, color:"#8C9EFF"
        }]
    }
    layoutDefault: {
        height: number
        color?: string
        colWidth?: number
        maxHeight: number
    } = { height: 200, color: "#512DA8", colWidth: 60, maxHeight: 200 }
    constructor() { }

    ngOnInit() {
       this.calculateLayout();
    }
    calculateLayout(){
        let maxOf = this.graph.data.reduce((a, b) => a.value > b.value ? a : b).value
        if ((maxOf + 20 * maxOf / 100) < 400) {
            this.layoutDefault.height = 400;
            this.layoutDefault.maxHeight = maxOf + 20 * maxOf / 100;
        } else if ((maxOf + 20 * maxOf / 100) > 400 && (maxOf + 20 * maxOf / 100) < 500) {
            this.layoutDefault.height = maxOf + 20 * maxOf / 100;
            this.layoutDefault.maxHeight = (maxOf + 20 * maxOf / 100);
        } else {
            this.layoutDefault.height = 500;
            this.layoutDefault.maxHeight = (maxOf + 20 * maxOf / 100);
        }
    }
    percent(value: number) {
        return (value / this.layoutDefault.maxHeight) * 100;
    }
    funRandom(){
        this.graph.data.forEach(g=>g.value=Math.random()*this.layoutDefault.maxHeight);
        setTimeout(()=> this.funRandom(),3000);
    }
}

