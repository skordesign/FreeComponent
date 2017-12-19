import { Component } from '@angular/core';
import { ConfirmService } from '../../services/confirm.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ProgressService } from '../../services/progress.service';
import { DropdownItemComponent } from '../dropdown/dropdownItem/dropdownItem.component';
import { LoadingService } from '../../services/loading.service';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styles:[`
   
    `]
})
export class HomeComponent {
    what = "Hello";
    constructor(private _confirm: ConfirmService, private progressSvc: ProgressService, private loadingSvc: LoadingService) { }
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
    selectItem: any;

    items: any[] = [
        {
            text: "Hello",
            value: 1
        }, {
            text: "Goodbye",
            value: 2
        }
    ]
    selectNewItem(item: any) {
        console.log(item);
    }
    showLoading = () => {
        this.loadingSvc.showLoading(true);
        setTimeout(() => this.loadingSvc.showLoading(false), 5000);
    }
    navigate(item: any) {
        console.log(item)
        if(item.text=="Hello"){
            console.log(item.text)
        }else{
            alert(item.text);
        }
    }
}

