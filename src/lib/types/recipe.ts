interface Recipe {
  /**
   * Coffee input in grams.
   */
  coffeeInput: number;
  /**
   * Grind size description.
   */
  grindSize?: string;
}

export interface EspressoRecipe extends Recipe {
  /**
   * Ratio of the water portion compared to the coffee portion.
   */
  waterRatio: number;
  /**
   * Time in seconds to pull the shot.
   */
  targetTimeInSeconds: number;
}

export interface Pour {
  /**
   * Water pour quantity in grams (or ml).
   */
  waterInput: number;
  /**
   * Time in seconds to pour the amount of water.
   */
  pourTimeInSeconds: number;
}

export interface PourOverRecipe extends Recipe {
  /**
   * Time where the pour is finished if necessary.
   */
  finishTimeInSeconds?: number;
  /**
   * Descriptors of the pour(s).
   */
  pours: Pour[];
}

export default Recipe;
