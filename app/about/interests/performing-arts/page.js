"use client";

import React, { useRef, useState, useEffect } from "react";

const useInView = ({ threshold = 0.3, triggerOnce = true }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) observer.unobserve(entry.target);
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce]);

  return { ref, inView };
};

const timelineData = [
  {
    id: 1,
    title: "Annual Performance",
    image: "/timeline/earlydays.jpg",
    description: "Started my dance journey through ballet, learning at a local studio.",
  },
  {
    id: 2,
    title: "Won a Dance Competition",
    video: "https://www.youtube.com/embed/VzHSO9Um7tk",
    description: "Won 2nd place in a contemporary dance competition.",
  },
  {
    id: 3,
    title: "Another Year End Performance",
    image: "/timeline/cba.JPG",
    description:
      "Ended 2016 successfully passing the Royal Academy of Dance (RAD) Intermediate Examination, marking a significant milestone in my dance journey. As part of the vocational training syllabus, this achievement reflects dedication to technical precision, artistry, and performance skills. The Intermediate Level is widely recognized as a foundational qualification for aspiring professional dancers and serves as a gateway to advanced vocational training and professional opportunities in the world of dance.",
  },
  {
    id: 4,
    title: "Classical Singing Performance",
    image: "/timeline/singing.jpg",
    description:
      "Decided to take up hindustani vocal classes and sang for the first time in front of an audience! Within my first year of learning!",
  },
  {
    id: 5,
    title: "Ghunghroo Ceremony",
    image: "/timeline/ghunghrooceremony.png",
    description:
      "Receiving my ghungroos (ankle bells) after a year of learning Kathak. The ghungroo ceremony is an event where a dancer receives ghungroos, and is honored for their commitment to their art and personal development, considered a milestone in the study of Kathak dance.",
  },
];

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl mb-5 dark:text-accent-400 text-accent-600 font-medium">Milestones</h1>
      <div className="flex flex-col items-center">
        {timelineData.map((event) => (
          <TimelineEvent key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

const TimelineEvent = ({ event }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.3, // Trigger animation when 30% of the element is in view
  });

  return (
    <div
      ref={ref}
      className={`relative w-4/5 mb-6 p-6 bg-primary-50 dark:bg-primary-900 bg-opacity-50 dark:bg-opacity-30 rounded-lg shadow-lg transition-transform transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {event.video ? (
        <iframe
          src={event.video}
          title={event.title}
          className="w-full rounded mb-4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <img src={event.image} alt={event.title} className="w-full rounded mb-4" />
      )}
      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
    </div>
  );
};
