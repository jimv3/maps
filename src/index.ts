/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";

const company = new Company();
console.log(company);

const user = new User();
console.log(user);

new google.maps.Map(document.getElementById('map') as HTMLElement, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
})
