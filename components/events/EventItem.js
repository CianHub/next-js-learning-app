import React from 'react';
import Link from 'next/link';

export const EventItem = ({ event }) => {
  const readableDate = new Date(event.date).toLocaleDateString('en-IE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = event.location.replace(', ', '\n');
  const exploreLink = `/events/${event.id}`;

  return (
    <li>
      <img src={'/' + event.image} alt={event.title} />
      <div>
        <div>
          <h2>{event.title}</h2>
        </div>
        <div>
          <time>{readableDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};
