import { Gender } from "./gender";

export class User {
  id = 0;
  firstName: string;
  lastName: string;
  birthDate: string;
  age: number
  gender: Gender;
  weight: number;
  height: number;

  // get fullName(): string {
  //   return this.firstName + " " + this.lastName;
  // }

  // get age(): number {
  //   var timeDiff = Math.abs(Date.now() - this.birthDate);
  //     return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  // }

  // get sex(): string {
  //   return Gender[this.gender];
  // }

}
