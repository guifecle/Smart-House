import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Comodo',
  templateUrl: './Comodo.component.html',
  styleUrls: ['./Comodo.component.scss']
})
export class ComodoComponent implements OnInit {
  comodos: any = [
    {
      ComodoId: 1,
      Nome: "Quarto 1",
      Ligado: true,
    },
    {
      ComodoId: 2,
      Nome: "Quarto 2",
      Ligado: true,
    },
    {
      ComodoId: 3,
      Nome: "Quarto 3",
      Ligado: true,
    },
    {
      ComodoId: 4,
      Nome: "Quarto 4",
      Ligado: true,
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
