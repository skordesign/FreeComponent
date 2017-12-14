import { Component, OnInit, Input } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
    selector: 'app-tabbed',
    templateUrl: './tabbed.component.html',
    styles: [
        `
            a {
                cursor: pointer
            }
            a.active{
                color: #AA00FF
            }
            .tabbed{
                overflow: auto;
            }
            
        `
    ]
})
export class TabbedComponent implements OnInit {
    @Input() height:number = 300;
    tabs: TabComponent[] = []
    constructor() { }
    addTab(tab: TabComponent) {
        this.tabs.push(tab);
        this.selectTab(this.tabs[0]);
    }
    selectTab(tab: TabComponent) {
        if (tab.isActivated) {
            return;
        } else {
            this.tabs.forEach(t => t.isActivated = false);
            setTimeout(() => tab.isActivated = true, 250)
        }
    }
    ngOnInit() { }
}