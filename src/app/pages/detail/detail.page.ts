import { PlaceService } from '../../services/data/place.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  private place: Object;

  constructor(
    public route: ActivatedRoute,
    public placeService: PlaceService,
    public router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.placeService.getById(id).subscribe((place) => {
      this.place = place;
    });
  }

  async delete(name) {
    const placeId = this.route.snapshot.params['id'];
    this.placeService.delete(placeId).subscribe((placeId) => {
      this.router.navigate(['list']);
    });
  }
}
