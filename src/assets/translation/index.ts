import {merge} from 'lodash';

import {createResource} from '@/i18n';

import ar from './ar.json';
import en from './en.json';

export const commonStrings = merge({}, createResource('common', {en, ar}));
