import { NgModule } from '@angular/core';
import { GraphColumnComponent } from '@app/graph/graph-column/graph-column.component';
import { CommonModule } from '@angular/common';
import { GraphLineComponent } from '@app/graph/graph-line/graph-line.component';

@NgModule({
    imports: [CommonModule],
    exports: [GraphColumnComponent, GraphLineComponent],
    declarations: [GraphColumnComponent, GraphLineComponent],
    providers: [],
})
export class GraphModule { }
