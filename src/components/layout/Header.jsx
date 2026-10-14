import React from 'react';

function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 fixed top-0 right-0 left-[240px] z-10 flex items-center justify-between px-6">
      <h2 className="text-lg font-semibold text-[#1F2937]">Institution Management System</h2>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#3B5998] text-white flex items-center justify-center font-bold text-sm">
          HH
        </div>
        <span className="text-sm font-medium text-gray-700">Hasmath Hima (Lead)</span>
      </div>
    </header>
  );
}

export default Header;