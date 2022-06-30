/** @format */

// import ze icons
import WDay from "./img/day.svg";
import WNight from "./img/night.svg";
import W1 from "./img/icons/1.svg";
import W2 from "./img/icons/2.svg";
import W3 from "./img/icons/3.svg";
import W4 from "./img/icons/4.svg";
import W5 from "./img/icons/5.svg";
import W6 from "./img/icons/6.svg";
import W7 from "./img/icons/7.svg";
import W8 from "./img/icons/8.svg";
import W11 from "./img/icons/11.svg";
import W12 from "./img/icons/12.svg";
import W13 from "./img/icons/13.svg";
import W14 from "./img/icons/14.svg";
import W15 from "./img/icons/15.svg";
import W16 from "./img/icons/16.svg";
import W17 from "./img/icons/17.svg";
import W18 from "./img/icons/18.svg";
import W19 from "./img/icons/19.svg";
import W20 from "./img/icons/20.svg";
import W21 from "./img/icons/21.svg";
import W22 from "./img/icons/22.svg";
import W23 from "./img/icons/23.svg";
import W24 from "./img/icons/24.svg";
import W25 from "./img/icons/25.svg";
import W26 from "./img/icons/26.svg";
import W27 from "./img/icons/27.svg";
import W30 from "./img/icons/30.svg";
import W31 from "./img/icons/31.svg";
import W32 from "./img/icons/32.svg";
import W33 from "./img/icons/33.svg";
import W34 from "./img/icons/34.svg";
import W35 from "./img/icons/35.svg";
import W36 from "./img/icons/36.svg";
import W37 from "./img/icons/37.svg";
import W38 from "./img/icons/38.svg";
import W39 from "./img/icons/39.svg";
import W40 from "./img/icons/40.svg";
import W41 from "./img/icons/41.svg";
import W42 from "./img/icons/42.svg";
import W43 from "./img/icons/43.svg";
import W44 from "./img/icons/44.svg";

const imgDir = {
  1: W1,
  2: W2,
  3: W3,
  4: W4,
  5: W5,
  6: W6,
  7: W7,
  8: W8,
  11: W11,
  12: W12,
  13: W13,
  14: W14,
  15: W15,
  16: W16,
  17: W17,
  18: W18,
  19: W19,
  20: W20,
  21: W21,
  22: W22,
  23: W23,
  24: W24,
  25: W25,
  26: W26,
  27: W27,
  30: W30,
  31: W31,
  32: W32,
  33: W33,
  34: W34,
  35: W35,
  36: W36,
  37: W37,
  38: W38,
  39: W39,
  40: W40,
  41: W41,
  42: W42,
  43: W43,
  44: W44,
};

let iconSrc = null;

const weatherIcon = (iconIndex) => {
  if (iconIndex in imgDir) {
    iconSrc = imgDir[iconIndex];
  }
  return iconSrc;
};

const dayIcon = (isDay) => {
  return isDay ? WDay : WNight;
};

export { weatherIcon, dayIcon };
