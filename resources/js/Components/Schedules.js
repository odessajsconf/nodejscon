import { BaseComponent } from '../Base/BaseComponent';
import { MainScheduleEn } from '../../lang/js/en/main-schedule-en';
import { MainScheduleRu } from '../../lang/js/ru/main-schedule-ru';
import { PrepartyScheduleEn } from '../../lang/js/en/preparty-schedule-en';
import { PrepartyScheduleRu } from '../../lang/js/ru/preparty-schedule-ru';
import { RenderSchedule } from '../Modules/RenderSchedule';



export class ScheduleComponent extends BaseComponent {

  constructor() {
    super();

    this.prepartySchedule = new RenderSchedule({
      scheduleRu : PrepartyScheduleRu,
      scheduleEn : PrepartyScheduleEn,
      container : '#preparty-schedule-list'
    });

    this.mainSchedule = new RenderSchedule({
      scheduleRu : MainScheduleRu,
      scheduleEn : MainScheduleEn,
      container : '#main-schedule-list'
    });

  }

  _events() {

  }

}
