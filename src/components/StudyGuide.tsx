import React from 'react';

interface StudyGuideProps {
  title: string;
  content: string;
}

const StudyGuide: React.FC<StudyGuideProps> = ({ title, content }) => {
  return (
    <div className="study-guide">
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default StudyGuide;
