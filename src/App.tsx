import React, { useState } from 'react';
import { Header } from './components/Header';
import { FoodEntryForm } from './components/FoodEntryForm';
import { WeightEntryForm } from './components/WeightEntryForm';
import { FoodList } from './components/FoodList';
import { WeightList } from './components/WeightList';
import type { FoodEntry, WeightEntry } from './types';
import { sampleFoodEntries, sampleWeightEntries } from './utils/sampleData';

function App() {
  const [foodEntries, setFoodEntries] = useState<FoodEntry[]>(sampleFoodEntries);
  const [weightEntries, setWeightEntries] = useState<WeightEntry[]>(sampleWeightEntries);

  const handleFoodSubmit = (entry: Omit<FoodEntry, 'id'>) => {
    const newEntry = {
      ...entry,
      id: crypto.randomUUID(),
    };
    setFoodEntries((prev) => [newEntry, ...prev]);
  };

  const handleWeightSubmit = (entry: Omit<WeightEntry, 'id'>) => {
    const newEntry = {
      ...entry,
      id: crypto.randomUUID(),
    };
    setWeightEntries((prev) => [newEntry, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">食事記録</h2>
            <FoodEntryForm onSubmit={handleFoodSubmit} />
            <FoodList entries={foodEntries} />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">体重記録</h2>
            <WeightEntryForm onSubmit={handleWeightSubmit} />
            <WeightList entries={weightEntries} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;