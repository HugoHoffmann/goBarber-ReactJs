import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md'
import {parseISO, formatDistance} from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import { Container, Badge, Scroll, NotificationList, Notification } from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () => Boolean(notification.find(notification => notification.read === false)),
    [notifications]
  );
  useEffect(()=> {
    async function loadNotifications(){
      const response = await api.get('notifications');
      const data = response.data.map(notification =>({
        ...notification, 
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }  
        )
      }) )
      setNotifications(data);
    }
    loadNotifications();
  }, []);

  async function handleMarkRead(id){
    await api.put(`notifications/${id}`);
    setNotifications(
      notifications.map(notification => 
        notification._id === id ? { ...notification, read:true} : notification   
      )
    )
  }

  function handleToggleVisible(){
    setVisible(!visible);
  }
  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>
      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification  key={notification._id} unRead={!notification.read}>
              <p>
                {notification.content}
              </p>
              <time>{notification.timeDistance}</time>
              { !notification.read && (
                <button type="button" onClick={() => handleMarkRead(notification._id)} >
                  Marcar como lida
                </button>
              ) }
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>   
  );
}
