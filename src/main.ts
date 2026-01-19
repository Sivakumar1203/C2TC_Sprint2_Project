import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { MallAdminComponent } from './app/mallstack/mallstack.component';

bootstrapApplication(MallAdminComponent, {
  providers: [
    provideHttpClient()
  ]
}).catch(err => console.error(err));
