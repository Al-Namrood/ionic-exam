import { PlaceModel } from '../../models/place.model';
import { PlaceService } from '../../services/data/place.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  private placeForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public placeService: PlaceService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.placeForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        image: [''],
        location: ['', [Validators.required]],
        note: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      },
      {
        validator: this.validateImage('image'),
      }
    );
  }

  save() {
    if (!this.placeForm.valid) {
      return;
    }

    const values = this.placeForm.value;

    const place = new PlaceModel(
      values['name'],
      values['image'],
      values['location'],
      values['note'],
      new Date()
    );

    this.placeService.create(place).subscribe((place) => {
      this.router.navigate(['/detail', place.id]);
    });
  }

  getForm() {
    return this.placeForm.controls;
  }

  validateImage(form: string) {
    return (formGroup: FormGroup) => {
      const image = formGroup.controls[form];

      if (image.value) {
        return image.setErrors(null);
      }

      const regex =
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
      if (image.value && regex.test(image.value)) {
        return image.setErrors(null);
      }

      return image.setErrors({ noImage: true });
    };
  }
}
