import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
	name: 'localizedDate'
})
export class LocalizedDatePipe implements PipeTransform {

	constructor(private translate: TranslateService) { }

	transform(value: any, args?: any): any {
		let dateFormat = this.translate.instant('dateFormat');
		const datePipe: DatePipe = new DatePipe(this.translate.currentLang);
		return datePipe.transform(value, dateFormat);
	}

}
