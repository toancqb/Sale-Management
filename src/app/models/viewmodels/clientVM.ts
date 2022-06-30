import {Client} from "../client";

export class ClientVM {
  public id: number;
  public first_name: string = '';
  public last_name: string = '';
  public telephoneNumber: string = '';
  public email: string = '';
  public address: string = '';

  constructor() {}

  public static toClient(client: Client): ClientVM {
    return new ClientVM()
      .buildName(client.first_name, client.last_name)
      .buildTelephoneNumber((client.telephoneNumber))
      .buildEmail(client.email)
      .buildAddress(client.address);
  }

  public buildName(firstName: string, lastName: string): ClientVM {
    this.first_name = firstName;
    this.last_name = lastName
    return this;
  }

  public buildTelephoneNumber(telephoneNumber: string): ClientVM {
    this.telephoneNumber = telephoneNumber;
    return this;
  }

  public buildAddress(address: string): ClientVM {
    this.address = address;
    return this;
  }

  public buildEmail(email: string): ClientVM {
    this.email = email;
    return this;
  }
}
