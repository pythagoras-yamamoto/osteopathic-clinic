import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import styled from 'styled-components';

const client = createClient({
  space: '18tfimm6dnj6',
  accessToken: 'MhNq7BnTfyuzinssfglIRkshvfeIhscTWW4weWbh0c4'
});

export const RecentNotification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchData();
  }, [notifications]);

  const fetchData = async () => {
    try {
      const { items } = await client.getEntries({
        content_type: 'notification'
      });
      setNotifications(items[0].fields.body.content[0].content[0].value);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(notifications);

  return (
    <NotificationWrapper>
      <SRecentItem>{notifications}</SRecentItem>
    </NotificationWrapper>
  );
};

const NotificationWrapper = styled.div`
  object-fit: cover;
`;

const SRecentItem = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;
  font-size: 0.8rem;
  border-bottom: 1px solid #cfd8dc;
  font-family: 'Yomogi';
  line-height: 1.4rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;

  :nth-child(1) {
    border-top: 1px solid #cfd8dc;
  }
`;
