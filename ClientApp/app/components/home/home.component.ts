import { Component } from '@angular/core';
import { ConfirmService } from '../../services/confirm.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    what = "Hello";
    constructor(private _confirm: ConfirmService) { }
    public showDialog() {
        this._confirm.showConfirm("Test", "Some thing changed", [{
            text: "ok", func: () => {
                this.writeMessage("Goodbye");
            }
        }, {
            text: "cancel",
            func: () => {
                console.log("Done")
            }
        }]);
    }
    public writeMessage = (msg: string) => { this.what = msg; };
}

