import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { EventList } from '../../components/events/EventList';
import { getFilteredEvents } from '../../dummy-data';
import ResultsTitle from '../../components/UI/results-title';
import { Button } from '../../components/UI/Button';
import ErrorAlert from '../../components/UI/error-alert';
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
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust values.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const events = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!events || events.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No Events Found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(filteredMonth - 1, filteredYear);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={events} />
    </Fragment>
  );
}
