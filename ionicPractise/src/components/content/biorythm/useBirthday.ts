import { useState } from "react";

export const useBirthday = (key: string, defaultValue: string) => {
  const state = localStorage.getItem(key) ?? defaultValue;

  const [birthday, setBirthday] = useState(state);

  const stateHandler = (value: string) => {
    setBirthday(value);

    localStorage.setItem(key, value);
  };

  return {
    birthday,
    stateHandler,
  };
};
