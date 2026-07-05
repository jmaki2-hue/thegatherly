import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  doc,
  updateDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../firebase/firebase";

export default function Questionnaire() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: "energy",
      question: "What type of energy do you enjoy most?",
      options: [
        "Calm & Cozy",
        "Deep Conversations",
        "Fun & Chaotic",
        "Luxury Experiences",
        "Spontaneous Nights",
        "Coffee & Chill",
      ],
    },
    {
      id: "social",
      question: "How social are you usually?",
      options: [
        "Very Introverted",
        "Mostly Introverted",
        "Balanced",
        "Outgoing",
        "Very Extroverted",
      ],
    },
    {
      id: "purpose",
      question: "What are you hoping to find?",
      options: [
        "New Friends",
        "Networking",
        "Dating",
        "Community",
        "Business Connections",
        "Casual Meetups",
      ],
    },
    {
      id: "vibe",
      question: "Which vibe feels most like you?",
      options: [
        "Luxury & Elegant",
        "Creative & Artsy",
        "Funny & Loud",
        "Chill & Relaxed",
        "Ambitious & Driven",
        "Mysterious & Quiet",
      ],
    },
    {
      id: "weekend",
      question: "Ideal weekend plan?",
      options: [
        "Dinner with Friends",
        "Coffee Date",
        "Night Out",
        "Travel",
        "Stay Home & Relax",
        "Networking Events",
      ],
    },
  ];

  const handleAnswer = async (answer) => {
    const updatedAnswers = {
      ...answers,
      [questions[currentQuestion].id]: answer,
    };

    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 200);
    } else {
      try {
        setLoading(true);

        const user = auth.currentUser;

        if (user) {
          await updateDoc(
            doc(db, "users", user.uid),
            {
              questionnaire: updatedAnswers,
              onboardingCompleted: true,
            }
          );
        }

        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);

      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  };

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  const current = questions[currentQuestion];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fdfaf6] flex items-center justify-center px-6">
        <div className="bg-white rounded-[40px] p-12 shadow-xl text-center max-w-lg">
          <div className="text-6xl mb-6">
            ✨
          </div>

          <h1 className="text-4xl font-bold text-[#24324a]">
            Building Your Experience
          </h1>

          <p className="text-gray-500 mt-4">
            Curating better social matches for you...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfaf6] flex items-center justify-center px-4 py-12 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-72 h-72 bg-[#f5b54a]/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#24324a]/10 rounded-full blur-3xl"></div>

      <div className="w-full max-w-3xl bg-white rounded-[40px] shadow-xl p-8 md:p-12 relative z-10">

        <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-8">
          <div
            className="h-full bg-[#f5b54a] transition-all duration-300"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <p className="text-gray-500 font-semibold">
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#24324a] mt-4 mb-10">
          {current.question}
        </h1>

        <div className="grid gap-4">

          {current.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="bg-white border border-gray-200 rounded-3xl px-6 py-5 text-left font-semibold text-[#24324a] hover:bg-[#fdfaf6] hover:border-[#f5b54a] transition"
            >
              {option}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}