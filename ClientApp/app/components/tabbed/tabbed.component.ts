import { Component, OnInit, Input } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-tabbed',
    templateUrl: './tabbed.component.html',
    styleUrls: ['./tabbed.component.scss']
})
export class TabbedComponent implements OnInit {
    @Input() height: number = 300;
    tabs: TabComponent[] = []
    constructor() { }
    addTab(tab: TabComponent) {
        this.tabs.push(tab);
    }
    selectTab(tab: TabComponent) {
        this.tabs.forEach(t => t.isActivated = false);
        setTimeout(() => tab.isActivated = true, 250)
    }
    ngOnInit() {
    }
}