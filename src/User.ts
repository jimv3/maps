import { faker } from "@faker-js/faker";

export class User {
  name: string;
  locaction: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.person.firstName();
    this.locaction = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  }
}
