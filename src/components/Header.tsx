import React from 'react';
import { Scale, Utensils } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Utensils className="h-6 w-6" />
          <h1 className="text-2xl font-bold">食事記録</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Scale className="h-6 w-6" />
          <span className="text-xl font-semibold">体重管理</span>
        </div>
      </div>
    </header>
  );
}