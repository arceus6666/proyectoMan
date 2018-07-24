export class User {
  constructor(
    public email: string,
    public name: string,
    public lastName: string,
    public age: number,
    public role: boolean,
    public avatar: string,
    public password: string,
    public signupDate: Date,
    public lastLogin: Date
  ){}
}
