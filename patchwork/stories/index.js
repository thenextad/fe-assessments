// @flow

import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text} from '@storybook/addon-knobs';

import PatchChat from '../PatchChat';

const stories = storiesOf('PatchChat', module);

stories.addDecorator(withKnobs);

stories.add('Interactive', () => (
  <PatchChat titel={text('Title', 'PatchChat')} />
));
