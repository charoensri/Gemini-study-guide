import { useState } from 'react';
import { studyGuideData } from './data/studyGuideData';
import StudyGuide from './components/StudyGuide';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const handleSectionChange = (index: number) => {
    setCurrentSectionIndex(index);
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
                className={currentSectionIndex === index ? 'active' : ''}
                onClick={() => handleSectionChange(index)}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <StudyGuide
          title={currentSection.title}
          content={currentSection.content}
        />
        <Quiz quiz={currentSection.quiz} />
      </main>
    </div>
  );
}

export default App;
