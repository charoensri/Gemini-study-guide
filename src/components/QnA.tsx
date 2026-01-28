import React, { useState, useEffect } from 'react';
import { studyGuideData } from '../data/studyGuideData';
import Quiz from './Quiz';

const QnA: React.FC = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState<any[]>([]);
  const [showQuiz, setShowQuiz] = useState(true);

  useEffect(() => {
    const allQuestions = studyGuideData.flatMap((section) => section.quiz);
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const handleQuit = () => {
    setShowQuiz(false);
  };

  if (!showQuiz) {
    return (
      <div>
        <h2>Q&A Session Over</h2>
        <p>You have quit the Q&A session.</p>
      </div>
    );
  }

  return (
    <div>
      <Quiz quiz={shuffledQuestions} onQuit={handleQuit} />
    </div>
  );
};

export default QnA;
