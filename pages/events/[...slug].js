import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { EventList } from '../../components/events/EventList';
import { getFilteredEvents } from '../../helpers/api.util.js';
import ResultsTitle from '../../components/UI/results-title';
import { Button } from '../../components/UI/Button';
import ErrorAlert from '../../components/UI/error-alert';
import useSWR from 'swr';
import Head from 'next/head';
export default function FilteredEventsPage(props) {
  const router = useRouter();

  const filterData = router.query.slug;

  const { data, error } = useSWR(
    'https://next-cour-default-rtdb.europe-west1.firebasedatabase.app/events.json'
  );

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  if (props.hasError) {
    return (
      <Fragment>
        <Head>
          <title>Error</title>
          <meta name="description" content="error"></meta>
        </Head>
        <ErrorAlert>
          <p>Invalid filter. Please adjust values.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const { events, date } = props;

  if (!events || events.length === 0) {
    return (
      <Fragment>
        <Head>
          <title>Error</title>
          <meta name="description" content="error"></meta>
        </Head>
        <ErrorAlert>
          <p>No Events Found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const newDate = new Date(date.month - 1, date.year);

  return (
    <Fragment>
      <Head>
        <title>Event Results</title>
        <meta name="description" content="event results"></meta>
      </Head>
      <ResultsTitle date={newDate} />
      <EventList events={events} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2020 ||
    filteredMonth > 12 ||
    filteredMonth < 1
  ) {
    return { props: { hasError: true } };
  }

  const events = await getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  return {
    props: { events, date: { year: filteredYear, month: filteredMonth } },
  };
}
