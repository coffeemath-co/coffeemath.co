'use client';

import { set, useForm } from 'react-hook-form';

import { EspressoRecipe } from '@/lib/types/recipe';
import NumberHelper from '@/helpers/number';

import styles from './espresso.module.css';
import { ChangeEvent, useMemo, useState } from 'react';

const DEFAULT_RECIPE: EspressoRecipe = {
  coffeeInput: 18,
  waterRatio: 2,
  targetTimeInSeconds: 25,
};

function BrewEspresso() {
  const form = useForm({ defaultValues: DEFAULT_RECIPE });

  const { coffeeInput, waterRatio } = form.watch();

  const coffeeOutput = useMemo(() => {
    if (isNaN(waterRatio) || isNaN(coffeeInput)) {
      return null;
    }

    return NumberHelper.round(coffeeInput * waterRatio, 2);
  }, [coffeeInput, waterRatio]);

  return (
    <div className={styles.container}>
      <label>
        coffee input:
        <input
          type="number"
          step="0.01"
          {...form.register('coffeeInput', { valueAsNumber: true })}
          className={styles.input}
        />
      </label>
      <div>
        <button
          type="button"
          onClick={() => form.setValue('waterRatio', waterRatio - 1 || 1)}
          disabled={waterRatio <= 1}
        >
          -
        </button>
        1:
        <input
          type="number"
          step="0.01"
          {...form.register('waterRatio', { valueAsNumber: true })}
          className={styles.input}
        />
        <button
          type="button"
          onClick={() => form.setValue('waterRatio', waterRatio + 1 || 1)}
        >
          +
        </button>
      </div>
      <div>coffee output: {coffeeOutput}</div>
      <label>
        target time:
        <input
          type="number"
          step="0.01"
          {...form.register('targetTimeInSeconds', { valueAsNumber: true })}
          className={styles.input}
        />
      </label>
    </div>
  );
}

export default BrewEspresso;
