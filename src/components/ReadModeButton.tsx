'use client';
import React, { useState } from 'react';
import speechContent from "../../speechContent.json";

// Mapping of json keys to section IDs in page.tsx
const sectionMapping: Record<string, string> = {
  hero: 'home',
  learn: 'learn',
  adherenceTools: 'tools',
  medicationGallery: 'tools',
  adherenceChart: 'medical',
  faqs: 'faqs'
};

// Utility to speak a given text using the Web Speech API
const speakText = (text: string): Promise<void> => {
  return new Promise<void>((resolve) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => resolve();
    window.speechSynthesis.speak(utterance);
  });
};

export default function ReadModeButton() {
  const [isReading, setIsReading] = useState(false);

  const handleReadMode = async () => {
    if (isReading) {
      // Stop reading if button is clicked during reading
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }
    setIsReading(true);
    const pages = ["hero", "learn", "adherenceTools", "medicationGallery", "adherenceChart", "faqs"];
    for (const page of pages) {
      // If reading was canceled, break out early
      if (!isReading) break;
      const sectionId = sectionMapping[page];
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          // wait briefly for the scroll
          await new Promise(res => setTimeout(res, 1000));
        }
      }
      const items = (speechContent as any)[page];
      if (items && Array.isArray(items)) {
        items.sort((a: any, b: any) => (a.order || 0) - (b.order || 0));
        for (const item of items) {
          // If reading was canceled, break out early
          if (!isReading) break;
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
    }
    setIsReading(false);
  };

  return (
    <button
      onClick={handleReadMode}
      className="fixed bottom-4 right-4 px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition-colors z-50"
    >
      {isReading ? "Stop Read Mode" : "Activate Read Mode"}
    </button>
  );
}
