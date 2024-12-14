"use client";
import { useState, useEffect } from "react";

const QuizComponent = () => {
  // State for MCQ section
  const [selectedOption, setSelectedOption] = useState(null);
  const [mcqTimeLeft, setMcqTimeLeft] = useState(60); // 60 seconds timer for MCQ
  const [mcqTimerActive, setMcqTimerActive] = useState(true);

  // State for Flashcard section
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flashcardTimeLeft, setFlashcardTimeLeft] = useState(30); // 30 seconds timer for flashcard
  const [flashcardTimerActive, setFlashcardTimerActive] = useState(true);

  useEffect(() => {
    if (mcqTimeLeft > 0 && mcqTimerActive) {
      const timer = setInterval(() => {
        setMcqTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [mcqTimeLeft, mcqTimerActive]);

  useEffect(() => {
    if (flashcardTimeLeft > 0 && flashcardTimerActive) {
      const timer = setInterval(() => {
        setFlashcardTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [flashcardTimeLeft, flashcardTimerActive]);

  const mcqQuestions = [
    {
      question: "What does AI stand for?",
      options: [
        "Artificial Intelligence",
        "Automated Interaction",
        "Advanced Integration",
        "None of the above",
      ],
      answer: "Artificial Intelligence",
    },
    // Add more MCQs here
  ];

  const flashcards = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
    },
    // Add more flashcards here
  ];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextFlashcard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setShowAnswer(false);
    setFlashcardTimeLeft(30); // Reset timer for each card
  };

  return (
    <div style={styles.quizComponent}>
      {/* MCQ Section */}
      <div style={styles.mcqSection}>
        <h2 style={styles.heading}>Multiple Choice Questions</h2>
        <div style={styles.timer}>
          <p>Time Left: {mcqTimeLeft} seconds</p>
        </div>
        {mcqQuestions.map((q, index) => (
          <div key={index} style={styles.question}>
            <p>{q.question}</p>
            <div style={styles.options}>
              {q.options.map((option, i) => (
                <label key={i} style={styles.optionLabel}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={() => handleOptionChange(option)}
                    style={styles.radioInput}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
        <div style={styles.result}>
          <p>Selected Option: {selectedOption || "None selected"}</p>
        </div>
      </div>

      {/* Flashcard Section */}
      <div style={styles.flashcardSection}>
        <h2 style={styles.heading}>Flashcard Section</h2>
        <div style={styles.timer}>
          <p>Time Left: {flashcardTimeLeft} seconds</p>
        </div>
        <div
          style={styles.flashcard}
          onClick={() => setShowAnswer(!showAnswer)}
        >
          <div
            style={{
              ...styles.flashcardContent,
              backgroundColor: showAnswer ? "#f1f1f1" : "#fff",
            }}
          >
            <p style={styles.flashcardText}>
              {showAnswer
                ? flashcards[currentCardIndex].answer
                : flashcards[currentCardIndex].question}
            </p>
          </div>
        </div>
        <button style={styles.nextButton} onClick={handleNextFlashcard}>
          Next Card
        </button>
      </div>
    </div>
  );
};

export default QuizComponent;

const styles = {
  quizComponent: {
    padding: "40px",
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Roboto', sans-serif",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  mcqSection: {
    marginBottom: "40px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  },
  question: {
    marginBottom: "20px",
    fontSize: "18px",
  },
  options: {
    marginTop: "10px",
  },
  optionLabel: {
    display: "block",
    fontSize: "16px",
    marginBottom: "10px",
  },
  radioInput: {
    marginRight: "10px",
  },
  result: {
    marginTop: "20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#0070f3",
    textAlign: "center",
  },
  flashcardSection: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    textAlign: "center",
  },
  flashcard: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    overflow: "hidden",
    cursor: "pointer",
    marginBottom: "20px",
    transition: "background-color 0.3s ease",
  },
  flashcardContent: {
    padding: "30px",
    fontSize: "20px",
    fontWeight: "500",
    textAlign: "center",
  },
  flashcardText: {
    color: "#333",
  },
  nextButton: {
    padding: "10px 30px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#0070f3",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  timer: {
    marginBottom: "20px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#ff4c4c",
    textAlign: "center",
  },
};
