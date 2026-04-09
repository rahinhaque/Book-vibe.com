import React from 'react';
import { Link } from 'react-router';

const NoRoutesError = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full text-center">
                <div className="relative mb-8">
                    <h1 className="text-9xl font-black text-gray-200 select-none">
                        404
                    </h1>
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-[#131313] w-full">
                        Oops! Page Not Found
                    </p>
                </div>
                
                <div className="space-y-4 mb-10">
                    <p className="text-[#131313CC] text-lg">
                        The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <div className="flex justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#23BE0A]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#59C6D2]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#23BE0A]"></span>
                    </div>
                </div>

                <Link 
                    to="/" 
                    className="btn bg-[#23BE0A] hover:bg-[#23BE0A]/90 text-white border-none px-8 py-4 h-auto min-h-0 rounded-xl text-lg font-bold shadow-lg shadow-[#23BE0A]/20 transition-all hover:scale-105 active:scale-95"
                >
                    Back to Homepage
                </Link>

                <div className="mt-16 text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Book Vibe. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default NoRoutesError;