import sunflowerSeedling from "assets/crops/sunflower/seedling.webp";
import sunflowerAlmostDone from "assets/crops/sunflower/almost.webp";
import sunflowerPlant from "assets/crops/sunflower/planted.webp";

import potatoSeedling from "assets/crops/potato/seedling.webp";
import potatoAlmostDone from "assets/crops/potato/almost.webp";
import potatoPlant from "assets/crops/potato/plant.webp";

import pumpkinSeedling from "assets/crops/pumpkin/seedling.webp";
import pumpkinAlmostDone from "assets/crops/pumpkin/almost.webp";
import pumpkinPlant from "assets/crops/pumpkin/plant.webp";

import carrotSeedling from "assets/crops/carrot/seedling.webp";
import carrotAlmostDone from "assets/crops/carrot/almost.webp";
import carrotPlant from "assets/crops/carrot/plant.webp";

import cabbageSeedling from "assets/crops/cabbage/seedling.webp";
import cabbageAlmostDone from "assets/crops/cabbage/almost.webp";
import cabbagePlant from "assets/crops/cabbage/plant.webp";

import beetrootSeedling from "assets/crops/beetroot/seedling.webp";
import beetrootAlmostDone from "assets/crops/beetroot/almost.webp";
import beetrootPlant from "assets/crops/beetroot/plant.webp";

import cauliflowerSeedling from "assets/crops/cauliflower/seedling.webp";
import cauliflowerAlmostDone from "assets/crops/cauliflower/almost.webp";
import cauliflowerPlant from "assets/crops/cauliflower/plant.webp";

import parsnipSeedling from "assets/crops/parsnip/seedling.webp";
import parsnipAlmostDone from "assets/crops/parsnip/almost.webp";
import parsnipPlant from "assets/crops/parsnip/plant.webp";

import radishSeedling from "assets/crops/radish/seedling.webp";
import radishAlmostDone from "assets/crops/radish/almost.webp";
import radishPlant from "assets/crops/radish/plant.webp";

import wheatSeedling from "assets/crops/wheat/seedling.webp";
import wheatAlmostDone from "assets/crops/wheat/almost.webp";
import wheatPlant from "assets/crops/wheat/plant.webp";

import { CropName } from "features/game/types/crops";

export type Lifecycle = {
  seedling: any;
  almost: any;
  ready: any;
};

/**
 * Crops and their original prices
 * TODO - use crop name from GraphQL API
 */
export const LIFECYCLE: Record<CropName, Lifecycle> = {
  Sunflower: {
    seedling: sunflowerSeedling,
    almost: sunflowerAlmostDone,
    ready: sunflowerPlant,
  },
  Potato: {
    seedling: potatoSeedling,
    almost: potatoAlmostDone,
    ready: potatoPlant,
  },
  Pumpkin: {
    seedling: pumpkinSeedling,
    almost: pumpkinAlmostDone,
    ready: pumpkinPlant,
  },
  Carrot: {
    seedling: carrotSeedling,
    almost: carrotAlmostDone,
    ready: carrotPlant,
  },
  Cabbage: {
    seedling: cabbageSeedling,
    almost: cabbageAlmostDone,
    ready: cabbagePlant,
  },
  Beetroot: {
    seedling: beetrootSeedling,
    almost: beetrootAlmostDone,
    ready: beetrootPlant,
  },
  Cauliflower: {
    seedling: cauliflowerSeedling,
    almost: cauliflowerAlmostDone,
    ready: cauliflowerPlant,
  },
  Parsnip: {
    seedling: parsnipSeedling,
    almost: parsnipAlmostDone,
    ready: parsnipPlant,
  },
  Radish: {
    seedling: radishSeedling,
    almost: radishAlmostDone,
    ready: radishPlant,
  },
  Wheat: {
    seedling: wheatSeedling,
    almost: wheatAlmostDone,
    ready: wheatPlant,
  },
};
