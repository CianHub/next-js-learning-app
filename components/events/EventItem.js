import React from 'react';
import Link from 'next/link';

export const EventItem = ({ event }) => {
  const readableDate = new Date(event.date).toLocaleDateString('en-IE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <li>
      <img src={event.image} alt={event.title} />
      <div>
        <div>
          <h2>{event.title}</h2>
        </div>
        <div>
          <time>{readableDate}</time>
        </div>
        <div>
          <address>{event.location}</address>
        </div>
        <div>
          <Link href="/">Explore Event</Link>
        </div>
      </div>
    </li>
  );
};
