import { useState, useEffect } from "react";

const PopupBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const bannerDismissed = localStorage.getItem("bannerDismissed");
    if (!bannerDismissed) {
      setIsVisible(true);

      // Automatically hide the banner after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
        localStorage.setItem("bannerDismissed", "true");
      }, 10000);

      // Cleanup the timer on unmount
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div style={styles.banner}>
      <p>Welcome to our website! Help us with your donation for Temple construction.</p>
    </div>
  );
};

const styles = {
  banner: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#f39c12",
    color: "#fff",
    padding: "15px",
    zIndex: 1000,
    textAlign: "center" as const,
  },
};

export default PopupBanner;
