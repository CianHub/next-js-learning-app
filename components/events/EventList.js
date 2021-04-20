import React from 'react';

export const EventList = ({ events }) => {
  return (
    <ul>
      {events.map((event) => {
        return <li key={event.id}>{event.title}</li>;
      })}
    </ul>
  );
};
