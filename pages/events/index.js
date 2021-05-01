import { getAllEvents } from '../../helpers/api.util';
import { EventList } from '../../components/events/EventList';
import { EventsSearch } from '../../components/events/events-search';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

export default function EventsPage(props) {
  const { events } = props;

  const router = useRouter();

  const onSearch = (year, month) => {
    // if only year is provided will default to id  page
    // if 2 will go to slug page
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

export async function getStaticProps() {
  const events = await getAllEvents();

  return { props: { events } };
}
