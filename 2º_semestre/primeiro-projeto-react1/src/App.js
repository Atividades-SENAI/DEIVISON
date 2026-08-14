import React, { useState, useEffect } from 'react';
import './App.css';

// Configurações do jogo
const GRAVITY = 4;
const JUMP = -45;
const OBSTACLE_WIDTH = 50;
const OBSTACLE_GAP = 150; // Espaço para o pássaro passar
const GAME_WIDTH = 400;
const GAME_HEIGHT = 500;
const BIRD_SIZE = 30; 

function App() {
  const [birdPos, setBirdPos] = useState(250);
  const [gameStarted, setGameStarted] = useState(false);
  const [obstacleHeight, setObstacleHeight] = useState(200);
  const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  // Efeito de queda do pássaro (Gravidade)
  useEffect(() => {
    let timeId;
    if (gameStarted && !isGameOver && birdPos < GAME_HEIGHT - BIRD_SIZE) {
      timeId = setInterval(() => {
        setBirdPos((prev) => prev + GRAVITY);
      }, 24);
    }
    return () => clearInterval(timeId);
  }, [birdPos, gameStarted, isGameOver]);

  // Movimento dos obstáculos (Canos)
  useEffect(() => {
    let obstacleId;
    if (gameStarted && !isGameOver && obstacleLeft >= -OBSTACLE_WIDTH) {
      obstacleId = setInterval(() => {
        setObstacleLeft((prev) => prev - 5);
      }, 24);
    } else if (obstacleLeft < -OBSTACLE_WIDTH) {
      // Quando o cano sai da tela, recria ele à direita e aumenta o placar
      setObstacleLeft(GAME_WIDTH);
      setObstacleHeight(Math.floor(Math.random() * (GAME_HEIGHT - OBSTACLE_GAP - 50)) + 25);
      setScore((s) => s + 1);
    }
    return () => clearInterval(obstacleId);
  }, [obstacleLeft, gameStarted, isGameOver]);

  // Detecção de Colisão
  useEffect(() => {
    // Colisão com os canos
    const hasCollidedWithTop = birdPos >= 0 && birdPos < obstacleHeight;
    const hasCollidedWithBottom = 
      birdPos <= GAME_HEIGHT && 
      birdPos + BIRD_SIZE >= GAME_HEIGHT - (GAME_HEIGHT - OBSTACLE_GAP - obstacleHeight);

    if (
      obstacleLeft >= 0 &&
      obstacleLeft <= OBSTACLE_WIDTH &&
      (hasCollidedWithTop || hasCollidedWithBottom)
    ) {
      setIsGameOver(true);
      setGameStarted(false);
    }

    // Colisão com o chão
    if (birdPos >= GAME_HEIGHT - BIRD_SIZE) {
      setIsGameOver(true);
      setGameStarted(false);
    }
  }, [birdPos, obstacleHeight, obstacleLeft]);

  // Controles de Clique (Pular ou Reiniciar)
  const handleClick = () => {
    if (!gameStarted && !isGameOver) {
      // Primeira jogada
      setGameStarted(true);
    } else if (isGameOver) {
      // Reiniciar após game over
      setBirdPos(250);
      setObstacleLeft(GAME_WIDTH);
      setScore(0);
      setIsGameOver(false);
      setGameStarted(true);
    } else {
      // Pular
      setBirdPos((prev) => Math.max(0, prev + JUMP)); // Impede que o pássaro saia pelo topo
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#282c34', // Fundo da tela toda
        margin: 0,
        overflow: 'hidden'
      }}
    >
      <div
        onClick={handleClick}
        style={{
          width: GAME_WIDTH,
          height: GAME_HEIGHT,
          backgroundColor: '#87ceeb', // Cor do céu
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: '0px 0px 20px rgba(0,0,0,0.5)',
          cursor: 'pointer'
        }}
      >
        {/* Placar */}
        <div 
          style={{ 
            position: 'absolute', top: 20, width: '100%', textAlign: 'center', 
            fontSize: 48, fontWeight: 'bold', color: 'white', zIndex: 10,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          {score}
        </div>

        {/* Mensagens de Início / Fim de Jogo */}
        {!gameStarted && (
          <div 
            style={{ 
              position: 'absolute', top: '40%', width: '100%', textAlign: 'center', 
              fontSize: 24, fontWeight: 'bold', color: 'white', zIndex: 10, 
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)' 
            }}
          >
            {isGameOver ? 'Fim de Jogo! Clique para jogar' : 'Clique para Começar'}
          </div>
        )}

        {/* Pássaro (Nossa bolinha amarela) */}
        <div
          style={{
            position: 'absolute',
            top: birdPos,
            left: 50,
            width: BIRD_SIZE,
            height: BIRD_SIZE,
            backgroundColor: '#f1c40f',
            borderRadius: '50%',
            border: '2px solid #e67e22',
            transition: 'top 0.02s ease-in-out' // Suaviza um pouco a animação
          }}
        />

        {/* Cano de Cima */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: obstacleLeft,
            width: OBSTACLE_WIDTH,
            height: obstacleHeight,
            backgroundColor: '#2ecc71',
            border: '2px solid #27ae60'
          }}
        />

        {/* Cano de Baixo */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: obstacleLeft,
            width: OBSTACLE_WIDTH,
            height: GAME_HEIGHT - OBSTACLE_GAP - obstacleHeight,
            backgroundColor: '#2ecc71',
            border: '2px solid #27ae60'
          }}
        />
      </div>
    </div>
  );
}

export default App;