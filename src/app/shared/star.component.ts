import { Component, OnChanges, Input, Output } from '@angular/core'
import { EventEmitter } from 'events';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.sass']
})
export class StarComponent implements OnChanges {
  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5
  }
  starWidth: number
  @Input() rating: number
  @Output() notify: EventEmitter = new EventEmitter()
  onClick(){
    this.notify.emit('clicked')
  }
}
