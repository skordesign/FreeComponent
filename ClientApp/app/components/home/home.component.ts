import { Component } from '@angular/core';
import { ConfirmService } from '../../services/confirm.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ProgressService } from '../../services/progress.service';
import { DropdownItemComponent } from '../dropdown/dropdownItem/dropdownItem.component';
import { LoadingService } from '../../services/loading.service';
import { MenuItem } from '@app/components/action-menu/action-menu.component';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styles: [`
   
    `]
})
export class HomeComponent {
    what = "Hello";
    actionItems: MenuItem[] = [{
        iconClass: "fa fa-star",
        text: "Upload",
    }, {
        iconClass: "fa fa-star-o",
        text: "Download",
        action: () => this.loadingSvc.showLoading(true)
    }]
    constructor(private _confirm: ConfirmService, private progressSvc: ProgressService, private loadingSvc: LoadingService) { }



    carouselItems: any[] = [
        {
            img: "https://pbs.twimg.com/profile_images/875416480547917824/R6wl9gWl.jpg",
            text: "Microsoft",
            url: "https://www.microsoft.com"
        }, {
            img: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201709101434",
            text: "Apple",
            url: "https://www.apple.com"
        }, {
            img: "https://pbs.twimg.com/profile_images/839721704163155970/LI_TRk1z_400x400.jpg",
            text: "Google",
            url: "https://www.google.com"
        }, {
            img: "https://ubistatic-a.akamaihd.net/0096/SiteBuilder/PROD/Default/img/logo.png",
            text: "Ubisoft",
            url: "https://www.ubisoft.com"
        }, {
            img: "https://welsherofscotia.files.wordpress.com/2014/02/crytek.jpg",
            text: "Crytek",
            url: "https://www.crytek.com"
        }, {
            img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Valve_logo.svg",
            text: "Valve",
            url: "https://www.valve.com"
        }, {
            img: "http://www.techcentral.ie/wp-content/uploads/2015/01/steam_logo.jpg",
            text: "Steam",
            url: "https://www.steam.com"
        }, {
            img: "https://pbs.twimg.com/profile_images/875416480547917824/R6wl9gWl.jpg",
            text: "Microsoft",
            url: "https://www.microsoft.com"
        }, {
            img: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201709101434",
            text: "Apple",
            url: "https://www.apple.com"
        }, {
            img: "https://pbs.twimg.com/profile_images/839721704163155970/LI_TRk1z_400x400.jpg",
            text: "Google",
            url: "https://www.google.com"
        }, {
            img: "https://ubistatic-a.akamaihd.net/0096/SiteBuilder/PROD/Default/img/logo.png",
            text: "Ubisoft",
            url: "https://www.ubisoft.com"
        }, {
            img: "https://welsherofscotia.files.wordpress.com/2014/02/crytek.jpg",
            text: "Crytek",
            url: "https://www.crytek.com"
        }, {
            img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Valve_logo.svg",
            text: "Valve",
            url: "https://www.valve.com"
        }, {
            img: "http://www.techcentral.ie/wp-content/uploads/2015/01/steam_logo.jpg",
            text: "Steam",
            url: "https://www.steam.com"
        }
    ]
}

