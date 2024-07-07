import { Component } from '@angular/core';
import { clothingData } from '../../../mock/clothing';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  clothingData = clothingData
}
