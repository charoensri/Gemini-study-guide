import React, { useState } from 'react';

interface QuizProps {
  quiz: Array<{
    question: string;
    options: string[];
    correctAnswer: string;
  }>;
}

const Quiz: React.FC<QuizProps> = ({ quiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerSelection = (answer: string) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const currentQuestion = quiz[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="quiz">
      <h3>Quiz</h3>
      {currentQuestion && (
        <div>
          <p>{currentQuestion.question}</p>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li
  key={index}
  className={selectedAnswer === option ? 'selected' : ''}
  onClick={() => handleAnswerSelection(option)}
>
  {option}
</li>
            ))}
          </ul>
          {showFeedback && (
            <div>
              {isCorrect ? (
                <p>Correct!</p>
              ) : (
                <p>Wrong! The correct answer is: {currentQuestion.correctAnswer}</p>
              )}
              {currentQuestionIndex < quiz.length - 1 ? (
                <button onClick={handleNextQuestion}>Next Question</button>
              ) : (
                <p>You have completed the quiz!</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
