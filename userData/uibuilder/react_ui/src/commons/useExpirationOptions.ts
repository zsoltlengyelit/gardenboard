import { useTranslation } from 'react-i18next';
import * as moment from 'moment';

export type DurationOption = {
    label: string;
    duration: number;
};

export function useExpirationOptions() {
  const { t } = useTranslation();

  const makeDuration = (amount: number, unit: moment.DurationInputArg2) => moment.duration(amount, unit).asSeconds();

  const expirationDurationOptions: DurationOption[] = [
    { label: t('keys.editor.duration.1day'), duration: makeDuration(1, 'day') },
    { label: t('keys.editor.duration.1week'), duration: makeDuration(1, 'week') },
    { label: t('keys.editor.duration.1month'), duration: makeDuration(1, 'month') },
    { label: t('keys.editor.duration.6months'), duration: makeDuration(6, 'month') },
    { label: t('keys.editor.duration.1year'), duration: makeDuration(1, 'year') },
  ];

  const defaultExpiry = () => expirationDurationOptions[0].duration;

  return {
    options: expirationDurationOptions,
    defaultExpiry,
  };
}
