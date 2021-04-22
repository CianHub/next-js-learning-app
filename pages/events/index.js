import { getAllEvents } from '../../dummy-data';
import { EventList } from '../../components/events/EventList';
import { EventsSearch } from '../../components/events/events-search';
import { Fragment } from 'react';

export default function EventsPage() {
  const events = getAllEvents();

  const handleClick;
  return (
    <Fragment>
      <EventsSearch />
      <EventList events={events} />
    </Fragment>
  );
}
