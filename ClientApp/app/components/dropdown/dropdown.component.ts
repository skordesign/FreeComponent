import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropdownItemComponent } from './dropdownItem/dropdownItem.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html'
})
export class DropdownComponent implements OnInit {
    // selectionChanged return DropdownItemComponent => this.value to get value
    @Output() selectionChanged = new EventEmitter<any>();
    @Input() placeholder = "Hello"
    // isActivated = true => dropdown show items
    isActivated = false;
    items: DropdownItemComponent[] = [];
    selectedItem: any;
    constructor() { }
    addItem(item: DropdownItemComponent) {
        this.items.push(item);
    }
    selectItemEmit(item: DropdownItemComponent) {
        this.selectItem(item);
        this.selectionChanged.emit(item);
    }
    selectItem(item: DropdownItemComponent) {
        this.items.forEach(i => i.isSelected = false);
        item.isSelected = true;
        this.placeholder = item.text;
        this.selectedItem = item;
    }
    ngOnInit() { }
}