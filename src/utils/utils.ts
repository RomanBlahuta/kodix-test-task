import {FormEvent} from "react";
import {FormFieldsEnum, FormTypesEnum} from "@/utils/enums";

export interface IFormData {
    [FormFieldsEnum.EMAIL]: string;
    [FormFieldsEnum.PASSWORD]: string;
    [FormFieldsEnum.FIRST_NAME]: string;
    [FormFieldsEnum.LAST_NAME]: string;
}

export function parseFormData(submit: FormEvent, formType: FormTypesEnum): IFormData {
    const target: EventTarget = submit.target;

    return ({
        [FormFieldsEnum.EMAIL]: target[FormFieldsEnum.EMAIL].value,
        [FormFieldsEnum.PASSWORD]: target[FormFieldsEnum.PASSWORD].value,
        [FormFieldsEnum.FIRST_NAME]: (formType == FormTypesEnum.SIGN_IN) ? '' : target[FormFieldsEnum.FIRST_NAME].value,
        [FormFieldsEnum.LAST_NAME]: (formType == FormTypesEnum.SIGN_IN) ? '' : target[FormFieldsEnum.LAST_NAME].value,
    });
}
