import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  count = 0;
  interval:any;

  oddNumber:  number[] = [];
  evenNumber: number[] = [];


  @Output() gameEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

// When starting the game, an event (holding an incrementing number) should get emitted each second (ref = setInterval())
  onStart() {
    this.interval = setInterval(() => {
      this.gameEmitter.emit(this.count++);
      console.log('Index:',this.count);
      this.onEachInterval(this.count);
    }, 1000);
  }

  // When stopping the game, no more events should get emitted (clearInterval(ref))
  onPause() {
    clearInterval(this.interval);
    console.log('Game pause.');
  }

  onEachInterval(count: number) {
    if (count % 2 === 0) {
      this.evenNumber.push(count);
    } else {
      this.oddNumber.push(count);
    }
  }

}

