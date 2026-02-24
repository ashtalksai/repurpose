"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Upload, 
  Link as LinkIcon, 
  FileAudio, 
  FileVideo, 
  Loader2,
  ArrowLeft,
  Check,
  Copy,
  Download
} from "lucide-react";

const platforms = [
  { name: "LinkedIn", emoji: "💼", enabled: true },
  { name: "Twitter/X", emoji: "𝕏", enabled: true },
  { name: "Instagram", emoji: "📸", enabled: true },
  { name: "TikTok", emoji: "🎵", enabled: true },
  { name: "Blog", emoji: "✍️", enabled: true },
  { name: "Email", emoji: "📧", enabled: true },
];

export default function AppPage() {
  const [url, setUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<null | Record<string, string>>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  }, []);

  const handleFile = (file: File) => {
    console.log("Processing file:", file.name);
    simulateProcessing();
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      console.log("Processing URL:", url);
      simulateProcessing();
    }
  };

  const simulateProcessing = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setResults({
        "LinkedIn": `🚀 Just discovered a game-changing approach to content creation...

Here's what I learned:

1️⃣ Quality over quantity - but consistency matters
2️⃣ Repurposing is the ultimate leverage hack
3️⃣ One piece of content can become 10+ posts

The creators winning in 2026 aren't creating more.
They're creating smarter.

What's your content strategy? Drop a comment below 👇

#ContentCreation #CreatorEconomy #Marketing`,
        
        "Twitter/X": `🧵 Thread: What I learned about content repurposing

1/ Most creators are doing it wrong.

They create once, post once, and move on.

Meanwhile, the top 1% squeeze 10x more value from every piece of content.

Here's how 👇`,
        
        "Instagram": `Caption for carousel:

Stop creating. Start repurposing. 🔄

Swipe to learn the 5-step framework that helped me 10x my content output without working harder →

The secret? One long-form piece of content can become:
• 3 LinkedIn posts
• 5 tweets
• 2 Instagram carousels
• 1 newsletter
• Countless stories

Save this for later 🔖

#ContentCreator #SocialMediaTips #CreatorEconomy #ContentStrategy #Repurposing`,
        
        "TikTok": `[HOOK - 0:00]
"You're creating content wrong. Here's why."

[PROBLEM - 0:03]
"You spend hours on a video, post it once, and move on. Meanwhile, top creators get 10x the reach from the same effort."

[SOLUTION - 0:10]
"The secret? Repurposing. One video becomes a LinkedIn post, Twitter thread, Instagram carousel, and email newsletter."

[CTA - 0:20]
"Follow for more content hacks"`,
        
        "Blog": `# The Content Repurposing Playbook: How to 10x Your Output

## Introduction

Most creators are trapped on the content treadmill. They create, publish, and immediately move on to the next piece. But there's a better way...

## The Problem with "Create More" Advice

The internet rewards consistency. But consistency doesn't mean creating more — it means showing up more. There's a crucial difference.

## The Repurposing Framework

Here's my 5-step framework for turning one piece of content into 10+:

1. **Start with long-form** - Podcast, video, or blog post
2. **Extract key insights** - Pull out 3-5 main points
3. **Adapt to platforms** - Reformat for each channel
4. **Schedule strategically** - Space out over 2 weeks
5. **Engage and iterate** - Use feedback to improve

## Conclusion

Stop creating more. Start creating smarter.`,
        
        "Email": `Subject: The content hack nobody talks about

Hey there,

Quick question: How many hours did you spend creating content last week?

Now, how many times did each piece get seen?

If you're like most creators, you're on a treadmill — creating, posting, forgetting, repeating.

But the top creators have a secret: repurposing.

One podcast episode becomes:
→ 3 LinkedIn posts
→ A Twitter thread
→ An Instagram carousel  
→ This very email

Same insight. 10x the reach.

Want me to show you exactly how? Reply "REPURPOSE" and I'll send you my complete framework.

Talk soon,
[Name]

P.S. I repurposed this email from a podcast episode. Meta, right? 😉`,
      });
    }, 3000);
  };

  const copyToClipboard = async (platform: string, content: string) => {
    await navigator.clipboard.writeText(content);
    setCopied(platform);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      {/* Header */}
      <header className="border-b border-[#2A2A2A] bg-[#0F0F0F]">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B4A] to-[#FF8563] flex items-center justify-center">
              <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>R</span>
            </div>
            <span className="text-xl font-bold text-[#FAFAFA]" style={{ fontFamily: "var(--font-display)" }}>
              Repurpose
            </span>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="text-[#A8A8A8]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 py-12">
        {!results ? (
          <>
            {/* Upload area */}
            <div className="max-w-2xl mx-auto">
              <h1
                className="text-3xl md:text-4xl font-bold text-[#FAFAFA] text-center mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Transform your content
              </h1>
              <p className="text-[#A8A8A8] text-center mb-8">
                Upload a file or paste a YouTube URL to get started
              </p>

              {/* Drag & drop zone */}
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-2xl p-12 text-center transition-colors ${
                  isDragging
                    ? "border-[#FF6B4A] bg-[#FF6B4A]/10"
                    : "border-[#2A2A2A] hover:border-[#3A3A3A]"
                }`}
              >
                {isProcessing ? (
                  <div className="flex flex-col items-center">
                    <Loader2 className="w-12 h-12 text-[#FF6B4A] animate-spin mb-4" />
                    <p className="text-[#FAFAFA] font-medium mb-2">Processing your content...</p>
                    <p className="text-[#6B6B6B] text-sm">This usually takes 30-60 seconds</p>
                  </div>
                ) : (
                  <>
                    <Upload className="w-12 h-12 text-[#6B6B6B] mx-auto mb-4" />
                    <p className="text-[#FAFAFA] font-medium mb-2">
                      Drop your file here, or{" "}
                      <label className="text-[#FF6B4A] cursor-pointer hover:underline">
                        browse
                        <input
                          type="file"
                          className="hidden"
                          accept="audio/*,video/*"
                          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                        />
                      </label>
                    </p>
                    <p className="text-[#6B6B6B] text-sm">
                      Supports MP3, MP4, M4A, WAV, MOV
                    </p>
                  </>
                )}
              </div>

              {/* OR divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-[#2A2A2A]" />
                <span className="text-sm text-[#6B6B6B]">or</span>
                <div className="flex-1 h-px bg-[#2A2A2A]" />
              </div>

              {/* URL input */}
              <form onSubmit={handleUrlSubmit} className="flex gap-3">
                <div className="relative flex-1">
                  <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B6B6B]" />
                  <Input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Paste YouTube URL..."
                    className="pl-10 bg-[#1A1A1A] border-[#2A2A2A] text-[#FAFAFA] placeholder:text-[#6B6B6B]"
                    disabled={isProcessing}
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-[#FF6B4A] hover:bg-[#FF8563] text-white px-6"
                  disabled={isProcessing || !url}
                >
                  Process
                </Button>
              </form>

              {/* Supported formats */}
              <div className="flex justify-center gap-6 mt-8">
                <div className="flex items-center gap-2 text-[#6B6B6B]">
                  <FileAudio className="w-4 h-4" />
                  <span className="text-sm">Audio</span>
                </div>
                <div className="flex items-center gap-2 text-[#6B6B6B]">
                  <FileVideo className="w-4 h-4" />
                  <span className="text-sm">Video</span>
                </div>
                <div className="flex items-center gap-2 text-[#6B6B6B]">
                  <LinkIcon className="w-4 h-4" />
                  <span className="text-sm">YouTube</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Results */
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1
                  className="text-2xl md:text-3xl font-bold text-[#FAFAFA]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Your content is ready! 🎉
                </h1>
                <p className="text-[#A8A8A8]">
                  Generated {Object.keys(results).length} platform-optimized posts
                </p>
              </div>
              <Button
                onClick={() => { setResults(null); setUrl(""); }}
                variant="outline"
                className="border-[#2A2A2A] text-[#FAFAFA]"
              >
                Start Over
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(results).map(([platform, content]) => {
                const platformData = platforms.find(p => p.name === platform);
                return (
                  <div
                    key={platform}
                    className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{platformData?.emoji}</span>
                        <h3 className="font-bold text-[#FAFAFA]" style={{ fontFamily: "var(--font-display)" }}>
                          {platform}
                        </h3>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(platform, content)}
                          className="text-[#6B6B6B] hover:text-[#FAFAFA]"
                        >
                          {copied === platform ? (
                            <Check className="w-4 h-4 text-[#10B981]" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-[#6B6B6B] hover:text-[#FAFAFA]"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <pre className="text-sm text-[#A8A8A8] whitespace-pre-wrap font-sans leading-relaxed max-h-64 overflow-y-auto">
                      {content}
                    </pre>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
