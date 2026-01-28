import { useState } from 'react';
import { studyGuideData } from './data/studyGuideData';
import StudyGuide from './components/StudyGuide';
import Quiz from './components/Quiz';
import QnA from './components/QnA';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('study');
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const handleSectionChange = (index: number) => {
    setCurrentView('study');
    setCurrentSectionIndex(index);
  };

  const handleQnAClick = () => {
    setCurrentView('qa');
  };

  const currentSection = studyGuideData[currentSectionIndex];

  return (
    <div className="App">
      <header>
        <h1>Gemini CLI Study Guide</h1>
        <nav>
          <ul>
            {studyGuideData.map((section, index) => (
              <li
                key={index}
                className={currentView === 'study' && currentSectionIndex === index ? 'active' : ''}
                onClick={() => handleSectionChange(index)}
              >
                {section.title}
              </li>
            ))}
            <li
              className={currentView === 'qa' ? 'active' : ''}
              onClick={handleQnAClick}
            >
              Q&A
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {currentView === 'study' ? (
          <>
            <StudyGuide
              title={currentSection.title}
              content={currentSection.content}
            />
            <Quiz quiz={currentSection.quiz} onQuit={() => {}} />
          </>
        ) : (
          <QnA />
        )}
      </main>
    </div>
  );
}

export default App;
