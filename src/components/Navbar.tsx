import React from 'react';
import { Link } from 'react-router-dom';
import { Circle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b-2 border-white">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center space-x-3">
            <Circle className="h-8 w-8 text-white" strokeWidth={3} />
            <span className="text-xl font-display tracking-ultra uppercase">
              Basqi
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-12">
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/artists">Artists</NavLink>
            <NavLink to="/about">About</NavLink>
            <Link
              to="/join-waitlist"
              className="px-8 py-3 bg-white text-black uppercase tracking-ultra text-sm font-bold hover:bg-neutral-200 transition-colors duration-300"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="nav-link text-sm uppercase tracking-ultra font-bold hover:text-neutral-300"
  >
    {children}
  </Link>
);