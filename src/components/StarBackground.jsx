import { useEffect, useState } from 'react';

// Star properties: id, size,x, y, opacity animationDuration
// Meteors properties: id, size,x, y, delay animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]); // a list of objects
  const [meteors, setMeteors] = useState([]);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // 1 to 4
        x: Math.random() * 100, // position of the stars in the viewport;  0 to 100%
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5, // bt. 0.5 (50% opacity) and 1 (100% opacity)
        animationDuration: Math.random() * 4 + 2, // animation between 2 and 6 seconds.
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;

    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // 1 to 3
        x: Math.random() * 100, // position of the meteors in the viewport;  0 to 100%
        y: Math.random() * 20, // 0 to 20%
        delay: Math.random() * 15, // bt 0 and 15 sec
        animationDuration: Math.random() * 3 + 3, // animation between 3 and 6 seconds.
      });
    }
    setMeteors(newMeteors);
  };

  useEffect(() => {
    generateStars();
    generateMeteors();

    // resize for screen size
    const handleResize = () => {
      generateStars();
    };

    // add a window event listener to capture the resize event
    window.addEventListener('resize', handleResize);

    // Since we are handling with a listener, we need to clean it up in case we unmount the component. 
    // so we return a function that removes the event listener to avoid memory leaks
    return () => window.removeEventListener('resize', handleResize);
    
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 ">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          //  utility classes defined in index.css
          style={{
            width: star.size + 'px',
            height: star.size + 'px',
            left: star.x + '%',
            top: star.y + '%',
            opacity: star.opacity,
            animationDuration: star.animationDuration + 's',
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          //  utility classes defined in index.css
          style={{
            width: meteor.size * 50 + 'px',
            height: meteor.size * 2 + 'px',
            left: meteor.x + '%',
            top: meteor.y + '%',
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + 's',
          }}
        />
      ))}
    </div>
  );
};
