import { EventList } from '../components/events/EventList.js';
import { getAllEvents, getFeaturedEvents } from '../helpers/api.util';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  const featuredEvents = await getFeaturedEvents(events);

  return {
    props: {
      featuredEvents,
    },
  };
}
