'use client';

import { useEffect, useState, useMemo } from 'react';

interface FloatItem {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  char: string;
}

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
}

const CHARS = ['❤️', '💕', '💖', '💗', '💓', '💝', '🌹', '✨', '💫', '🌸'];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const floatItems = useMemo<FloatItem[]>(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 18 + Math.random() * 32,
        duration: 7 + Math.random() * 9,
        delay: Math.random() * 12,
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
      })),
    []
  );

  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1.5 + Math.random() * 3.5,
        duration: 2 + Math.random() * 4,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div className="love-page">
      {/* Twinkling stars */}
      {mounted &&
        stars.map((s) => (
          <div
            key={s.id}
            className="star"
            style={
              {
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                '--dur': `${s.duration}s`,
                '--delay': `${s.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}

      {/* Floating hearts & emojis */}
      {mounted &&
        floatItems.map((item) => (
          <span
            key={item.id}
            className="float-item"
            style={
              {
                left: `${item.left}%`,
                fontSize: `${item.size}px`,
                '--dur': `${item.duration}s`,
                '--delay': `${item.delay}s`,
              } as React.CSSProperties
            }
          >
            {item.char}
          </span>
        ))}

      {/* Center love card */}
      <div className="love-card">
        {/* Orbiting rings */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="orbit-ring">
            <div className="orbit-dot" />
          </div>
          <div
            className="orbit-ring"
            style={{
              width: '130%',
              height: '130%',
              top: '-15%',
              left: '-15%',
              animation: 'rotateCCW 30s linear infinite',
              borderColor: 'rgba(255, 215, 0, 0.12)',
            }}
          >
            <div
              className="orbit-dot"
              style={{ background: '#ffd700', boxShadow: '0 0 10px #ffd700' }}
            />
          </div>
        </div>

        <div className="big-heart">❤️</div>

        <h1 className="love-title">I Love You</h1>

        <div className="love-letter">P</div>

        <p className="love-subtitle">✨ my whole world ✨</p>

        <p className="love-message">
          Every moment with you feels like magic. You make ordinary days feel
          extraordinary, and my heart chooses you — today, tomorrow, always.
        </p>

        <p className="forever-row">💕 Forever &amp; Always 💕</p>
      </div>
    </div>
  );
}
