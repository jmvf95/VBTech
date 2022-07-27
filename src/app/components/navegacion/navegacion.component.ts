import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'vbtech-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {

    this.fondoNavegacionAlHacerScroll();
  }

  /**
   * Funcion para controlar el Scroll y añadir un fondo negro al navegador
   */
  fondoNavegacionAlHacerScroll(): void{
    let nav: any = this._document.querySelector('nav');
    let resolucion: any = screen.height;
    window.addEventListener('scroll', function(){
      if(this.window.pageYOffset > resolucion - 100){
        nav.classList.add('fondo-negro-nav', 'shadow');
      }else{
        nav.classList.remove('fondo-negro-nav', 'shadow');
      }
    });
  }

}
