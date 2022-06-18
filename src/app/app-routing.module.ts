import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { InsertComponent } from './admin/components/insert/insert.component';
import { UpdateComponent } from './admin/components/update/update.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "users/:id",
    component: UserComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "insert",
        component: InsertComponent
      },
      
      {
        path: "update",
        component: UpdateComponent
      }
    ]
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
