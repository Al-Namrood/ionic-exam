import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/services/data/place.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  private places: Object;

  constructor(public placeService: PlaceService) {}

  ngOnInit() {
    this.placeService.getAll().subscribe((places) => {
      this.places = places;
    });
  }
}
