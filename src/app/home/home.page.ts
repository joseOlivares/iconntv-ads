import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../core/services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  xPhotos:any;
  clicked:boolean=false;

  constructor(private photoService:PhotoService) {
  }
  ngOnInit(): void {
    this.photoService.getPhotos().subscribe((photos)=>{
        this.xPhotos=photos;
        console.log(this.xPhotos);
    });
  }



  hideToolbar() {
    this.clicked = !this.clicked;
  }

  showToolbar(){
    this.clicked=true;
  }


}
