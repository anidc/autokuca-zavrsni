import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarsServiceService } from 'src/app/shared/services/cars-service.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  cars: any[] = [];

  constructor(private carService: CarsServiceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getCarsForUserFav()
  }

  getCarsForUserFav() {
    this.carService.getCarsFromUserCart().subscribe((response: any[]) => this.cars = response)
  }

  removeFromFavorites(id: number) {
    this.carService.removeFromFavorites(id).subscribe(
      success => {
        this.toastr.success("Upsjesno obrisan auto iz omiljenih")
        this.getCarsForUserFav()
      }
    )
  }
}
