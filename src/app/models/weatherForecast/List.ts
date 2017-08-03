import {Temp} from './Temp';
import {Weather} from './Weather';

export class List {
    dt: number;
    temp: Temp;
    pressure: number;
    humidity: number;
    weather: Weather[];
    speed: number;
    deg: number;
    clouds: number;
    rain: number;
}