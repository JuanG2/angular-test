import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  map!: L.Map;
  marker: any = { lat: 0, lng: 0 };

  ngOnInit(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);
    L.Icon.Default.imagePath = 'assets/';

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    /* this.map.on('click', (event: L.LeafletMouseEvent) => {
      const marker = L.marker(event.latlng).addTo(this.map);
    }); */
  }
  onSubmit() {
    const marker = L.marker([this.marker.lat, this.marker.lng]).addTo(this.map);
  }
  
}
