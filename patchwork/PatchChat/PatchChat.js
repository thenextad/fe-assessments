// @flow

import React from 'react';
import {
    compose,
    defaultProps,
    lifecycle,
    withHandlers,
    withState,
} from 'recompose';
import {isEmpty, trim} from 'ramda';

import styles from './patchchat.scss';
import {chatBot} from './bot';

type Message = {
    user: string,
    text: string
};

type Props = {
    message: string,
    messages: Array<Message>,
    onSend: Function,
    setMessages: Function,
    setMessage: Function,
    title: string,
};

const PatchChat = (props: Props) => {
    const {title, message, setMessage, messages} = props;

    return (
        <div className={styles.patchChat}>
            <h2>{title}</h2>
            <div className={styles.messages}>
                {messages.map((message, i) => (
                    <div key={i} className={styles.message}>
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
                <button onClick={props.onSend}>
                    Send
                </button>
            </div>
        </div>
    );
};

//This const is entirely optional
const enhancement = compose(
    withState('message', 'setMessage', 'Hello'),
    withState('messages', 'setMessages', [{user: 'Steve', text: 'Hola'}]),
    withHandlers({
        onSend: props => e => {
            let trimmedMsg = trim(props.message);
            if (!isEmpty(trimmedMsg)) {
                props.setMessages([...props.messages, {user: 'Tim', text: props.message}]);
                props.setMessage('');
            }
        }
    }),
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
);

export default enhancement(PatchChat);
