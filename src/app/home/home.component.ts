import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  @ViewChild('videoPlayer') videoPlayer: ElementRef | undefined;

  videoSources: string[] = [
    'assets/homeImage/INTRODUCTORYF.mp4',
    'assets/homeImage/JJONTHEWAY30SECTVCF3.mp4',
    'assets/homeImage/JJONTHEWAY15SECTVCF1.mp4'
  ];
  currentVideoIndex = 0;

  constructor(){}
  
  ngAfterViewInit(): void {
    this.videoPlayer?.nativeElement.addEventListener('ended', () => {
      this.playNextVideo();
    });
  }

  playNextVideo(): void {
    this.currentVideoIndex++;
    if (this.currentVideoIndex >= this.videoSources.length) {
      this.currentVideoIndex = 0;
    }
    this.videoPlayer!.nativeElement.src = this.videoSources[this.currentVideoIndex];
    this.videoPlayer?.nativeElement.play();
  }
}
