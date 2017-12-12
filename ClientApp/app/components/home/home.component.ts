import { Component } from '@angular/core';
import { ConfirmService } from '../../services/confirm.service';
@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent{
    what = "Hello";
    constructor(private _confirm: ConfirmService) { }
    public showDialog() {
        this._confirm.showConfirm(()=> this.writeMessage("Goodbye"),"Test", "Some thing changed");
    }
    public writeMessage = (msg: string) =>{ this.what = msg;};

}

