import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GraphColumnInput } from '@app/graph/graph.shared';

@Component({
    selector: 'graph-line',
    templateUrl: 'graph-line.component.html'
})

export class GraphLineComponent implements OnInit, AfterViewInit {
    ngAfterViewInit(): void {
        this.funRandom()
    }
    @ViewChild('canvas') canvas: ElementRef;
    ctx: CanvasRenderingContext2D;
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
            label: "Argust", value: 200, color: "#8C9EFF"
        }]
    }
    layoutDefault: {
        height: number
        color?: string
        width?: number
        maxHeight: number
    } = { height: 400, color: "#512DA8", width: 600, maxHeight: 400 }
    constructor() { }

    ngOnInit() {
        this.calculateLayout();
    }
    calculateLayout() {
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
        this.layoutDefault.width = this.layoutDefault.height * 3 / 2;
    }
    draw() {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = '#000000';
        this.ctx.font = "14px Segoe UI Symbol";
        this.ctx.lineJoin = this.ctx.lineCap = 'round';
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle =
            this.ctx.font = "14px Segoe UI Symbol";
        this.ctx.lineJoin = this.ctx.lineCap = 'round';
        var points: { x: number, y: number }[] = [];
        let maxHeigh = this.layoutDefault.maxHeight;
        let height = this.layoutDefault.height;
        let width = this.layoutDefault.width;
        let length = this.graph.data.length;
        var x = 20;
        this.graph.data.forEach(g => {
            let y = Math.abs(height - g.value / maxHeigh * height);
            points.push({ x: x, y: y });
            x = x + width! / length;
        });


        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);
        this.ctx.strokeText(this.graph.data[0].value.toString(), points[0].x - 10, points[0].y - 10)
        for (var i = 1; i < points.length; i++) {
            this.ctx.lineTo(points[i].x, points[i].y);
            this.ctx.strokeText(this.graph.data[i].value.toString(), points[i].x - 10, points[i].y - 10)
        }
        this.ctx.stroke();
    }
    drawSmooth() {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        
        this.ctx.clearRect(0, 0, this.layoutDefault.width!, this.layoutDefault.height);
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = '#ff0000';
        this.ctx.font = "14px Segoe UI Symbol";
        this.ctx.lineJoin = this.ctx.lineCap = 'round';
        var points: { x: number, y: number }[] = [];
        let maxHeigh = this.layoutDefault.maxHeight;
        let height = this.layoutDefault.height;
        let width = this.layoutDefault.width;
        let length = this.graph.data.length;
        var x = 20;
        this.graph.data.forEach(g => {
            let y = Math.abs(height - g.value / maxHeigh * height);
            points.push({ x: x, y: y });
            x = x + width! / length;
        });

        var p1 = points[0];
        var p2 = points[1];

        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.strokeText(this.graph.data[0].value.toString(), p1.x, p1.y)
        for (var i = 1; i < points.length; i++) {
            var midPoint = this.midPointBtw(p1, p2);
            this.ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
            this.ctx.strokeText(this.graph.data[i - 1].value.toString(), p1.x, p1.y)
            p1 = points[i];
            p2 = points[i + 1];
        }
        this.ctx.lineTo(p1.x, p1.y);
        this.ctx.stroke();
    }
    midPointBtw(p1: { x: number, y: number }, p2: { x: number, y: number }) {
        return {
            x: p1.x + (p2.x - p1.x) / 2,
            y: p1.y + (p2.y - p1.y) / 2
        };
    }
    funRandom() {
        this.graph.data.forEach(g => g.value = Math.random() * this.layoutDefault.maxHeight);
        this.drawSmooth();
        this.draw();
        setTimeout(() => this.funRandom(), 3000);
    }
}