import React from 'react';

export default function Layout({ children }) {
    return (
        <div className="relative min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}>
            </div>

            {/* Subtle Noise Texture */}
            <div className="fixed inset-0 z-[1] pointer-events-none opacity-20 mix-blend-overlay"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                }}>
            </div>

            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
}
