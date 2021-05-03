import { Fragment } from 'react';
import { getEventById, getFeaturedEvents } from '../../helpers/api.util.js';
import EventSummary from '../../components/UI/event-summary';
import EventLogistics from '../../components/UI/event-logistics';
import EventContent from '../../components/UI/event-content';
import Head from 'next/head';

export default function EventDetailPage(props) {
  const event = props.event;
  if (!event) {
    return (
      <div className="center">
        <p>Loading</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description}></meta>
      </Head>
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

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  const event = await getEventById(id);

  return { props: { event }, revalidate: 30 };
}
