import { FieldError } from 'react-hook-form';
import type { FormMessage } from '@instructure/ui-form-field';
import { useTranslation } from 'react-i18next';

export function toFormMessage(fieldError?: FieldError): FormMessage[] | undefined {

  if (!fieldError) {
    return undefined;
  }

  return [{
    type: 'error',
    text: fieldError.message
  }];

}

export function useFormValidationMessages() {
  const { t } = useTranslation();

  return {
    'string.empty': t('common.forms.required')
  };
}
