import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BodyWeight } from '../../shared/models/body-weight';
import { BloodPressure } from '../../shared/models/blood-pressure';
import { PulseRate } from '../../shared/models/pulse-rate';
import { AuthService } from '../../core/services/auth.service';


@Injectable()
export class HealthService {
   private readonly healthEndpoint = '/api/healthdata';
   private readonly weightEndpoint = this.healthEndpoint + "/bodyweights";
   private readonly pressureEndpoint = this.healthEndpoint + "/bloodpressures";
   private readonly pulseEndpoint = this.healthEndpoint + "/pulserates";

   constructor(private http: HttpClient, private auth: AuthService) { }

   private get currentUserId() {
      return this.auth.currentUserId;
   }

   addBodyWeight(weight: BodyWeight): Observable<BodyWeight> {
      return this.http.post<BodyWeight>(this.weightEndpoint, weight);
   }
   getBodyWeights(): Observable<BodyWeight[]> {
      return this.http.get<BodyWeight[]>(this.weightEndpoint + '/' + this.currentUserId);
   }
   getLastBodyWeight(): Observable<BodyWeight> {
      return this.http.get<BodyWeight>(this.weightEndpoint + '/' + this.currentUserId + '/latest');
   }
   deleteBodyWeight(weightId: number) {
      return this.http.delete(this.weightEndpoint + '/' + this.currentUserId + '/' + weightId);
   }

   addBloodPressure(pressure: BloodPressure): Observable<BloodPressure> {
      return this.http.post<BloodPressure>(this.pressureEndpoint, pressure);
   }
   getBloodPressures(): Observable<BloodPressure[]> {
      return this.http.get<BloodPressure[]>(this.pressureEndpoint + '/' + this.currentUserId);
   }
   getLastBloodPressure(): Observable<BloodPressure> {
      return this.http.get<BloodPressure>(this.pressureEndpoint + '/' + this.currentUserId + '/latest')
   }

   addPulseRate(rate: PulseRate): Observable<PulseRate> {
      return this.http.post<PulseRate>(this.pulseEndpoint, rate);
   }
   getPulseRates(): Observable<PulseRate[]> {
      return this.http.get<PulseRate[]>(this.pulseEndpoint + '/' + this.currentUserId);
   }
   getLastPulseRate(): Observable<PulseRate> {
      return this.http.get<PulseRate>(this.pulseEndpoint + '/' + this.currentUserId + '/latest')
   }

}
