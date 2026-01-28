export const studyGuideData = [
  {
    title: 'Introduction to Gemini CLI',
    content: `
      <p>Gemini CLI brings Gemini model capabilities to your terminal in an interactive Read-Eval-Print Loop (REPL) environment.</p>
      <p>It consists of a client-side application (packages/cli) that communicates with a local server (packages/core). The server manages requests to the Gemini API and its AI models.</p>
      <p>Gemini CLI includes various tools for file system operations, running shells, and web fetching, all managed by packages/core.</p>
    `,
    quiz: [
      {
        question: 'What is the primary purpose of Gemini CLI?',
        options: [
          'To provide a graphical user interface for Gemini models.',
          'To bring Gemini model capabilities to the terminal.',
          'To be a standalone AI model.',
          'To manage cloud infrastructure.',
        ],
        correctAnswer: 'To bring Gemini model capabilities to the terminal.',
      },
      {
        question: 'What are the two main components of the Gemini CLI architecture?',
        options: [
          'A web-based dashboard and a mobile app.',
          'A client-side application and a local server.',
          'A database and a machine learning model.',
          'A text editor and a compiler.',
        ],
        correctAnswer: 'A client-side application and a local server.',
      },
    ],
  },
  {
    title: 'Getting Started',
    content: `
      <ul>
        <li><strong>Quickstart</strong>: Learn how to begin using Gemini CLI.</li>
        <li><strong>Authentication</strong>: How to authenticate to Gemini CLI.</li>
        <li><strong>Configuration</strong>: How to configure the CLI's settings.</li>
        <li><strong>Installation</strong>: Steps to install and run Gemini CLI.</li>
      </ul>
    `,
    quiz: [
      {
        question: 'Which of the following is NOT a part of the "Getting Started" section?',
        options: ['Quickstart', 'Authentication', 'Advanced Scripting', 'Installation'],
        correctAnswer: 'Advanced Scripting',
      },
    ],
  },
  {
    title: 'CLI Features',
    content: `
      <ul>
        <li><strong>Commands</strong>: Description of available CLI commands.</li>
        <li><strong>Headless Mode</strong>: Use Gemini CLI programmatically for scripting and automation.</li>
        <li><strong>Sandbox</strong>: Isolate tool execution in a secure, containerized environment.</li>
        <li><strong>Themes</strong>: Customize the appearance of Gemini CLI.</li>
      </ul>
    `,
    quiz: [
      {
        question: 'What is the purpose of "Headless Mode"?',
        options: [
          'To change the CLI theme.',
          'To use the CLI for scripting and automation.',
          'To run the CLI in a secure sandbox.',
          'To view available commands.',
        ],
        correctAnswer: 'To use the CLI for scripting and automation.',
      },
    ],
  },
];
