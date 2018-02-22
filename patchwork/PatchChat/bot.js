// @flow

import * as R from 'ramda';

type List = Array<string>;
type Callback = any => any;

const MESSAGES = [
  'I am a king',
  'Praise the Sun',
  'brb',
  'LOL',
  'What are you doing?',
  'I pity the fool',
];
const USERS = ['Steve', 'Vincent', 'Draco', 'Mr T'];

// Fuction to get a random item from a list
const random = (list: List) =>
  list.splice(Math.ceil(Math.random() * list.length), 1);

export const chatBot = (cb: Callback): void => {
  setInterval(cb({user: random(MESSAGES), text: random(USERS)}), 3000);
};
