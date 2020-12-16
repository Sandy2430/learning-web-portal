import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatSliderModule,
  MatButtonModule,
  MatBadgeModule,
  MatCardModule,
} from "@angular/material";
const material = [
  MatSliderModule,
  MatIconModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatBadgeModule,
  MatCardModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, material],
  exports: [material],
})
export class AngularMaterialModule {}
