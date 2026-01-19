import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ✅ FIXED IMPORT PATH
import { MallAdminService, MallAdmin } from '../services/mallstack.service';

@Component({
  selector: 'app-mall-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mallstack.component.html',
  styleUrls: ['./mallstack.component.scss']
})
export class MallAdminComponent implements OnInit {

  admins: MallAdmin[] = [];

  admin: MallAdmin = {
    username: '',
    password: '',
    email: '',
    isActive: true
  };

  isEditMode = false;

  // ✅ DI WORKS NOW
  constructor(private service: MallAdminService) {}

  ngOnInit(): void {
    this.loadAdmins();
  }

  loadAdmins(): void {
    this.service.getAll().subscribe({
      // ✅ FIXED TYPE
      next: (data: MallAdmin[]) => {
        this.admins = data;
      },
      error: () => alert('Failed to load data')
    });
  }

  submit(): void {
    if (this.isEditMode) {
      this.service.update(this.admin).subscribe(() => {
        alert('Updated successfully');
        this.resetForm();
        this.loadAdmins();
      });
    } else {
      this.service.add(this.admin).subscribe(() => {
        alert('Added successfully');
        this.resetForm();
        this.loadAdmins();
      });
    }
  }

  edit(admin: MallAdmin): void {
    this.admin = { ...admin };
    this.isEditMode = true;
  }

  delete(id?: number): void {
    if (!id) return;
    this.service.delete(id).subscribe(() => this.loadAdmins());
  }

  resetForm(): void {
    this.admin = {
      username: '',
      password: '',
      email: '',
      isActive: true
    };
    this.isEditMode = false;
  }
}
