import { Component, OnInit } from '@angular/core';
import { ServicioPostsService } from '../servicios/servicio-posts.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  datos: any;

  constructor(private servicio: ServicioPostsService) { }

   ngOnInit(): void {
     throw new Error('Method not implemented.');
   }

   buscarPosts(){
    console.log('buscar');
    this.datos = this.servicio.getPosts();
   }
}
