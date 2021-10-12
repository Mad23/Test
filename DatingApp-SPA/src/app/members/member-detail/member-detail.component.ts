import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF  } from 'ngx-image-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
user: User;

@ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;

// galleryOptions: NgxGalleryOptions[];
//galleryImages: NgxGalleryImage[];

conf: GALLERY_CONF = {
  imageOffset: '0px',
  showDeleteControl: false,
  showImageTitle: false,
};

images: GALLERY_IMAGE[];

  constructor(private userService: UserService, private alertify: AlertifyService, private routes: ActivatedRoute) { }

  ngOnInit() {
   this.routes.data.subscribe(data => {
     this.user = data['user'];
   });

  //  this.galleryOptions = [{
  //    width: '500px',
  //    height: '500px',
  //    imagePercent: 100,
  //    thumbnailsColumns: 4,
  //    imageAnimation: NgxGalleryAnimation.Slide,
  //    preview: false

  //  }];
   this.images = this.getImages();
  }

  getImages(){
    const imageUrls = [];
    for ( const photo of this.user.photos){
      imageUrls.push({
        // small: photo.url,
        // medium: photo.url,
        // big: photo.url,
        // description: photo.description
        url: photo.url,
        altText: this.user.knownAs,
        title: photo.description,
        thumbnailUrl: photo.url
      });
    }
    return imageUrls;
  }

  openGallery(index: number = 0) {
    this.ngxImageGallery.open(index);
  }
	
  // close gallery
  closeGallery() {
    this.ngxImageGallery.close();
  }
	
  // set new active(visible) image in gallery
  newImage(index: number = 0) {
    this.ngxImageGallery.setActiveImage(index);
  }
	
  // next image in gallery
  nextImage(index: number = 0) {
    this.ngxImageGallery.next();
  }
	
  // prev image in gallery
  prevImage(index: number = 0) {
    this.ngxImageGallery.prev();
  }
	
  /**************************************************/
	
  // EVENTS
  // callback on gallery opened
  galleryOpened(index) {
    console.info('Gallery opened at index ', index);
  }

  // callback on gallery closed
  galleryClosed() {
    console.info('Gallery closed.');
  }

  // callback on gallery image clicked
  galleryImageClicked(index) {
    console.info('Gallery image clicked with index ', index);
  }
  
  // callback on gallery image changed
  galleryImageChanged(index) {
    console.info('Gallery image changed to index ', index);
  }

  // callback on user clicked delete button
  deleteImage(index) {
    console.info('Delete image at index ', index);
  }

  // for getUser by id we need to pass the id as a param
  // we can do that by using ActivatedRoutes. We instantiate it in constructor then +this.routes.snapshot.params['id'] takes the id and convert it into a number
  // loadUser(){
  //   this.userService.getUser(+this.routes.snapshot.params['id']).subscribe((user: User) => {
  //     this.user = user;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  // }

}
