import { Component } from "@angular/core";

@Component({
    selector: 'auto-complete-input',
    templateUrl: './autoCpltInput.component.html'
})
export class AutoCompleteInputComponent {
    textChanged(text:any){
        console.log(text)
    }
}