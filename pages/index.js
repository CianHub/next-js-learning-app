import { EventList } from '../components/events/EventList.js';
import { getFeaturedEvents } from '../dummy-data.js';

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Home Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}
