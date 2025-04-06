import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../../services/vehicle.service';
import { VehicleModel } from '../../models/vehicle-model';

@Component({
  selector: 'app-model-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './model-details.component.html',
  styleUrls: ['./model-details.component.scss']
})
export class ModelDetailsComponent implements OnInit {
  model?: VehicleModel;

  constructor(private route: ActivatedRoute, private vehicleService: VehicleService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vehicleService.getById(id).subscribe((data: any) => {
      this.model = data;
    });
  }
}