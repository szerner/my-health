import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
	name: 'localizedDateTime'
})
export class LocalizedDateTimePipe implements PipeTransform {

	constructor(private translate: TranslateService) { }

	transform(value: any, dateFormat: string = 'short'): any {
		const datePipe: DatePipe = new DatePipe(this.translate.currentLang);
		return datePipe.transform(value, dateFormat);
	}

}

