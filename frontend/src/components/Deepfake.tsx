'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ModelResult {
  name: string;
  confidence: number;
}

const Deepfake = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  const modelResults: ModelResult[] = [
    { name: 'Model 1', confidence: 95 },
    { name: 'Model 2', confidence: 95 },
    { name: 'Model 3', confidence: 95 },
  ];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-10 bg-white rounded-4xl shadow-xl">
      {/* Image Comparison Section */}
      <div className="mb-8 bg-white rounded-2xl p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-center text-gray-900 mb-2">Original</p>
            {previewUrl ? (
              <Image
                src={previewUrl}
                alt="Original"
                width={400}
                height={300}
                className="w-full rounded-xl"
              />
            ) : (
              <div className="aspect-video bg-gray-100 rounded-3xl flex items-center justify-center">
                <p className="text-gray-600">No image selected</p>
              </div>
            )}
          </div>
          <div>
            <p className="text-center text-gray-900 mb-2">Deepfake</p>
            <div className="aspect-video bg-gray-100 rounded-3xl flex items-center justify-center">
              <p className="text-gray-600">Processing result will appear here</p>
            </div>
          </div>
        </div>
        
        {/* Upload Button */}
        <div className="mt-4 flex justify-center">
          <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-3xl transition-colors">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Insert Image/Video
            </span>
            <input
              type="file"
              className="hidden"
              accept="image/*,video/*"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>

      {/* Model Results Section */}
      <div className="space-y-4">
        {modelResults.map((model, index) => (
          <div key={index} className="relative">
            <div className="flex items-center justify-between mb-1">
              <span className="font-medium">{model.name}</span>
              <span className="text-sm text-gray-600">{model.confidence}% Correct</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: `${model.confidence}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Download Report Button */}
      <div className="mt-6 flex justify-end">
        <button className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-3xl transition-colors">
          Download Report
        </button>
      </div>
    </div>
  );
};

export default Deepfake; 