import { EventList } from '../components/events/EventList.js';
import { getFeaturedEvents } from '../helpers/api.util';
import Head from 'next/head';

export default function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Next JS Events</title>
        <meta name="description" content="A nextjs app for events"></meta>
      </Head>
      <EventList events={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
