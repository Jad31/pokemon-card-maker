import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import {DownloadCardComponent} from '@team-booster-pack/download-card'

@Component({
  standalone: true,
  imports: [NgOptimizedImage, DownloadCardComponent],
  selector: 'team-booster-pack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'team-booster-pack';
  rarity = 'basic';
  name = 'Jad';
  health = 100;
  characterMeta = 'Frontend Developer and DevOps';
}
