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
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingService } from './services/loading.service';
import { RatingBarComponent } from '@app/components/ratingBar/ratingBar.component';
import { AutoCompleteInputComponent } from '@app/components/autoCompleteInput/autoCpltInput.component';
import { ExpansibleCardComponent } from '@app/components/expansible-card/expansible-card.component';
import { PopoverComponent } from '@app/components/popover/popover.component';
import { CheckboxComponent } from '@app/components/checkbox/checkbox.component';
import { OverlayPopupComponent } from '@app/components/overlay-popup/overlay-popup.component';
import { DropTargetDirective } from '@app/directives/dropTarget.directive';
import { DraggableDirective } from '@app/directives/dragable.directive';
import { DragDropService } from '@app/services/dragdrop.service';
import { RippleDirective } from '@app/directives/ripple.directive';
import { TwoSideCardComponent } from '@app/components/2side-card/2side-card.component';
import { ActionMenuComponent } from '@app/components/action-menu/action-menu.component';
import { ActionItemComponent } from '@app/components/action-menu/action-item/action-item.component';
import { CarouselListComponent } from '@app/components/carousel-list/carousel-list.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ConfirmDialogComponent, ProgressComponent, DropdownComponent, DropdownItemComponent, ExpansibleCardComponent,
        ClickOutsideDirective, TabbedComponent, TabComponent, LoadingComponent, AutoCompleteInputComponent,OverlayPopupComponent,
        PopoverComponent, CheckboxComponent,DropTargetDirective, DraggableDirective, CarouselListComponent,
        RatingBarComponent,RippleDirective, TwoSideCardComponent, ActionMenuComponent, ActionItemComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'admin', component: HomeComponent },
            { path: '**', redirectTo: 'home/error' }
        ])
    ],
    providers:[ConfirmService, ProgressService, LoadingService, DragDropService],
    schemas:[NO_ERRORS_SCHEMA]
})
export class AppModuleShared {
}
