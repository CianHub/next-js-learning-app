import { EventList } from '../components/events/EventList.js';
import { getAllEvents, getFeaturedEvents } from '../helpers/api.util';

export default function HomePage(props) {
  return (
    <div>
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
