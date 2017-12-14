import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { DropdownComponent } from '../dropdown.component';

@Component({
    selector: 'app-dropdownItem',
    templateUrl: './dropdownItem.component.html'
})
export class DropdownItemComponent implements OnInit, AfterViewInit {
    ngAfterViewInit(): void {
    }
    @Input() value: any;
    @Input() content: string;
    constructor(private dropdown: DropdownComponent) {
        this.dropdown.addItem(this);
    }
    selectItem() {
        this.dropdown.selectItemEmit(this.value, this.content);
    }
    ngOnInit() {
    }
}