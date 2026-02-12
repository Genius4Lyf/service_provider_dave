import React, { useState } from 'react'
import { Mail, Copy, Check } from 'lucide-react'

export default function Hero() {
    const email = "support@serviceproviderhq.com"
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden">

            {/* Dynamic Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-3xl w-full relative z-10 text-center">

                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
                    Professional Services. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                        Made Simple.
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                    We provide strategic solutions to elevate your business.
                    <br className="hidden md:block" />
                    For inquiries and consultations, please contact us directly.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <div
                        onClick={handleCopy}
                        className="group relative cursor-pointer flex items-center gap-4 bg-white border border-slate-200 px-8 py-5 rounded-2xl shadow-sm hover:shadow-xl hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300 w-full max-w-md mx-auto"
                    >
                        <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <Mail className="w-5 h-5" />
                        </div>

                        <span className="text-xl font-medium text-slate-900 flex-1 text-left">{email}</span>

                        <div className="text-slate-400 group-hover:text-indigo-600 transition-colors">
                            {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                        </div>

                        {copied && (
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg animate-fade-in whitespace-nowrap">
                                Copied to clipboard!
                            </span>
                        )}
                    </div>

                    <p className="text-sm text-slate-400">
                        Click the box to copy email
                    </p>
                </div>
            </div>
        </section>
    )
}
