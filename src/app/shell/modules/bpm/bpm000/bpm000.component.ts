import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {ClientsService} from '../clients.service';
import {LoaderService} from '../../../../shared/loader/loader.service';
import {Client} from '../client.model';
import {Observable} from "rxjs";

@Component({
  selector: 'bg-bpm000',
  templateUrl: './bpm000.component.html',
  styleUrls: ['./bpm000.component.scss']
})
export class Bpm000Component implements OnInit {
  form: FormGroup;
  clients$ = new Observable<Client[] | any[]>();
  constructor(private router: Router, private route: ActivatedRoute,
              private clientService: ClientsService, public loader: LoaderService) {
  }

  onFetchClients() {
    this.clients$ = this.fetchClients();
  }

  ngOnInit(): void {
    this.initForm();
  }

  private fetchClients(): Observable<Client[]>{
    return this.clientService
      .fetchClients({
        firstName: this.form.get('firstName').value,
        lastName: this.form.get('lastName').value,
        clientKey: this.form.get('clientKey').value
      })
      .pipe((obs) => this.loader.useLoader(obs));
  }


  initForm() {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      clientKey: new FormControl('')
    });
  }

  clientClick(client) {
    this.clientService.setClient(client);
    this.router.navigate(['/krn']);
  }

}
