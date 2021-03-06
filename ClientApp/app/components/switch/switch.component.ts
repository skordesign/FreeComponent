import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
    @Input() isChecked:boolean = false;
    constructor() { }

    ngOnInit() { }
}