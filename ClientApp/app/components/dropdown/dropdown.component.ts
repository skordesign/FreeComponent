import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropdownItemComponent } from './dropdownItem/dropdownItem.component';
import { Subscription } from 'rxjs/Subscription';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html', animations: [
        trigger('dropdownChangedDisplay', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate(250, style({ opacity: '*' }))
            ]),
            transition('* => void', [
                style({ opacity: '*' }),
                animate(250, style({ opacity: 0 }))
            ]),

        ])
    ], styleUrls:['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
    // selectionChanged return DropdownItemComponent => this.value to get value
    @Output() selectionChanged = new EventEmitter<any>();
    @Input() placeholder = "Select item"
    @Input() header = "Pick item";
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
        this.selectedItem = item;
        this.isActivated = false;
    }
    ngOnInit() { }
}