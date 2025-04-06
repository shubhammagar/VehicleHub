import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../../services/vehicle.service';
import { VehicleModel } from '../../models/vehicle-model';
import { ModelCardComponent } from '../../components/model-card/model-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ModelCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  models: VehicleModel[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getAll().subscribe((data) => {
      this.models = data;
    });
  }
}