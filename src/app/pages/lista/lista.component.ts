import { Establishment } from './../../models/establishment.model';
import { RequestsService } from './../../services/requests.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  list: Establishment[];
  isLoading = false;

  constructor(private service: RequestsService) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    if (localStorage.getItem('lista-james')) {
      this.list = JSON.parse(localStorage.getItem('lista-james'));
    } else {
      this.isLoading = true;
      this.service.getList().subscribe(data => {
        this.list = data;
        this.isLoading = false;
        localStorage.setItem('lista-james', JSON.stringify(data));
      });
    }
  }

}
