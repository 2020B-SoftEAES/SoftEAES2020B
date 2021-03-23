import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {MainLayoutComponent} from './component/main-layout/main-layout.component';
import {ListarEstudiantePageComponent} from './pages/estudiante/listar-estudiante.page/listar-estudiante.page.component';
import {CrearEstudiantePageComponent} from './pages/estudiante/crear-estudiante.page/crear-estudiante.page.component';
import {EditarEstudiantePageComponent} from './pages/estudiante/editar-estudiante.page/editar-estudiante.page.component';
import {ListarInstructorPageComponent} from './pages/instructor/listar-instructor-page/listar-instructor-page.component';
import {CrearInstructorPageComponent} from './pages/instructor/crear-instructor-page/crear-instructor-page.component';
import {EditarInstructorPageComponent} from './pages/instructor/editar-instructor-page/editar-instructor-page.component';
import {SimularExamenPageComponent} from './pages/examen/simular-examen-page/simular-examen-page.component';
import {ListarExamenPageComponent} from './pages/examen/listar-examen-page/listar-examen-page.component';
import {CrearExamenPageComponent} from './pages/examen/crear-examen-page/crear-examen-page.component';
import {EditarExamenPageComponent} from './pages/examen/editar-examen-page/editar-examen-page.component';
import {EstudianteExamenPageComponent} from './pages/examen/estudiante-examen-page/estudiante-examen-page.component';
import {EstudianteVerExamenPageComponent} from './pages/examen/estudiante-ver-examen-page/estudiante-ver-examen-page.component';
import {VisualizarExamenPageComponent } from './pages/examen/visualizar-examen-page/visualizar-examen-page.component';
import {ExamenesSimularPageComponent} from './pages/examen/examenes-simular-page/examenes-simular-page.component';
import {AutenticacionGuard} from './guard/autenticacion.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainLayoutComponent,
    canActivate: [AutenticacionGuard],
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'estudiante'},
      {path: 'estudiante', component: ListarEstudiantePageComponent, canActivate: [AutenticacionGuard]},
      {path: 'crearEstudiante', component: CrearEstudiantePageComponent, canActivate: [AutenticacionGuard]},
      {path: 'editarEstudiante/:id', component: EditarEstudiantePageComponent, canActivate: [AutenticacionGuard]},
      {path: 'instructor', component: ListarInstructorPageComponent, canActivate: [AutenticacionGuard]},
      {path: 'crearInstructor', component: CrearInstructorPageComponent, canActivate: [AutenticacionGuard]},
      {path: 'editarInstructor/:id', component: EditarInstructorPageComponent, canActivate: [AutenticacionGuard]},
      {path: 'examen', component: ListarExamenPageComponent, canActivate: [AutenticacionGuard]},
      {path: 'crearExamen', component: CrearExamenPageComponent, canActivate: [AutenticacionGuard]},
      {path: 'editarExamen/:id', component: EditarExamenPageComponent, canActivate: [AutenticacionGuard]},
      {path: 'verExamen/:id', component: VisualizarExamenPageComponent, canActivate: [AutenticacionGuard]},
      {path: 'estudianteExamen', component: EstudianteExamenPageComponent, canActivate: [AutenticacionGuard]},
      {path: 'simularExamen/:id', component: SimularExamenPageComponent, canActivate: [AutenticacionGuard]},
      {path: 'estudianteVerExamen/:id', component: EstudianteVerExamenPageComponent, canActivate: [AutenticacionGuard]},
      {path: 'estudianteExamenSimulador', component: ExamenesSimularPageComponent, canActivate: [AutenticacionGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
