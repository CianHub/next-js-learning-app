import React from 'react';
import { EventItem } from './EventItem';
import classes from './event-list.module.css';

export const EventList = ({ events }) => {
  return (
    <ul className={classes.list}>
      {events.map((event) => {
        return <EventItem key={event.id} event={event} />;
      })}
    </ul>
  );
};
