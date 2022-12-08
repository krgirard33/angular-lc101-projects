import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'http://hatedome.com/wp-content/uploads/2015/11/firedance.jpg';
  image2 = 'https://gregdisch.com/wp-content/uploads/2019/07/Turners-Mill-Waterwheel-20181028-IMG_7302-HDR-1.jpg';
  image3 = 'http://no-sin.com/images/Archon/Archon05/images/dscn2043.jpg';

  constructor() { }

  ngOnInit() {
  }

}