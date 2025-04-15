'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '../ThemeProvider';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = [];
      const count = Math.floor((canvas.width * canvas.height) / 20000);

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.1 + 0.05
        });
      }
      particlesRef.current = particles;
    };

    // Draw grid
    const drawGrid = () => {
      const gridSize = 40;
      const gridColor = theme === 'dark' 
        ? 'rgba(59, 130, 246, 0.02)'
        : 'rgba(99, 102, 241, 0.02)';
      
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 0.5;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Draw floating particles
    const drawFloatingParticles = () => {
      const baseColor = theme === 'dark' 
        ? 'rgba(59, 130, 246, '
        : 'rgba(99, 102, 241, ';
      
      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = baseColor + particle.opacity + ')';
        ctx.fill();

        // Draw glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, baseColor + (particle.opacity * 0.5) + ')');
        gradient.addColorStop(1, baseColor + '0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(
          particle.x - particle.size * 2,
          particle.y - particle.size * 2,
          particle.size * 4,
          particle.size * 4
        );
      });
    };

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background elements
      drawGrid();
      drawFloatingParticles();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initial setup
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-20"
      aria-hidden="true"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        background: 'transparent'
      }}
    />
  );
} 