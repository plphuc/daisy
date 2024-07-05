import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LogoComponent } from '../common/component/svg/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NzLayoutModule, NgIf, CommonModule, LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
