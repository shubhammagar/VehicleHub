import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VehicleModel } from '../../models/vehicle-model';

@Component({
  selector: 'app-model-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.scss']
})
export class ModelCardComponent {
  @Input() model!: VehicleModel;
}