import { Component, Output, Input } from "@angular/core";

@Component({
    selector: 'app-rating-bar',
    templateUrl: './ratingBar.component.html',
    styles:[`
        .fill{
            background: black;
        }
    `]
})
export class RatingBarComponent {
    @Input() rating: number = 3;
    @Input() max: number = 5;
    range(star:number){
        var arr =[];
        for (let index = 1; index <= this.max ; index++) {
            arr.push(index);
        }
        return arr;
    }
    selectStar(i:number){
        this.rating = i;
    }
}