import { Establishment } from './../../models/establishment.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  id: string;
  loaded: boolean = false;
  list: Establishment[];
  item: Establishment = {
    id: '',
    index: null,
    guid: null,
    picture: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    registered: '',
    latitude: '',
    longitude: ''
  };
  detailsForm: FormGroup;
  saved: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['slug'];
    this.getItem();
    this.buildForm();
  }

  private getItem() {
    this.list = JSON.parse(localStorage.getItem('lista-james'));
    this.item = this.list.find(item => item.id === this.id);
  }

  private buildForm() {
    this.detailsForm = new FormGroup({
      'name': new FormControl(this.item.name, Validators.required),
      'email': new FormControl(this.item.email, [Validators.required, Validators.email]),
      'address': new FormControl(this.item.address, Validators.required),
      'phone': new FormControl(this.item.phone, Validators.required)
    });
    this.loaded = true;
  }

  public onSubmit() {
    let values = this.detailsForm.value;
    this.item.name = values.name;
    this.item.email = values.email;
    this.item.address = values.address;
    this.item.phone = values.phone;
    for (let i in this.list) {
      this.list[i].id === this.id ? this.list[i] = this.item : null;
    }
    localStorage.setItem('lista-james', JSON.stringify(this.list));
    this.saved = true;
    setTimeout(function() {
      this.saved = false;
    }, 3000);
  }

}
