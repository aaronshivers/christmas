import { Component, OnInit } from '@angular/core';
import { STORY } from '../story';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  story;

  constructor() { }

  ngOnInit() {
    this.getStory();
  }

  getStory(): void {
    this.story = STORY;
  }
}
