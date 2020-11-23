import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

const materials = [
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatInputModule,
  MatSnackBarModule,
  MatIconModule,
];

@NgModule({
  imports: [materials],
  exports: [materials],
})
export class AngularMaterialModule {}
