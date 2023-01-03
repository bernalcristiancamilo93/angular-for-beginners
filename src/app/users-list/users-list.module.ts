import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list.component';

@NgModule({
  declarations: [UsersListComponent],
  imports: [CommonModule],
  exports: [UsersListComponent],
})
export class UsersListModule {}
