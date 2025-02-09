import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatListModule} from '@angular/material/list';
import { MatTooltipModule } from "@angular/material/tooltip";
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';


const MaterailComponents : any = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatSlideToggleModule,
  MatListModule,
  MatTooltipModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatDialogModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatRadioModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatMenuModule,
  MatTabsModule,
  MatPaginatorModule
]

@NgModule({
  declarations: [],
  imports: [MaterailComponents],
  exports: [MaterailComponents]
})
export class MaterialModule { }
