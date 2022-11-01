import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/service/contacto.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private contactoservice: ContactoService) {
    this.contactoservice.loadScript();
  }

  ngOnInit(): void {
  }

}
