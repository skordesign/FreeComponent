import { Component } from '@angular/core';

@Component({
    selector: 'sample',
    template: `
  <ckeditor
    [(ngModel)]="ckeditorContent"
    [config]="{uiColor: '#FFFFFF'}"
    [readonly]="false"
    (change)="onChange($event)"
    (ready)="onReady($event)"
    (focus)="onFocus($event)"
    (blur)="onBlur($event)"
    debounce="500">
    <ckbutton [name]="'saveButton'"
        [command]="'saveCmd'"
        (click)="save($event)"
        [icon]="'save.png'"
        [label]="'Save Document'"
        [toolbar]="'clipboard,1'">
  </ckbutton>
  </ckeditor>
  `
})
export class Sample {
    ckeditorContent: string;
    constructor() {
        this.ckeditorContent = `<p>My HTML</p>`;
    }
    onChange($event:any){
        console.log($event)
    }
    onReady($event:any){

    }
    onFocus($event:any){

    }
    onBlur($event:any){

    }
    save($event:any){

    }
}