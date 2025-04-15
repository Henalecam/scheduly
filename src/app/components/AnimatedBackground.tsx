'use client';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-20 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Tech grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
      
      {/* Floating tech elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-100/20 dark:bg-blue-900/20 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gray-100/20 dark:bg-gray-800/20 animate-float-delayed" />
      </div>
      
      {/* Subtle blur */}
      <div className="absolute inset-0 backdrop-blur-[50px]" />
    </div>
  );
} 