import { Component, ViewChild, AfterViewInit, AfterViewChecked, PLATFORM_ID, Inject, OnInit } from '@angular/core';
import { ConfirmService } from '../../services/confirm.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ProgressService } from '../../services/progress.service';
import { DropdownItemComponent } from '../dropdown/dropdownItem/dropdownItem.component';
import { LoadingService } from '../../services/loading.service';
import { MenuItem } from '@app/components/action-menu/action-menu.component';
import { TdTextEditorComponent } from '@covalent/text-editor';
import { isPlatformBrowser } from '@angular/common';
import { Http } from '@angular/http';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styles: [`
   
    `]
})
export class HomeComponent {
    editor: boolean = false;
    constructor( @Inject(PLATFORM_ID) platformId: string, private http:Http) {
        if (isPlatformBrowser(platformId)) {
            this.editor = true
        }
        this.getData();
    }
    getData(){
      
        
    }
}

