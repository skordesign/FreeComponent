import { Component } from '@angular/core';
import { ConfirmService } from '../../services/confirm.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ProgressService } from '../../services/progress.service';
@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    what = "Hello";
    constructor(private _confirm: ConfirmService, private progressSvc: ProgressService) { }
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
    p = 0;
    public setProgress = () => this.progressSvc.setPercent(this.p = this.p + 10);
}

