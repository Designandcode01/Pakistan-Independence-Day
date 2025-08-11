"use client";

type Event = {
  year: string;
  title: string;
  description: string;
};

const events: Event[] = [
  {
    year: "1947",
    title: "Independence",
    description:
      "Pakistan was created as an independent nation on August 14, following the end of British rule in the Indian subcontinent.",
  },
  {
    year: "1948",
    title: "Death of Quaid-e-Azam",
    description:
      "Founder of the nation, Muhammad Ali Jinnah, passed away on September 11, 1948.",
  },
  {
    year: "1956",
    title: "First Constitution",
    description:
      "Pakistan adopted its first constitution and became the Islamic Republic of Pakistan.",
  },
  {
    year: "1965",
    title: "Indo-Pak War",
    description:
      "Pakistan and India fought the second war over Kashmir; the war ended with the Tashkent Agreement.",
  },
  {
    year: "1971",
    title: "Separation of East Pakistan",
    description:
      "East Pakistan became the independent nation of Bangladesh after a civil war.",
  },
  {
    year: "1998",
    title: "Nuclear Tests",
    description:
      "Pakistan successfully conducted nuclear tests in Chagai, becoming the 7th nuclear power in the world.",
  },
  {
    year: "2010",
    title: "18th Amendment",
    description:
      "Major constitutional reform granting greater provincial autonomy and strengthening parliamentary democracy.",
  },
  {
    year: "2022",
    title: "Historic Floods",
    description:
      "Massive floods devastated large parts of Pakistan, affecting millions and causing extensive damage.",
  },
];

export default function TimelineHistory() {
  return (
    <section className="w-full max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Timeline of Pakistan&#39;s History 🇵🇰
      </h2>

      <div className="relative border-l-4 border-white">
        {events.map((event, index) => (
          <div key={index} className="mb-10 ml-6">
            {/* Timeline Dot */}
            <div className="absolute w-4 h-4 bg-white rounded-full mt-1.5 -left-2 border border-green-800" />

            {/* Event Content */}
            <div className="bg-green-900 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-green-300">{event.year}</h3>
              <h4 className="text-lg font-bold">{event.title}</h4>
              <p className="text-sm text-gray-200 mt-1">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
