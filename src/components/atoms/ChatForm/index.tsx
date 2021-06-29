import React, { useState } from 'react';

import {
  ChatFormWrapper,
  ChatFormTextarea,
  ChatFormButton,
} from './ChatInput.style';

export const ChatForm = ({ submit = (e: string) => e }: any) => {
  const [value, setValue] = useState('');

  const handleChange = (event: any) => setValue(event.target?.value);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (value) {
      submit(value);
    }
    setValue('');
  };

  return (
    <ChatFormWrapper onSubmit={handleSubmit}>
      <ChatFormTextarea value={value} onChange={handleChange} />
      <ChatFormButton>Send</ChatFormButton>
    </ChatFormWrapper>
  );
};
