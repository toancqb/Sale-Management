import {Injectable} from "@angular/core";
import {NgxIndexedDBService} from "ngx-indexed-db";
import {Client} from "../../models/client";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ClientRepository {
  constructor(private dbService: NgxIndexedDBService) { }

  public create(client: Client): Observable<Client> {
    return this.dbService.add('client', {
      first_name: client.first_name,
      last_name: client.last_name,
      telephoneNumber: client.telephoneNumber,
      email: client.email,
      address: client.address
    });
  }

  public getAll(): Observable<Client[]> {
    return this.dbService.getAll('client');
  }

  public getById(id: string): Observable<Client> {
    return this.dbService.getByID('client', id);
  }
}
