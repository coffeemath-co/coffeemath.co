'use client';

import { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';

import BrewRatio from '@/lib/types/brewRatio';
import NumberHelper from '@/helpers/number';

import styles from './brew.module.css';

function BrewPage() {
  const { register, watch, setValue } = useForm<BrewRatio>();

  const coffeeInput = watch('coffeeInput');
  const coffeeOutput = watch('coffeeOutput');
  const ratio = watch('ratio');

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value: valueAsString } = event.target;
    const value = parseFloat(valueAsString);
    if (isNaN(value)) return;

    switch (name) {
      case 'coffeeInput':
        if (coffeeOutput != null) {
          setValue('ratio', NumberHelper.round(coffeeOutput / value, 2));
          return;
        }

        if (ratio != null) {
          setValue('coffeeOutput', NumberHelper.round(value / ratio, 2));
          return;
        }

        break;
      case 'coffeeOutput':
        if (coffeeInput != null) {
          setValue('ratio', NumberHelper.round(value / coffeeInput, 2));
          return;
        }

        if (ratio != null) {
          setValue('coffeeInput', NumberHelper.round(value * ratio, 2));
          return;
        }

        break;
      case 'ratio':
        if (coffeeInput != null) {
          setValue('coffeeOutput', NumberHelper.round(coffeeInput * value, 2));
          return;
        }

        if (coffeeOutput != null) {
          setValue('coffeeInput', NumberHelper.round(coffeeOutput / value, 2));
          return;
        }

        break;
    }
  }

  return (
    <form className={styles.container}>
      <label>
        coffee input:
        <input
          type="number"
          step="0.01"
          {...register('coffeeInput', { valueAsNumber: true, onChange })}
        />
      </label>
      <label>
        coffee output:
        <input
          type="number"
          step="0.01"
          {...register('coffeeOutput', { valueAsNumber: true, onChange })}
        />
      </label>
      <label>
        ratio: 1:
        <input
          type="number"
          step="0.01"
          {...register('ratio', { valueAsNumber: true, onChange })}
        />
      </label>
    </form>
  );
}

export default BrewPage;
