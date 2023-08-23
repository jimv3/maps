import { faker } from "@faker-js/faker";

class User {
  name: string;
  locaction: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
  }
}
