// @flow

import {isEmpty} from 'ramda';

type List = Array<string>;
type Callback = (?Error, string) => any;

const MESSAGES = [
  'I am a king',
  'Praise the Sun',
  'brb',
  'LOL',
  'What are you doing?',
  'I pity the fool',
];
const USERS = ['Steve', 'Vincent', 'Draco', 'Mr T'];

// Function to get a random item from a list
const random = (list: List) =>
  list.splice(Math.floor(Math.random() * list.length), 1)[0];

export const chatBot = (cb: Callback): void => {
  let timer = setInterval(() => {
    cb({user: random(USERS), text: random(MESSAGES)});
    if (isEmpty(USERS) || isEmpty(MESSAGES)) {
      clearInterval(timer);
    }
  }, 3000);
};
