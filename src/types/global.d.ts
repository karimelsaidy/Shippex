import React from 'react';

declare global {
  type Opt<T> = T | undefined;

  type Dict<T = any> = Record<string, T>;
}
