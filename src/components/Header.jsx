import React from 'react'

export default function Header() {
    return (
        <header className="absolute top-0 w-full z-50 p-6">
            <div className="max-w-3xl mx-auto flex justify-center">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20">
                        <span className="font-bold text-xl">S</span>
                    </div>
                    <span className="font-bold text-2xl tracking-tight text-slate-900">Service Provider</span>
                </div>
            </div>
        </header>
    )
}
