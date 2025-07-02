import { useState } from 'react'
import './App.css'

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreviewUrl(URL.createObjectURL(selected));
      setGeneratedImage(null); // clear old result
    }
  };

  const handleSubmit = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/generate", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to generate image.");

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setGeneratedImage(imageUrl);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">GAN Image Generator</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />

      {previewUrl && (
        <div className="mb-4">
          <p className="font-medium">Preview:</p>
          <img src={previewUrl} alt="Preview" className="w-64 rounded shadow" />
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading || !file}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
      >
        {loading ? "Generating..." : "Generate AI Image"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {generatedImage && (
        <div className="mt-6">
          <p className="font-medium">Generated Image:</p>
          <img src={generatedImage} alt="Generated" className="w-64 rounded shadow" />
        </div>
      )}
    </div>
  );
}

export default App
