import { LocationModel } from './location.model';

export class PlaceModel {
  public id: number;

  constructor(
    public name: string,
    public image: string,
    public location: LocationModel,
    public note: number,
    public createdAt: Date
  ) {}
}
