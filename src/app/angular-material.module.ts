import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const materials = [
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatInputModule,
  MatSnackBarModule,
];

@NgModule({
  imports: [materials],
  exports: [materials],
})
export class AngularMaterialModule {}
