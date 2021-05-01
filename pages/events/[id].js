import { Fragment } from 'react';
import { getAllEvents, getEventById } from '../../helpers/api.util.js';
import EventSummary from '../../components/UI/event-summary';
import EventLogistics from '../../components/UI/event-logistics';
import EventContent from '../../components/UI/event-content';
import ErrorAlert from '../../components/UI/error-alert.js';

export default function EventDetailPage(props) {
  const event = props.event;
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found</p>
      </ErrorAlert>
    );
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

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => {
    return { params: { id: event.id } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  const event = await getEventById(id);

  return { props: { event }, revalidate: 30 };
}
