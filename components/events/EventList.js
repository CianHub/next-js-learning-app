import React from 'react';
import { EventItem } from './EventItem';

export const EventList = ({ events }) => {
  return (
    <ul>
      {events.map((event) => {
        return <EventItem key={event.id} event={event} />;
      })}
    </ul>
  );
};
