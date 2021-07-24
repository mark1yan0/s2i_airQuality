//position class in order to set new position based on search
export class Position {
  constructor(lat, long, city, air) {
    this.lat = lat;
    this.long = long;
    this.city = city;
    this.airQuality = air; //city's air quality
  }
}

//info based on air quality
export let info = {
  good: [
    'Air quality is considered satisfactory, and air pollution poses little or no risk',
    '',
  ],
  moderate: [
    'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.',
    'Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.',
  ],
  s_unhealthy: [
    'Members of sensitive groups may experience health effects. The general public is not likely to be affected.',
    'Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.',
  ],
  unhealthy: [
    'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects',
    'Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion',
  ],
  v_unhealthy: [
    'Health warnings of emergency conditions. The entire population is more likely to be affected.',
    'Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.',
  ],
  hazardous: [
    'Health alert: everyone may experience more serious health effects',
    'Everyone should avoid all outdoor exertion',
  ],
};

//==================================================================================
