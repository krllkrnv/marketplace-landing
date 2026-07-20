const parseNumber = (value) => {
  const digits = String(value).replace(/[^\d]/g, "");
  return digits ? Number(digits) : NaN;
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export const initPriceRange = () => {
  const root = document.querySelector(".js-price-range");

  if (!root) {
    return;
  }

  const absoluteMin = Number(root.dataset.min) || 500;
  const absoluteMax = Number(root.dataset.max) || 1000000;
  const defaultMin = Number(root.dataset.defaultMin) || absoluteMin;
  const defaultMax = Number(root.dataset.defaultMax) || absoluteMax;
  const step = 100;

  const minInput = root.querySelector(".js-price-input-min");
  const maxInput = root.querySelector(".js-price-input-max");
  const minRange = root.querySelector(".js-price-thumb-min");
  const maxRange = root.querySelector(".js-price-thumb-max");
  const fill = root.querySelector(".js-price-fill");

  if (!minInput || !maxInput || !minRange || !maxRange || !fill) {
    return;
  }

  let minValue = defaultMin;
  let maxValue = defaultMax;

  const updateFill = () => {
    const span = absoluteMax - absoluteMin;
    const left = ((minValue - absoluteMin) / span) * 100;
    const width = ((maxValue - minValue) / span) * 100;
    fill.style.left = `calc(2px + (100% - 4px) * ${left / 100})`;
    fill.style.width = `calc((100% - 4px) * ${width / 100})`;
    fill.style.right = "auto";
  };

  const updateThumbStack = () => {
    const mid = (absoluteMin + absoluteMax) / 2;
    const minOnTop = minValue > mid;
    minRange.style.zIndex = minOnTop ? "4" : "3";
    maxRange.style.zIndex = minOnTop ? "3" : "4";
  };

  const syncControls = () => {
    minInput.value = String(minValue);
    maxInput.value = String(maxValue);
    minRange.value = String(minValue);
    maxRange.value = String(maxValue);
    updateFill();
    updateThumbStack();
  };

  const setRange = (nextMin, nextMax) => {
    let safeMin = clamp(nextMin, absoluteMin, absoluteMax);
    let safeMax = clamp(nextMax, absoluteMin, absoluteMax);

    if (safeMin > safeMax) {
      safeMin = safeMax;
    }

    minValue = safeMin;
    maxValue = safeMax;
    syncControls();
  };

  minRange.addEventListener("input", () => {
    const next = Number(minRange.value);
    setRange(Math.min(next, maxValue), maxValue);
  });

  maxRange.addEventListener("input", () => {
    const next = Number(maxRange.value);
    setRange(minValue, Math.max(next, minValue));
  });

  const commitInput = (which) => {
    const rawMin = parseNumber(minInput.value);
    const rawMax = parseNumber(maxInput.value);
    let nextMin = Number.isFinite(rawMin) ? rawMin : minValue;
    let nextMax = Number.isFinite(rawMax) ? rawMax : maxValue;

    nextMin = Math.round(nextMin / step) * step;
    nextMax = Math.round(nextMax / step) * step;

    if (which === "min" && nextMin > nextMax) {
      nextMin = nextMax;
    }

    if (which === "max" && nextMax < nextMin) {
      nextMax = nextMin;
    }

    setRange(nextMin, nextMax);
  };

  minInput.addEventListener("change", () => commitInput("min"));
  maxInput.addEventListener("change", () => commitInput("max"));
  minInput.addEventListener("blur", () => commitInput("min"));
  maxInput.addEventListener("blur", () => commitInput("max"));

  minInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      commitInput("min");
      minInput.blur();
    }
  });

  maxInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      commitInput("max");
      maxInput.blur();
    }
  });

  root.addEventListener("filters:reset-price", () => {
    setRange(defaultMin, defaultMax);
  });

  setRange(defaultMin, defaultMax);
};
