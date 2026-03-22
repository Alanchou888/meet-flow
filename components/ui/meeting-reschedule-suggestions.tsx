'use client';

import { useState } from 'react';

const suggestions = [
  'Mon 10:00 - 10:30',
  'Tue 14:00 - 14:30',
  'Wed 16:00 - 16:30',
];

export default function MeetingRescheduleSuggestions() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">Reschedule Suggestions</h2>
      <p className="mt-2 text-sm text-gray-600">
        Need to move this meeting? Click the button below to view suggested time slots.
      </p>

      <button
        onClick={() => setShowSuggestions(!showSuggestions)}
        className="mt-4 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
      >
        {showSuggestions ? 'Hide Suggestions' : 'Suggest New Times'}
      </button>

      {showSuggestions && (
        <div className="mt-4 space-y-2">
          {suggestions.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-left text-sm hover:bg-gray-50"
            >
              {time}
            </button>
          ))}
        </div>
      )}

      {selectedTime && (
        <p className="mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
          Selected new meeting time: {selectedTime}
        </p>
      )}
    </div>
  );
}