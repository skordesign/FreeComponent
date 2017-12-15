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
    .btn{
        box-shadow: 0 1px 2px rgba(0,0,0,0.16), 0 1px 6px rgba(0,0,0,0.23);
        border-radius: 30px;
        padding: 8px  16px;
        font-family: Montserrat
    }
    @font-face {
        font-family: Montserrat;
        src: url(fonts/Montserrat-Regular.ttf);
    }
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

