import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmDialogComponent } from './components/confirmDialog/confirmDialog.component';
import { ConfirmService } from './services/confirm.service';
import { ProgressService } from './services/progress.service';
import { ProgressComponent } from './components/progressBar/progressBar.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownItemComponent } from './components/dropdown/dropdownItem/dropdownItem.component';
import { ClickOutsideDirective } from './directives/clickOutside.directive';
import { TabbedComponent } from './components/tabbed/tabbed.component';
import { TabComponent } from './components/tabbed/tab/tab.component';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ConfirmDialogComponent, ProgressComponent, DropdownComponent, DropdownItemComponent,
        ClickOutsideDirective, TabbedComponent, TabComponent    
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers:[ConfirmService, ProgressService],
    schemas:[NO_ERRORS_SCHEMA]
})
export class AppModuleShared {
}
