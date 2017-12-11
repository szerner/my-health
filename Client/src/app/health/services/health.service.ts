import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BodyWeight } from '../../shared/models/body-weight';
import { BloodPressure } from '../../shared/models/blood-pressure';
import { PulseRate } from '../../shared/models/pulse-rate';

@Injectable()
export class HealthService {
  currentUserId: number = 1007; // todo

  private readonly healthEndpoint = '/api/healthdata';
  // private readonly weightEndpoint = this.healthEndpoint + "/bodyweights";
  // private readonly pressureEndpoint = this.healthEndpoint + "/bloodpressures";
  // private readonly pulseEndpoint = this.healthEndpoint + "/pulserates";

  constructor(private http: HttpClient) { }

  private getEndpoint<T>(type?: { new(): T; } ): string {
    if (type instanceof BodyWeight) return this.healthEndpoint + "/bodyweights";
    if (type instanceof BloodPressure) return this.healthEndpoint + "/bloodpressures";
    if (type instanceof PulseRate) return this.healthEndpoint + "/pulserates";
  }

  addMeasurement<T>(m: T): Observable<T> {
    return this.http.post<T>(this.getEndpoint<T>(), m);
  }
  getMeasurements<T>(): Observable<T[]> {
    return this.http.get<T[]>(this.getEndpoint<T>() + '/' + this.currentUserId);
  }
  getLastMeasurement<T>(): Observable<T> {
    return this.http.get<T>(this.getEndpoint<T>() + '/' + this.currentUserId + '/latest');
  }

  // addBodyWeight(weight: BodyWeight): Observable<BodyWeight> {
  //   return this.http.post<BodyWeight>(this.weightEndpoint, weight);
  // }
  // getBodyWeights(): Observable<BodyWeight[]> {
  //   return this.http.get<BodyWeight[]>(this.weightEndpoint + '/' + this.currentUserId);
  // }
  // getLastBodyWeight(): Observable<BodyWeight> {
  //   return this.http.get<BodyWeight>(this.weightEndpoint + '/' + this.currentUserId + '/latest')
  // }

  // addBloodPressure(pressure: BloodPressure): Observable<BloodPressure> {
  //   return this.http.post<BloodPressure>(this.pressureEndpoint, pressure);
  // }
  // getBloodPressures(): Observable<BloodPressure[]> {
  //   return this.http.get<BloodPressure[]>(this.pressureEndpoint + '/' + this.currentUserId);
  // }
  // getLastBloodPressure(): Observable<BloodPressure> {
  //   return this.http.get<BloodPressure>(this.pressureEndpoint + '/' + this.currentUserId + '/latest')
  // }

  // addPulseRate(rate: PulseRate): Observable<PulseRate> {
  //   return this.http.post<PulseRate>(this.pulseEndpoint, rate);
  // }
  // getPulseRates(): Observable<PulseRate[]> {
  //   return this.http.get<PulseRate[]>(this.pulseEndpoint + '/' + this.currentUserId);
  // }
  // getLastPulseRate(): Observable<PulseRate> {
  //   return this.http.get<PulseRate>(this.pulseEndpoint + '/' + this.currentUserId + '/latest')
  // }

}
