"use client";

import React, { useState } from 'react';
import { Heart, Sun, Leaf, Shield, Home, Sparkles } from 'lucide-react';

export default function RevelationHope() {
    const [activeSection, setActiveSection] = useState<number | null>(null);
    const [showFinal, setShowFinal] = useState(false);

    const sections = [
        {
            id: 1,
            icon: Shield,
            title: "The Point Isn't 'Everything Gets Worse Forever'",
            subtitle: "Evil systems look unbeatable… and then they fall. They always fall.",
            content: [
                "Revelation is not saying: 'History collapses and evil wins until God nukes everything.'",
                "Instead it says: 'Evil systems look unbeatable… and then they fall. They always fall.'",
                "Empires collapse. Oppression expires. Violence devours itself.",
                "Revelation unveils reality: beastly power is temporary.",
                "That in itself is profoundly hopeful."
            ],
            color: "from-amber-500 to-orange-600"
        },
        {
            id: 2,
            icon: Heart,
            title: "Power Can't Save the World — Love Can",
            subtitle: "The Lamb wins — not by becoming another beast — but by staying the Lamb.",
            content: [
                "There's a repeated contrast:",
                "• The beastly way of ruling: coercion, violence, fear, propaganda",
                "• The Lamb's way: vulnerability, truth, justice, sacrificial love",
                "",
                "The Lamb wins — not by becoming another beast — but by staying the Lamb.",
                "",
                "That is revolutionary theology:",
                "The universe is not finally governed by force, but by love."
            ],
            color: "from-rose-500 to-pink-600"
        },
        {
            id: 3,
            icon: Sparkles,
            title: "Resistance Isn't Futile — It's Sacred",
            subtitle: "Faithfulness—even small, quiet faithfulness—is powerful.",
            content: [
                "Revelation was written to oppressed Christians under Roman imperial violence.",
                "Its message isn't 'run away' or 'panic' or 'decode prophecy charts.'",
                "",
                "Its message is:",
                "• Don't bow to systems that demand worship",
                "• Don't sell your conscience",
                "• Don't mistake empire for God",
                "• Don't lose your humanity",
                "• Don't surrender your soul to fear",
                "",
                "Faithfulness—even small, quiet faithfulness—is powerful."
            ],
            color: "from-purple-500 to-indigo-600"
        },
        {
            id: 4,
            icon: Sun,
            title: "The Alternative Kingdom Vision",
            subtitle: "A renewed creation where matter matters, bodies matter, life matters.",
            content: [
                "Revelation doesn't end with dystopia.",
                "It ends with one of the most hopeful statements in religious literature.",
                "",
                "A New Heaven and New Earth",
                "Not escapism. Not a spiritual cloud-realm. Not annihilation.",
                "A renewed creation:",
                "• matter matters",
                "• bodies matter",
                "• life matters",
                "• the world is healed, not discarded",
                "",
                "The City Comes Down",
                "Humanity doesn't rise up into heaven. Heaven moves toward humanity.",
                "That's a total reversal of the 'escape' idea.",
                "",
                "God Lives With Humanity",
                "The story ends with:",
                "• no violence",
                "• no exploitation",
                "• no tears",
                "• no death",
                "• no domination hierarchies",
                "• no beast systems",
                "",
                "Just restored relationship and dignity."
            ],
            color: "from-cyan-500 to-blue-600"
        },
        {
            id: 5,
            icon: Leaf,
            title: "The Most Radical Line",
            subtitle: "'Behold, I am making all things new.'",
            content: [
                "Not: 'I am making all new things.'",
                "That's replacement.",
                "",
                "'All things new.'",
                "That's redemption."
            ],
            color: "from-emerald-500 to-green-600"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                        Revelation's Hopeful Vision
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Not a horror story, but a resistance document with hope at its core
                    </p>
                </div>

                {/* Introduction */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/20">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                        <Sun className="text-amber-400" size={28} />
                        A Grounded, Non-Sensational Approach
                    </h2>
                    <p className="text-lg text-slate-200 leading-relaxed">
                        Yes—Revelation absolutely offers a hopeful alternative vision, and that part of the book
                        is often buried under all the beasts, plagues, and chaos people focus on. Revelation is
                        not meant to be a horror story. It's a resistance document with hope at its core.
                    </p>
                </div>

                {/* Interactive Sections */}
                <div className="space-y-6 mb-16">
                    {sections.map((section, index) => {
                        const Icon = section.icon;
                        const isActive = activeSection === section.id;

                        return (
                            <div
                                key={section.id}
                                className="group cursor-pointer transition-all duration-300"
                                onClick={() => setActiveSection(isActive ? null : section.id)}
                            >
                                <div className={`
                  bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden
                  border border-white/20 transition-all duration-300
                  ${isActive ? 'shadow-2xl shadow-purple-500/20' : 'hover:shadow-xl hover:shadow-purple-500/10'}
                `}>
                                    {/* Section Header */}
                                    <div className={`
                    p-6 bg-gradient-to-r ${section.color} bg-opacity-20
                    flex items-start gap-4
                  `}>
                                        <div className="flex-shrink-0">
                                            <div className={`
                        p-3 rounded-xl bg-gradient-to-r ${section.color}
                        transform transition-transform duration-300
                        ${isActive ? 'scale-110' : 'group-hover:scale-105'}
                      `}>
                                                <Icon size={28} />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-2">
                                                {index + 1}. {section.title}
                                            </h3>
                                            <p className="text-slate-200 text-lg italic">
                                                {section.subtitle}
                                            </p>
                                        </div>
                                        <div className={`
                      transform transition-transform duration-300
                      ${isActive ? 'rotate-180' : ''}
                    `}>
                                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Section Content */}
                                    <div className={`
                    overflow-hidden transition-all duration-500 ease-in-out
                    ${isActive ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                                        <div className="p-6 space-y-3">
                                            {section.content.map((line, i) => (
                                                <p
                                                    key={i}
                                                    className={`
                            text-slate-200 leading-relaxed
                            ${line.startsWith('•') ? 'ml-4' : ''}
                            ${line === '' ? 'h-2' : ''}
                            ${line.includes(':') && !line.startsWith('•') ? 'font-semibold text-white' : ''}
                          `}
                                                    style={{
                                                        animationDelay: `${i * 50}ms`
                                                    }}
                                                >
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Summary Section */}
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-purple-400/30">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        Revelation's Alternative Vision in One Sentence
                    </h2>
                    <div className="space-y-4 text-lg text-slate-100">
                        <p className="text-center text-xl mb-6">A world where:</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "empire is not God",
                                "fear is not our master",
                                "humans aren't commodities",
                                "life is restored",
                                "justice is real",
                                "community replaces domination",
                                "love outlasts violence"
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 p-3 bg-white/10 rounded-lg"
                                    style={{
                                        animation: 'fade-in 0.5s ease-out forwards',
                                        animationDelay: `${i * 100}ms`,
                                        opacity: 0
                                    }}
                                >
                                    <Heart className="text-pink-400 flex-shrink-0" size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-xl mt-8 font-semibold">
                            A world worth resisting for. A world worth hoping for.
                        </p>
                    </div>
                </div>

                {/* Final Thought */}
                <div
                    className="text-center cursor-pointer"
                    onClick={() => setShowFinal(!showFinal)}
                >
                    <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition-all hover:scale-105 mb-6">
                        {showFinal ? 'Hide' : 'Show'} Final Thought
                    </button>

                    <div className={`
            overflow-hidden transition-all duration-700 ease-in-out
            ${showFinal ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}>
                        <div className="bg-gradient-to-r from-rose-500/20 to-amber-500/20 backdrop-blur-lg rounded-2xl p-8 border border-rose-400/30">
                            <Home className="text-amber-400 mx-auto mb-4" size={48} />
                            <h3 className="text-3xl font-bold mb-4 text-amber-300">Final Thought</h3>
                            <div className="space-y-4 text-xl text-slate-100">
                                <p>Revelation isn't a book about doom.</p>
                                <p>It's a book about <span className="text-purple-300 font-semibold">courage</span>,</p>
                                <p><span className="text-pink-300 font-semibold">moral imagination</span>,</p>
                                <p>and <span className="text-amber-300 font-semibold">defiant hope</span></p>
                                <p>in the face of empires that insist they are eternal.</p>
                                <p className="text-2xl mt-6">They aren't.</p>
                                <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
                                    Love is.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-16 text-slate-400 text-sm">
                    <p>Click on any section to explore the hopeful vision of Revelation</p>
                </div>
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
}