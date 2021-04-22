import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { EventItem } from '../../components/events/EventItem';
import { EventList } from '../../components/events/EventList';
import { getFilteredEvents } from '../../dummy-data';

export default function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query?.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth > 12 ||
    filteredMonth < 1
  ) {
    return <p>Invalid filter. Please adjust values.</p>;
  }

  const events = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!events || events.length === 0) {
    return <p>No Events Found</p>;
  }

  return (
    <Fragment>
      <EventList events={events} />
    </Fragment>
  );
}
