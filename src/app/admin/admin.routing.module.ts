import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';

const routesAdmin: Routes = [
  {path: '', component: AdminComponent , children: [
    {path: 'categorias', loadChildren: 'app/admin/categoria/categoria.module#CategoriaModule'},
    {path: 'produtos', loadChildren: 'app/admin/produtos/produtos.module#ProdutosModule'},
    {path: 'permissoes', loadChildren: 'app/admin/permissao/permissao.module#PermissaoModule'},
    {path: 'funcionario', loadChildren: 'app/admin/funcionario/funcionario.module#FuncionarioModule'},
  ]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routesAdmin)],
  exports: [RouterModule]
})
export class AdminRoutes {}
