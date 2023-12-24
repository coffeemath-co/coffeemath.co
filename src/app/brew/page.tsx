'use client';

import { ChangeEvent, Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

import BrewRatio from '@/lib/types/brewRatio';
import NumberHelper from '@/helpers/number';

import styles from './brew.module.css';

const DEFAULT_BREW_RATIO: BrewRatio = {
  coffeeInput: 18,
  coffeeOutput: 36,
  ratio: 2,
};

const DEFAULT_LOCK_MAP: Record<keyof BrewRatio, boolean> = {
  coffeeInput: false,
  coffeeOutput: false,
  ratio: false,
};

function BrewPage() {
  const [lockMap, setLockMap] =
    useState<Record<keyof BrewRatio, boolean>>(DEFAULT_LOCK_MAP);

  const { register, watch, setValue } = useForm({
    defaultValues: DEFAULT_BREW_RATIO,
  });

  const coffeeInput = watch('coffeeInput');
  const coffeeOutput = watch('coffeeOutput');
  const ratio = watch('ratio');

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value: valueAsString } = event.target;
    const value = parseFloat(valueAsString);
    if (isNaN(value)) return;

    switch (name) {
      case 'coffeeInput':
        if (coffeeOutput != null && !lockMap.ratio) {
          setValue('ratio', NumberHelper.round(coffeeOutput / value, 2));
          return;
        }

        if (ratio != null && !lockMap.coffeeOutput) {
          setValue('coffeeOutput', NumberHelper.round(value * ratio, 2));
          return;
        }

        break;
      case 'coffeeOutput':
        if (coffeeInput != null && !lockMap.ratio) {
          setValue('ratio', NumberHelper.round(value / coffeeInput, 2));
          return;
        }

        if (ratio != null && !lockMap.coffeeInput) {
          setValue('coffeeInput', NumberHelper.round(value * ratio, 2));
          return;
        }

        break;
      case 'ratio':
        if (coffeeInput != null && !lockMap.coffeeOutput) {
          setValue('coffeeOutput', NumberHelper.round(coffeeInput * value, 2));
          return;
        }

        if (coffeeOutput != null && !lockMap.coffeeInput) {
          setValue('coffeeInput', NumberHelper.round(coffeeOutput / value, 2));
          return;
        }

        break;
    }
  }

  function renderInput(input: keyof BrewRatio) {
    return (
      <Fragment>
        <input
          type="number"
          step="0.01"
          {...register(input, { valueAsNumber: true, onChange })}
          className={styles.input}
          disabled={lockMap[input]}
        />
        <button
          type="button"
          onClick={() =>
            setLockMap({ ...DEFAULT_LOCK_MAP, [input]: !lockMap[input] })
          }
        >
          {lockMap[input] ? 'Unlock' : 'Lock'}
        </button>
      </Fragment>
    );
  }

  return (
    <form className={styles.container}>
      <label className={styles.inputGroup}>
        coffee input:
        {renderInput('coffeeInput')}
      </label>
      <label className={styles.inputGroup}>
        coffee output:
        {renderInput('coffeeOutput')}
      </label>
      <label className={styles.inputGroup}>
        ratio: 1:
        {renderInput('ratio')}
      </label>
    </form>
  );
}

export default BrewPage;
