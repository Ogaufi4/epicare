'use client'
import React, { useState } from 'react';
import speechContent from "../../speechContent.json";
import { Icon ,Volume2} from 'lucide-react';

// Utility to speak a given text using the Web Speech API
const speakText = (text: string): Promise<void> => {
  return new Promise<void>((resolve) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => resolve();
    window.speechSynthesis.speak(utterance);
  });
};

interface SectionReadButtonProps {
  pageKey: string;
}

export default function SectionReadButton({ pageKey }: SectionReadButtonProps) {
  const [isReading, setIsReading] = useState(false);

  const handleClick = async () => {
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }
    setIsReading(true);
    const items = (speechContent as any)[pageKey];
    if (items && Array.isArray(items)) {
      // Sort items by order
      items.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
      for (const item of items) {
        let textToSpeak = "";
        if (item.text) {
          textToSpeak = item.text;
        } else if (item.title && item.desc) {
          textToSpeak = `${item.title}. ${item.desc}`;
        } else if (item.q && item.a) {
          textToSpeak = `Question: ${item.q}. Answer: ${item.a}`;
        }
        if (textToSpeak) {
          await speakText(textToSpeak);
        }
      }
    }
    setIsReading(false);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-300 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:border-indigo-400 transition-all shadow-sm"
    >
        {/* <Icon className="w-4 h-4" name="volume-2" /> */}
      <Volume2 />
      <span>{isReading ? "Stop Reading" : "Read"}</span>
    </button>
  );
}
