import React, { useState, useEffect, useRef } from 'react';
import './Tab2Container.css'; // Custom CSS for spinner

const Tab2Container: React.FC = () => {
  const [loading, setLoading] = useState(true); // State to show spinner
  const webchatContainerRef = useRef<HTMLDivElement>(null); // Ref for webchat container

  // Use effect to manage the loading state and render Web Chat
  useEffect(() => {
    // Set a 2-second delay for the spinner
    const timer = setTimeout(() => {
      setLoading(false); // Hide spinner after 2 seconds
    }, 2000); // Delay of 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // Use effect to load Web Chat after the spinner disappears
  useEffect(() => {
    if (!loading && webchatContainerRef.current) {
      const loadWebChat = () => {
        // Create and load the Web Chat script
        const script = document.createElement('script');
        script.src = 'https://cdn.botframework.com/botframework-webchat/latest/webchat.js';
        script.onload = () => {
          const directLineSecret = 'BZAdvQzILg0.6QqZBdPo_Nt7d2x3nRGL9OlDVvdBgoKBMsRAPOQDk3M'; // Replace with your Direct Line secret

          // Render Web Chat in the container
          window.WebChat.renderWebChat(
            {
              directLine: window.WebChat.createDirectLine({ secret: directLineSecret }),
            },
            webchatContainerRef.current // Attach to the container
          );
        };
        document.body.appendChild(script); // Append script to load Web Chat
      };

      loadWebChat(); // Load Web Chat after the spinner disappears
    }
  }, [loading]); // Only run when loading is complete (i.e., spinner disappears)

  return (
    <>
      {/* Display spinner for 2 seconds */}
      {loading ? (
        <div className="loading-container">
          <p>Loading chat...</p>
        </div>
      ) : (
        // Web Chat container (visible after spinner)
        <div id="webchat" ref={webchatContainerRef} style={{ height: '600px', width: '100%' }}></div>
      )}
    </>
  );
};

export default Tab2Container;