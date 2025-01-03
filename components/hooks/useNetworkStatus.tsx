/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";

export const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isConnectionFast, setIsConnectionFast] = useState(true);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    const measureConnectionSpeed = async () => {
      const startTime = Date.now();
      try {
        await fetch("https://www.google.com/images/phd/px.gif", {
          method: "HEAD",
          mode: "no-cors",
        });
        const duration = Date.now() - startTime;
        setIsConnectionFast(duration < 2000); // Adjust threshold as needed
      } catch (error) {
        setIsConnectionFast(false);
      }
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    if (isOnline) {
      measureConnectionSpeed();
    }

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, [isOnline]);

  return { isOnline, isConnectionFast };
};

// const NetworkStatus = () => {
//   const { isOnline, isConnectionFast } = useNetworkStatus();

//   return (
//     <>
//       {!isOnline && (
//         <div className="bg-red-500 text-white text-center p-2">
//           You are currently offline. Some features may not be available.
//         </div>
//       )}
//       {isOnline && !isConnectionFast && (
//         <div className="bg-yellow-500 text-white text-center p-2">
//           Your network connection is slow. Experience may be degraded.
//         </div>
//       )}
//     </>
//   );
// };

// export default NetworkStatus;
