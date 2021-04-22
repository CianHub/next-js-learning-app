import { getAllEvents } from '../../dummy-data';
import { EventList } from '../../components/events/EventList';
import { EventsSearch } from '../../components/events/events-search';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

export default function EventsPage() {
  const events = getAllEvents();

  const router = useRouter();

  const onSearch = (year, month) => {
    const url = `/events/${year}/${month}`;
    router.push(url);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={onSearch} />
      <EventList events={events} />
    </Fragment>
  );
}
