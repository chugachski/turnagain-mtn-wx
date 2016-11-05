import { Injectable } from '@angular/core';
import { Section } from './section';
import { Link } from './link';

@Injectable()
export class WeatherService {

  constructor() { }

  public getWeather(): Section[] {
    return [
      new Section(
        'Forecast / Advisory',
        [
          new Link(
            'http://forecast.weather.gov/product.php?site=GSP&product=REC&issuedby=AER',
            'Mtn Weather Discussion'
          ),
          new Link(
            'http://www.cnfaic.org/advisories/current.php',
            'CNFAIC Advisory'
          ),
          new Link(
            'http://forecast.weather.gov/MapClick.php?lat=60.9425&lon=-149.1664',
            'NOAA Girdwood'
          )
        ]
      ),
      new Section(
        'Hourly Data',
        [
          new Link(
            'http://wxstns.net/wxstns/aknet/GDW_YARD.html',
            'Girdwood Yard'
          ),
          new Link(
            'http://wxstns.net/wxstns/aknet/ALY_BASE_HR.html',
            'Alyeska Base'
          ),
          new Link(
            'http://wxstns.net/wxstns/aknet/ALY_MID_HR.html',
            'Alyeska Mid'
          ),
          new Link(
            'http://wxstns.net/wxstns/aknet/ALY_TOP_HR.html',
            'Glacier Bowl'
          ),
          new Link(
            'http://wxstns.net/wxstns/aknet/ALYSUM.html',
            'Alyeska Summit'
          ),
          new Link(
            'http://wxstns.net/wxstns/aknet/MAX\'S_MTN.html',
            'Max\'s Mountain'
          )
        ]
      ),
      new Section(
        'Monthly Data',
        [
          new Link(
            'http://wxstns.net/wxstns/aknet/GW_YARD24.html',
            'Girdwood Yard'
          ),
          new Link(
            'http://wxstns.net/wxstns/aknet/ALYBASE24.html',
            'Alyeska Base'
          ),
          new Link(
            'http://wxstns.net/wxstns/aknet/ALYMID24.html',
            'Alyeska Mid'
          ),
          new Link(
            'http://wxstns.net/wxstns/aknet/ALYTOP24.html',
            'Glacier Bowl'
          )
        ]
      ),
      new Section(
        'Turnagain Pass',
        [
          new Link(
            'http://www.cnfaic.org/wx/wx_site.php?site=sunburst',
            'Sunburst'
          ),
          new Link(
            'http://www.ambcs.org/cgi-bin/siteCurrent.cgi?site=TURNAGAIN_ABD',
            'Center Ridge'
          ),
          new Link(
            'http://roadweather.alaska.gov/iways/roadweather/forms/AtmoSum.html?areaId=2&perspectiveId=1&siteId=11',
            'Summit Lake'
          ),
          new Link(
            'http://www.cnfaic.org/wx/wx_site.php?site=anc_hillside',
            'Glen Alps'
          )
        ]
      ),
    ]
  }

}
