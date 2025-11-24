import { GoogleGenAI, Type } from "@google/genai";
import { Spirit } from "../types";

const apiKey = process.env.API_KEY || ''; // Ensure it doesn't crash if env is missing, though logic handles it.
const ai = new GoogleGenAI({ apiKey });

export const searchSpirits = async (query: string): Promise<Spirit[]> => {
  if (!apiKey) {
    console.warn("API Key is missing. Returning mock data.");
    return mockSpirits(query);
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate a list of 5 fictional "Roco Kingdom" style pets/spirits based on the search term "${query}". 
      If the query is empty, generate 5 random starter spirits (Fire, Water, Grass types).
      Return valid JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              name: { type: Type.STRING },
              type: { type: Type.STRING, description: "e.g., Fire, Water, Grass, Dragon" },
              powerLevel: { type: Type.NUMBER },
              description: { type: Type.STRING },
              imageColor: { type: Type.STRING, description: "A hex color code matching the spirit's type" }
            },
            required: ["id", "name", "type", "powerLevel", "description", "imageColor"]
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as Spirit[];
    }
    return mockSpirits(query);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return mockSpirits(query);
  }
};

// Fallback mock data if API fails or key is missing
const mockSpirits = (query: string): Spirit[] => [
  {
    id: '1',
    name: 'Mew-Mew',
    type: 'Water',
    powerLevel: 45,
    description: 'A small blue cat spirit that loves bubbles.',
    imageColor: '#60A5FA'
  },
  {
    id: '2',
    name: 'Flame-Tail',
    type: 'Fire',
    powerLevel: 50,
    description: 'Its tail is always burning with a gentle flame.',
    imageColor: '#F87171'
  },
  {
    id: '3',
    name: 'Leaf-Bug',
    type: 'Grass',
    powerLevel: 40,
    description: 'Hides in bushes and mimics leaves.',
    imageColor: '#4ADE80'
  }
];