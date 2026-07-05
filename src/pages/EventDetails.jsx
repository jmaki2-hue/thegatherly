import {
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  useEffect,
  useState,
} from "react";

import {
  doc,
  getDoc,
  addDoc,
  updateDoc,
  increment,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../firebase/firebase";

export default function EventDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [event, setEvent] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    loadEvent();

  }, []);

  const loadEvent = async () => {

    try {

      const snap = await getDoc(

        doc(
          db,
          "scheduledEvents",
          id
        )

      );

      if (snap.exists()) {

        setEvent({

          id: snap.id,

          ...snap.data(),

        });

      }

    }

    catch (err) {

      console.log(err);

    }

    finally {

      setLoading(false);

    }

  };

  useEffect(() => {

  loadEvent();

}, []);

const loadEvent = async () => {

  try {

    const snap = await getDoc(

      doc(
        db,
        "scheduledEvents",
        id
      )

    );

    if (snap.exists()) {

      setEvent({

        id: snap.id,

        ...snap.data(),

      });

    }

  }

  catch (err) {

    console.log(err);

  }

  finally {

    setLoading(false);

  }

};

  const reserveEvent = async () => {

  try {

    const user = auth.currentUser;

    if (!user) {

      alert("Please log in.");

      return;

    }

    // Check if already reserved

    const existingReservation = await getDocs(

      query(

        collection(db, "reservations"),

        where("userId", "==", user.uid),

        where("eventId", "==", event.id)

      )

    );

    if (!existingReservation.empty) {

      alert("You have already reserved this event.");

      return;

    }

    // Check capacity

    if (

      (event.currentParticipants || 0) >=

      (event.maxParticipants || 0)

    ) {

      alert("This event is already full.");

      return;

    }

    // Create reservation

    await addDoc(

      collection(db, "reservations"),

      {

        userId: user.uid,

        eventId: event.id,

        venueName: event.venueName,

        category: event.category,

        eventDate: event.eventDate,

        eventTime: event.eventTime,

        location: event.location,

        status: "active",

        createdAt: serverTimestamp(),

      }

    );

    // Update participant count

    await updateDoc(

      doc(

        db,

        "scheduledEvents",

        event.id

      ),

      {

        currentParticipants:

          increment(1),

      }

    );

    alert("Reservation successful!");

    navigate("/my-reservations");

  }

  catch (err) {

    console.log(err);

    alert("Unable to reserve event.");

  }

};

  if (loading) {

  return (

    <div className="min-h-screen flex items-center justify-center">

      <h2 className="text-3xl font-bold">

        Loading Event...

      </h2>

    </div>

  );

}

if (!event) {

  return (

    <div className="min-h-screen flex items-center justify-center">

      <h2 className="text-3xl font-bold">

        Event Not Found

      </h2>

    </div>

  );

}


  return (
    <div className="min-h-screen bg-[#fdfaf6] pb-24">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Hero */}

        <div className="bg-white rounded-[40px] shadow-lg overflow-hidden">

          <div className="h-80 bg-[#24324a] flex items-center justify-center">

            <span className="text-8xl">
              ☕
            </span>

          </div>

          <div className="p-8">

            <div className="flex flex-wrap gap-3 mb-4">

              <span className="bg-[#f5b54a]/20 text-[#24324a] px-4 py-2 rounded-full font-semibold">
                {event.category}
              </span>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                Open for Reservations
              </span>

            </div>

            <h1 className="text-5xl font-bold text-[#24324a]">
              {event.venueName}
            </h1>

            <p className="text-gray-500 text-lg mt-4">
              Join fellow Shift Enders for another unforgettable experience.
            </p>

          </div>

        </div>

        {/* Event Information */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Left Side */}

          <div className="lg:col-span-2 space-y-8">

            <div className="bg-white rounded-[32px] shadow-lg p-8">

              <h2 className="text-2xl font-bold text-[#24324a] mb-6">
                Event Details
              </h2>

              <div className="space-y-4 text-gray-600">

                <p>
                  📅 {event.eventDate}
                </p>

                <p>
                  🕙 {event.eventTime}
                </p>

                <p>
                  📍 {event.location}
                </p>

                <p>
                  👥 {(event.maxParticipants || 0) -
 (event.currentParticipants || 0)}
 Spots Remaining
                </p>

              </div>

            </div>

            <div className="bg-white rounded-[32px] shadow-lg p-8">

              <h2 className="text-2xl font-bold text-[#24324a] mb-6">
                About This Event
              </h2>

              <p className="text-gray-600 leading-relaxed">
                The Gatherly Coffee Meetups are designed to help members
                build genuine friendships through casual conversation.
                Small group sizes create a comfortable atmosphere where
                everyone has the opportunity to connect.
              </p>

            </div>

            <div className="bg-white rounded-[32px] shadow-lg p-8">

              <h2 className="text-2xl font-bold text-[#24324a] mb-6">
                What To Expect
              </h2>

              <ul className="space-y-3 text-gray-600">

                <li>☕ Hosted coffee gathering</li>

                <li>💛 Small group introductions</li>

                <li>🤝 Guided conversation starters</li>

                <li>✨ Opportunity to meet new people</li>

              </ul>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <div className="bg-white rounded-[32px] shadow-lg p-8 sticky top-24">

              <h2 className="text-2xl font-bold text-[#24324a]">
                Reserve Your Spot
              </h2>

              <p className="text-gray-500 mt-3">
                Secure your place before reservations close.
              </p>

              <button
  onClick={reserveEvent}
  className="w-full mt-8 h-14 bg-[#f5b54a] text-[#24324a] rounded-2xl font-bold text-lg hover:bg-[#efaa2f] transition"
>

  Reserve Spot

</button>

              <Link
                to="/events"
                className="block text-center mt-4 text-[#24324a] font-semibold"
              >
                Back to Events
              </Link>

            </div>

          </div>

        </div>

        {/* Related Events */}

        <div className="mt-14">

          <h2 className="text-3xl font-bold text-[#24324a] mb-8">
            You May Also Like
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white rounded-[32px] shadow-lg p-6">
              <h3 className="font-bold text-xl text-[#24324a]">
                New Friends Mixer 💛
              </h3>

              <p className="text-gray-500 mt-3">
                Sunday • 1:00 PM
              </p>
            </div>

            <div className="bg-white rounded-[32px] shadow-lg p-6">
              <h3 className="font-bold text-xl text-[#24324a]">
                Women's Night ✨
              </h3>

              <p className="text-gray-500 mt-3">
                Friday • 7:00 PM
              </p>
            </div>

            <div className="bg-white rounded-[32px] shadow-lg p-6">
              <h3 className="font-bold text-xl text-[#24324a]">
                Wine & Paint Night 🎨
              </h3>

              <p className="text-gray-500 mt-3">
                Saturday • 6:00 PM
              </p>
            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}