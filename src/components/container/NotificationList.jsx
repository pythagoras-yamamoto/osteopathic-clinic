import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import styled from 'styled-components';

const client = createClient({
  space: '18tfimm6dnj6',
  accessToken: 'MhNq7BnTfyuzinssfglIRkshvfeIhscTWW4weWbh0c4'
});

export const NotificationList = ({ displayNumber }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchData();
  }, [notifications]);

  const fetchData = async () => {
    try {
      const { items } = await client.getEntries({
        content_type: 'notification'
      });
      setNotifications(items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NotificationWrapper>
      {notifications.slice(0, displayNumber).map((notification, i) => (
        <SListitem key={i}>{notification.fields.maintitle}</SListitem>
      ))}
    </NotificationWrapper>
  );
};

const NotificationWrapper = styled.ul`
  object-fit: cover;
`;

const SListitem = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;
  font-size: 1rem;
  border-bottom: 1px solid #cfd8dc;
  font-family: 'Yomogi';
  line-height: 1.4rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  letter-spacing: 0.2em;

  @media screen and (max-width:768px) {
    font-size: 0.8rem;
    letter-spacing: 0.12em;
  }

  :nth-child(1) {
    border-top: 1px solid #cfd8dc;
  }
`;
