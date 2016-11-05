import { Component, OnInit } from '@angular/core';
import { Section } from '../section';
import { Link } from '../link';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  sections: Section[];

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.sections = this.weatherService.getWeather();
  }

}
