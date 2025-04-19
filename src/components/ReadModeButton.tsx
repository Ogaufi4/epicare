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

// Updated helper function to check partially visible elements
const isElementInViewport = (el: HTMLElement): boolean => {
  const rect = el.getBoundingClientRect();
  return rect.bottom >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
};

export default function ReadModeButton() {
  const [isReading, setIsReading] = useState(false);

  const handleReadMode = async () => {
    if (isReading) return;
    setIsReading(true);
    const pages = ["hero", "learn", "adherenceTools", "medicationGallery", "adherenceChart", "faqs"];
    // Filter pages whose element is visible on screen
    const pagesToRead = pages.filter(page => {
      const sectionId = sectionMapping[page];
      const el = sectionId && document.getElementById(sectionId);
      return el ? isElementInViewport(el) : false;
    });
    for (const page of pagesToRead) {
      // Optionally scroll into view (if needed) for each visible section
      const sectionId = sectionMapping[page];
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          await new Promise(res => setTimeout(res, 1000));
        }
      }
      const items = (speechContent as any)[page];
      if (items && Array.isArray(items)) {
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
    }
    setIsReading(false);
  };

  return (
    <button
      onClick={() => {
        if (isReading) {
          window.speechSynthesis.cancel();
          setIsReading(false);
        } else {
          handleReadMode();
        }
      }}
      className="fixed bottom-4 right-4 px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition-colors z-50"
    >
      {isReading ? "Stop Reading" : "Activate Read Mode"}
    </button>
  );
}
