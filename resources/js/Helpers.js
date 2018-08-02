import $ from 'jquery';

let instance = null;

export class Helpers {
    constructor() {

        if(!instance){
            this.initValidationEvents();
            instance = this;
        }

        return instance;
    }

    showLoader(selector, transition = 300) {

        if(!$(selector).length) {
            return this.showLoader('body');
        }


        if($(selector).css('position') === 'static') {
            $(selector).css({'position' : 'relative'});
        }

        this.hideLoader(selector);

        $(selector).append(`
            <div class="loader" style="display: none">
                <div class="spinner">
                    <div class="double-bounce1"></div>
                    <div class="double-bounce2"></div>
                </div>
            </div>
        `);

        if($(selector)[0].nodeName === 'BODY') {
            $(selector).children('.loader').css({
                position: 'fixed'
            })
        }

        $(selector).children('.loader').fadeIn(transition);
    }

    hideLoader(selector, transition = 300) {
        $(selector).children('.loader').fadeOut(transition, function() { $(this).remove() })
    }

    /**
     * Оправка формы Аяксом
     * @param opt - Параметры запроса
     */
    sendAjaxForm(opt) {
        let options = $.extend({
            method     : 'POST',
            url        : '/',
            data       : null,
            dataType   : 'JSON',
            contentType: false,
            processData: false,
            success    : res => { },
            error      : err => { }
        }, opt);

        return $.ajax(options)
    }

    /**
     * Метод для отправки формы на сервер
     * У формы обязятельно должны быть атрибуты action и method
     * @param form   - DOM элемент формы
     * @param url    - Урл куда отправлять форму - Если его нет то он берется из метода action у формы
     * @param method - Метод отправки формы на сервер (POST, GET ...) - Если его нет то он берется из атрибута method у формы
     * @param data - Данные, отсутствующие в форме и необходимые для запроса - Если его нет, то отправлятья будут только данные формы
     */
    sendFormRequest(form, url, method, data) {
        $(form).find('.error-field').hide();
        $(form).find('.error-field-any').hide();

        let formData = new FormData(form);

        if (data)  {
            data.forEach((item, i, arr)=>{
                formData.append(item.name, item.value)
            });
        }

        return this.sendAjaxForm({
            url    : url    || $(form).attr('action') || window.CONFIG.BASE_URL,
            method : method || $(form).attr('method') || 'POST',
            data   : formData
        }).then( res => {
                return res;
            }, err => {
                this.formValidation(err, form);
                return err;
            }
        );
    }

    /**
     * Отправка данных формы методом PUT кроме файлов
     * @param form - форма для отправки
     * @returns {Thenable<U>|Promise<U>|Promise.<TResult>|*}
     */
    sendPutForm(form) {
        return $.ajax({
            method : $(form).attr('method'),
            url    : $(form).attr('action')+'?'+$(form).serialize()
        }).then( res => {  return res; }, err => {
            this.formValidation(err, form);
            return err;
        });
    }

    /**
     * Скрытие поля с ошибкой валидации при изменении
     */
    initValidationEvents() {
        $(document).on('change keyup', '.form-control', e => {
            let $current = $(e.currentTarget);
            let $label   = $current.closest('.form-label');

            $label.removeClass('form-label-error');
            $label.find('.error-field').empty().hide();
        })
    }

    /**
     * Приватный метод
     * @param err
     */
    formValidation(err, form) {

        if(err.responseJSON && err.status === 422) {
            this.Validate(form, err.responseJSON);
        }

        if(err.status !== 200 && err.responseJSON.data) {
            $(form).find('.error-field-any').text(err.responseJSON.data.message).show();
        }
    }

    /**
     * Валидация формы
     * @param form   - DOM элемент формы
     * @param Errors - Массив ошибок вида {'field-name' : ['Error-1', 'Error-2']}
     * @constructor
     */
    Validate(form, Errors) {

        let $errorFields = $(form).find('.error-field');

        $(this).closest('.form-label').removeClass('form-label-error');

        $errorFields.each(function() {

            let field = $(this).data('error');

            if(Errors[field]) {

                $(this).show().closest('.form-label').addClass('form-label-error');

                let error = '';

                for(let i in Errors[field]) {
                    error += `<div>${Errors[field][i]}</div>`;
                }

                $(this).html(error);
            }
        });
    }

}