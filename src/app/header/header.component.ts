import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LogoComponent } from '../common/component/svg/logo/logo.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NzLayoutModule,
    NgIf,
    CommonModule,
    LogoComponent,
    NzIconModule,
    NavMenuComponent,
    NzBadgeModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
