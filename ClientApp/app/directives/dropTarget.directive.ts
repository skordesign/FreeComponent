import { Directive, Input, EventEmitter, Output, HostListener } from "@angular/core";
import { DragDropService } from "@app/services/dragdrop.service";

@Directive({
    selector: '[myDropTarget]'
  })
  export class DropTargetDirective {
    constructor(private dragService: DragDropService) {
    }
  
    @Input()
    set myDropTarget(options: DropTargetOptions) {
      if (options) {
        this.options = options;
      }
    }
  
    @Output('myDrop') drop = new EventEmitter();
  
    private options: DropTargetOptions = {};
  
    @HostListener('dragenter', ['$event'])
    @HostListener('dragover', ['$event'])
    onDragOver(event:any) {
      const { zone = 'zone' } = this.options;
  
      if (this.dragService.accepts(zone)) {
         event.preventDefault();
      }
    }
  
    @HostListener('drop', ['$event'])
    onDrop(event:any) {
      const data =  JSON.parse(event.dataTransfer.getData('Text'));
  
      this.drop.next(data);
    }
  }
  export interface DropTargetOptions {
    zone?: string;
  }