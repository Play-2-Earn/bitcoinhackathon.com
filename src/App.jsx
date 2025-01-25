import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faUsers,
  faRocket,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled.div`
  min-height: 100vh;
  background: #0a0c1b;
  color: white;
  padding: 2rem;
  font-family: "Inter", sans-serif;
  text-align: center;
  background: linear-gradient(-45deg, #0a0c1b, #1a1f3d, #2d1948);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
`;

const Header = styled(motion.h1)`
  font-size: 4rem;
  background: linear-gradient(90deg, #00ff88, #00ffee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 2rem 0;
  text-shadow: 0 0 20px rgba(0, 255, 136, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Countdown = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
  flex-wrap: wrap;
`;

const TimeUnit = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  min-width: 120px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  min-height: 250px;
`;

const CtaButton = styled(motion.a)`
  background: linear-gradient(90deg, #00ff88, #00ffee);
  color: #0a0c1b;
  padding: 1.5rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin: 2rem 0;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #00ff88;
`;

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const hackathonDate = new Date("2024-03-15T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = hackathonDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <Header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        bitcoinhackathon.com
      </Header>

      <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
        Join the ultimate Bitcoin development challenge
      </p>

      <Countdown>
        {Object.entries(timeLeft).map(([unit, value]) => (
          <TimeUnit key={unit} initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
              {value}
            </div>
            <div style={{ textTransform: "uppercase", opacity: 0.8 }}>
              {unit}
            </div>
          </TimeUnit>
        ))}
      </Countdown>

      <Grid>
        <Card
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Icon icon={faCode} />
          <h3>Build Bitcoin Solutions</h3>
          <p>Create innovative applications on the Bitcoin blockchain</p>
        </Card>

        <Card
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Icon icon={faUsers} />
          <h3>Join Developers Worldwide</h3>
          <p>Collaborate with top blockchain developers</p>
        </Card>

        <Card
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Icon icon={faTrophy} />
          <h3>Win Amazing Prizes</h3>
          <p>$100k+ in prizes including Bitcoin grants</p>
        </Card>
      </Grid>

      <CtaButton
        href="https://www.b1tcoin.ai/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Register Now
      </CtaButton>

      <div style={{ marginTop: "3rem", opacity: 0.8 }}>
        <Icon icon={faRocket} style={{ fontSize: "1.5rem" }} />
        <p>Powered by bitcoinhackathon.com</p>
      </div>
    </Container>
  );
}

export default App;
