import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getEventById } from '../../dummy-data.js';
import EventSummary from '../../components/UI/event-summary';
import EventLogistics from '../../components/UI/event-logistics';
import EventContent from '../../components/UI/event-content';

export default function EventDetailPage() {
  const router = useRouter();
  const event = getEventById(router.query.id);

  if (!event) {
    return <p>No event found</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
