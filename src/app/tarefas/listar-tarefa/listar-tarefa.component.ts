import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';


@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa [];
  constructor(private tarefaService: TarefaService) {

  }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
    this.tarefas = [
      new Tarefa(1, "Testetando", false),
      new Tarefa(2, "oloco bixo", true)
    ]
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?'))
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
  }
}
