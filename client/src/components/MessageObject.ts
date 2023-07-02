export default class messageObject {
  name: string;
  message: string;
  datePosted: Date;

  constructor(name: string, message: string, datePosted: Date) {
    this.name = name;
    this.message = message;
    this.datePosted = datePosted;
  }
}
