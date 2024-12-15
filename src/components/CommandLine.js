import { useState, useEffect } from 'react';
import styles from '../styles/CommandLine.module.scss';

export default function CommandLine({ onToggleMode }) {
  const [command, setCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [showResume, setShowResume] = useState(false);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      let output;
      switch (command.toLowerCase()) {
        case 'about':
          output = 'I am a CS student who likes machine learning and web development and likes to make applications using these two resources.';
          break;
        case 'projects':
          output = 'I have worked on several projects including finding factors that affected alumni giving for my university advancement office, making an app called Blind Melodies to help blind people learn how to play music, and creating a full-stack blog application among others. Please visit my project page to learn more.';
          break;
        case 'skills':
          output = 'I have great knowledge of the MERN Stack, Python, and machine learning using Python.';
          break;
        case 'resume':
          setShowResume(true);
          output = 'Opening resume... Press Esc to return to the command line.';
          break;
        case 'clear':
          setCommandHistory([]);
          setCommand('');
          return;
        case 'change to graphical mode':
          if (onToggleMode) {
            onToggleMode(false);
            output = 'Switched to graphical mode.';
          } else {
            output = 'Error: Graphical mode switch function not available.';
          }
          break;
        default:
          output = 'Unknown command. Try "about", "projects", "skills", "resume", or "clear".';
      }
      setCommandHistory([...commandHistory, { command, output }]);
      setCommand('');
    }
  };

  // Handle 'Esc' key press to close the resume view
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showResume) {
        setShowResume(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showResume]);

  return (
    <div
      className={`${styles.commandLineContainer} ${
        showResume ? styles.expandedCommandLine : ''
      }`}
    >
      {showResume ? (
        <div className={styles.resumeOverlay}>
          <iframe
            src="/resume.pdf"
            className={styles.resumeIframe}
            title="Resume"
          ></iframe>
        </div>
      ) : (
        <>
          <div className={styles.commandOptions}>
            <h3>Available Commands:</h3>
            <ul>
              <li><strong>about</strong> - Learn more about me</li>
              <li><strong>projects</strong> - View my projects</li>
              <li><strong>skills</strong> - See my skills and technologies</li>
              <li><strong>resume</strong> - Open my resume</li>
              <li><strong>change to graphical mode</strong> - Switch back to graphical mode</li>
              <li><strong>clear</strong> - Clear the command line</li>
            </ul>
          </div>
          <div className={styles.commandHistoryContainer}>
            <div className={styles.commandHistory}>
              {commandHistory.map((entry, index) => (
                <div key={index} className={styles.commandEntry}>
                  <div className={styles.commandPrompt}>$ {entry.command}</div>
                  <div className={styles.commandOutput}>{entry.output}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.commandInputContainer}>
            <div className={styles.commandPrompt}>$</div>
            <input
              type="text"
              className={styles.commandInput}
              placeholder="Type a command... (e.g., 'about', 'projects', 'skills', 'clear')"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyPress={handleCommand}
            />
          </div>
        </>
      )}
    </div>
  );
}
