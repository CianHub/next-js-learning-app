export const getAllEvents = async () => {
  const res = await fetch(
    'https://next-cour-default-rtdb.europe-west1.firebasedatabase.app/events.json'
  );
  const data = res.json();

  const events = [];

  for (const key in data) {
    events.push({ id: key, ...data[key] });
  }

  return events;
};

export async function getFeaturedEvents() {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
}
