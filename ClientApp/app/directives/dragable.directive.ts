import { DragDropService } from "@app/services/dragdrop.service";
import { Directive, HostBinding, Input, HostListener } from "@angular/core";

@Directive({
    selector: '[myDraggable]'
  })
  export class DraggableDirective {
    constructor(private dragService: DragDropService) {
    }
  
    @HostBinding('draggable')
    get draggable() {
      return true;
    }
  
    @Input()
    set myDraggable(options: DraggableOptions) {
      if (options) {
        this.options = options;
      }
    }
  
    private options: DraggableOptions = {};
  
    @HostListener('dragstart', ['$event'])
    onDragStart(event:any) {
      const { zone = 'zone', data = {} } = this.options;
  
      this.dragService.startDrag(zone);
  
      event.dataTransfer.setData('Text', JSON.stringify(data));
    }
  }
  export interface DraggableOptions {
    zone?: string;
    data?: any;
  }