import $ from 'jquery';
import { BaseComponent } from '../Base/BaseComponent';
import { RenderSpeakers } from '../Modules/RenderSpeakers';
import { MainSpeakersRu } from '../../lang/js/ru/main-speakers-ru.js';
import { MainSpeakersEn } from '../../lang/js/en/main-speakers-en.js';
import { PrepartySpeakersEn } from '../../lang/js/en/preparty-speakers-en';
import { PrepartySpeakersRu } from '../../lang/js/ru/preparty-speakers-ru';

export class SpeakersComponent extends BaseComponent {

    constructor() {
        super();
        this.mainSpeakers = new RenderSpeakers({
          modal: 'main-speakers-modal',
          speakersRu: MainSpeakersRu,
          speakersEn: MainSpeakersEn,
          container: '#main-speakers-list'
        });

        this.prepartySpeakers = new RenderSpeakers({
          modal: 'preparty-speakers-modal',
          speakersRu: PrepartySpeakersRu,
          speakersEn: PrepartySpeakersEn,
          container: '#preparty-speakers-list'
        });
    }

    _events() {

    }

}
