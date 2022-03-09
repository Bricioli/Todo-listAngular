import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar-tarefa';
import { CadastrarTarefaComponent } from './cadastrar-tarefa';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';



@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
