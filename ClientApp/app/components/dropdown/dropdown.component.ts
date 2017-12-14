import { Component, OnInit, Input } from '@angular/core';
import { DropdownItemComponent } from './dropdownItem/dropdownItem.component';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit {
    @Input() placeholder = "Hello"
    isActivated = false;
    items: DropdownItemComponent[] = [];
    selectedItem: any;
    constructor() { }
    addItem(item: DropdownItemComponent) {
        this.items.push(item);
    }
    selectItemEmit(item: any, content: string) {
        this.placeholder = content;
        this.selectedItem = item;
    }
    ngOnInit() { }
}