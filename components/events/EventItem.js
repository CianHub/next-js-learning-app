import React from 'react';
import Link from 'next/link';
import classes from './event-item.module.css';

export const EventItem = ({ event }) => {
  const readableDate = new Date(event.date).toLocaleDateString('en-IE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = event.location.replace(', ', '\n');
  const exploreLink = `/events/${event.id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + event.image} alt={event.title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{event.title}</h2>
          <div className={classes.date}>
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};
