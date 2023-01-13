import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-movies-paginate',
  templateUrl: './movies-paginate.component.html',
  styleUrls: ['./movies-paginate.component.css']
})
export class MoviesPaginateComponent implements OnInit {
  @Input() paginaAtual: number = 0;
  @Input() tamanhoPagina: number = 0;
  @Input() totalPaginas: number = 0;

  @Output() listaPaginada: EventEmitter<any> = new EventEmitter<any>();

  listaBotoesTotal = [{ numero: 1, selecionada: false }];
  listaBotoes = [{ numero: 1, selecionada: false }];
  flag3pontosDireita = false;
  flag3pontosEsquerda = false;

  constructor() { }

  ngOnInit(): void {
    this.gerarListaBotoes();
    this.ativaBotaoPageAtual();
    this.separaListaBotoesRange();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.gerarListaBotoes();
    this.ativaBotaoPageAtual();
    this.separaListaBotoesRange();
  }

  emitir() {
    // um pequeno delay no emit apenas para evitar um erro expression has changed after it was checked
    setTimeout(() => {
      this.listaPaginada.emit({ paginaAtual: this.paginaAtual });
    }, 1);
  }

  separaListaBotoesRange() {
    const x1 =
      Math.floor(this.paginaAtual - this.tamanhoPagina) >= 0 ? Math.floor(this.paginaAtual - this.tamanhoPagina) : 0;
    const x2 = Math.floor(this.paginaAtual + this.tamanhoPagina);

    this.listaBotoes = this.listaBotoesTotal.slice(x1, x2);

    if (x1 > 0) {
      this.flag3pontosDireita = true;
    } else {
      this.flag3pontosDireita = false;
    }

    if (x2 < this.listaBotoesTotal.length) {
      this.flag3pontosEsquerda = true;
    } else {
      this.flag3pontosEsquerda = false;
    }

    this.ativaBotaoPageAtual();
  }

  gerarListaBotoes() {
    const lista = [];

    for (let a = 0; a < this.totalPaginas; a++) {
      lista.push({ numero: a + 1, selecionada: false });
    }

    this.listaBotoesTotal = lista;
  }

  clickBotao(botao: any) {
    this.paginaAtual = Number(botao.numero);
    this.separaListaBotoesRange();
    this.emitir();
  }

  ativaBotaoPageAtual() {
    this.listaBotoesTotal.forEach(b => b.selecionada = false)

    if (this.listaBotoesTotal[this.paginaAtual - 1]) {
      this.listaBotoesTotal[this.paginaAtual - 1].selecionada = true;
    }
  }

  primeira() {
    this.paginaAtual = 1;
    this.separaListaBotoesRange();
    this.emitir();
  }

  anterior() {
    if (this.paginaAtual > 1) {
      this.paginaAtual -= 1;
    }
    this.separaListaBotoesRange();
    this.emitir();
  }

  ultima() {
    this.paginaAtual = this.totalPaginas;
    this.separaListaBotoesRange();
    this.emitir();
  }

  proxima() {
    if (this.paginaAtual !== this.totalPaginas) {
      this.paginaAtual += 1;
    }

    this.separaListaBotoesRange();
    this.emitir();
  }

}
