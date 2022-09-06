import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';
import {GoogleMap, Marker} from "@capacitor/google-maps";
import {constants} from "./util/constants";
import {environment} from "../environments/environment";
import {LOCATION_ENUM} from "./util/enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-capacitor';

  @ViewChild('map')
  mapRef!: ElementRef;
  googleMap!: GoogleMap;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.createMap().then(() => this.addPins(constants.pinCount));
  }

  async createMap() {
    this.googleMap =
      await GoogleMap.create({
        id: 'three-pins-map',
        element: this.mapRef.nativeElement,
        apiKey: environment.apiKey,
        config: {
          center: {
            lat: LOCATION_ENUM.LAT,
            lng: LOCATION_ENUM.LNG
          },
          zoom: 5
        },
        forceCreate: true
      });
  }

  async addPins(count: number) {
    const markers: Marker[] = this.generateMarkers(count);

    await this.googleMap.addMarkers(markers)
      .then(() => this.changeDetector.detectChanges());
  }

  generateMarkers(count: number) {
    const markers: Marker[] = []

    for (let i = 0; i < count; i++) {
      markers.push(
        {
          coordinate:
            {
              lat: LOCATION_ENUM.LAT + Math.random(),
              lng: LOCATION_ENUM.LNG + Math.random()
            }
        })
    }

    return markers;
  }
}
