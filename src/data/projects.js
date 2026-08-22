export const featuredProject = {
  title: 'Jarvis AI Assistant',
  tagline: 'A voice-driven desktop assistant that bridges natural language and system control.',
  problem:
    'Switching between apps, contacts, and websites by hand breaks focus. Jarvis listens for a command, understands intent, and acts — opening an app, placing a call, or answering a question — without the user touching a mouse.',
  features: [
    'Voice command recognition with continuous listening',
    'Text-based command fallback for quiet environments',
    'Conversational AI responses via connected AI APIs',
    'Opens applications and websites on command',
    'Phone integration — calls contacts through ADB / Android bridge',
    'Desktop automation for repetitive tasks',
    'A Jarvis-style dashboard UI for visual feedback',
  ],
  stack: ['React', 'JavaScript', 'Electron', 'Node.js', 'AI APIs', 'Speech Recognition', 'Speech Synthesis', 'ADB'],
  github: 'https://github.com/rakheebshaikh906-droid/Jarvis-Ai-',
  demo: null,
}

export const projects = [
  {
    title: 'Smart Attendance System',
    tagline: 'Face-recognition attendance tracking with a real-time admin/student workflow.',
    problem:
      'Manual attendance is slow and easy to falsify. This system registers students by face, recognizes them at check-in, and writes attendance straight to a live database both admins and students can trust.',
    features: [
      'Student registration with face capture',
      'Real-time face recognition at check-in',
      'Attendance history synced to Firebase Realtime Database',
      'Separate admin and student workflows',
    ],
    stack: ['React', 'Firebase', 'JavaScript', 'Face Recognition', 'Firebase Realtime Database'],
    github: 'https://github.com/rakheebshaikh906-droid/Smart-Atendance-System-using-faceRecogination',
    demo: 'https://smart-attendance-system-29984.web.app',
  },
  {
    title: 'Smart Resume Analyzer',
    tagline: 'Parses a resume PDF and surfaces concrete, structured feedback.',
    problem:
      'Most resume advice is generic. This tool reads the actual PDF content and reasons over it, so the feedback is grounded in what a candidate actually wrote.',
    features: [
      'Client-side PDF parsing and text extraction',
      'Structured, section-by-section feedback',
      'Built for fast iteration with Vite',
    ],
    stack: ['React', 'Vite', 'JavaScript', 'PDF Processing', 'AI Concepts'],
    github: 'https://github.com/rakheebshaikh906-droid/Smart-Resume-Analyzer',
    demo: 'https://smart-resumeanalyzer.netlify.app/',
  },
  {
    title: 'AI Interview Application',
    tagline: 'A practice ground for technical interviews, with AI in the loop.',
    problem:
      'Interview practice is only useful with feedback. This app asks interview questions, engages in AI-driven back-and-forth, and keeps the session focused on improvement rather than just repetition.',
    features: [
      'Structured interview question sets',
      'AI-driven conversational interaction',
      'Feedback-oriented practice flow',
    ],
    stack: ['React', 'JavaScript', 'AI APIs'],
    github: 'https://github.com/rakheebshaikh906-droid/Ai-Interview-Application',
    demo: 'https://rakheebshaikh906-droid.github.io/Ai-Interview-Application/',
  },
  {
    title: 'Quiz Application',
    tagline: 'A clean, componentized quiz app built to practice React fundamentals.',
    problem:
      'Built as a focused exercise in state management and component design — question flow, scoring, and result states, all handled with plain React.',
    features: [
      'Multi-question quiz flow with scoring',
      'Componentized, reusable question/answer UI',
      'Responsive layout for quick practice sessions',
    ],
    stack: ['React', 'JavaScript'],
    github: 'https://github.com/rakheebshaikh906-droid/QuizApp',
    demo: null,
  },
]
