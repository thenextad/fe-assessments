// @flow

import React from 'react';
import {compose, defaultProps, withState, lifecycle} from 'recompose';

import styles from './patchchat.scss';
import {chatBot} from './bot';

type Props = {
  messages: Array<Message>,
  setMessages: Function,
  message: string,
  setMessage: Function,
};

const PatchChat = (props: Props) => {
  const {title, message, setMessage, messages, setMessages} = props;

  return (
    <div className={styles.patchChat}>
      <h2>{title}</h2>
      <div className={styles.messages}>
        {messages.map(message => (
          <div className={styles.message}>
            {message.user}: {message.text}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button
          onClick={() => {
            setMessages(messages.push({user: 'Tim', text: message}));
            setMessage(null);
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default compose(
  withState('message', 'setMessage', 'Hello'),
  withState('messages', 'setMessages', [{user: 'Steve', text: 'Hola'}]),
  defaultProps({
    title: 'Chat away!',
  }),
  lifecycle({
    componentDidMount() {
      chatBot(message =>
        this.props.setMessages([...this.props.messages, message])
      );
    },
  })
)(PatchChat);
