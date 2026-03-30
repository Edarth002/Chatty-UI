'use client';

import { useState } from 'react';

export default function LandingPage() {
    const [email, setEmail] = useState('');

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle sign up logic
        console.log('Signing up with:', email);
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 font-sans">
            <nav className="flex justify-between items-center px-8 py-4">
                <h1 className="text-2xl font-bold text-indigo-600">Chatty</h1>
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Sign In
                </button>
            </nav>

            <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
                <div className="text-center max-w-2xl">
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">
                        Connect Instantly, Chat Forever
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        The modern way to stay connected with friends and teams.
                    </p>

                    <form onSubmit={handleSignUp} className="flex gap-2 justify-center mb-12">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-3 rounded-lg border border-gray-300 w-80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                        <button
                            type="submit"
                            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold"
                        >
                            Get Started
                        </button>
                    </form>

                    <div className="grid grid-cols-3 gap-8 mt-16">
                        <div>
                            <div className="text-3xl mb-2">⚡</div>
                            <h3 className="font-semibold text-gray-900">Lightning Fast</h3>
                            <p className="text-gray-600 text-sm">Real-time messaging</p>
                        </div>
                        <div>
                            <div className="text-3xl mb-2">🔒</div>
                            <h3 className="font-semibold text-gray-900">Secure</h3>
                            <p className="text-gray-600 text-sm">End-to-end encrypted</p>
                        </div>
                        <div>
                            <div className="text-3xl mb-2">🌍</div>
                            <h3 className="font-semibold text-gray-900">Global</h3>
                            <p className="text-gray-600 text-sm">Chat anywhere, anytime</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}