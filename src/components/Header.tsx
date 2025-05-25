
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, LogIn, Moon, Sun, Settings, Package, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Header = () => {
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle dark class on document element
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Dap Market</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Contact
            </Link>
            <Link to="/faq" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              FAQ
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </form>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleDarkMode}
              className="p-2"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {user ? (
              <div className="flex items-center space-x-4">
                {/* Profile Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/orders">
                        <Package className="mr-2 h-4 w-4" />
                        <span>Orders</span>
                      </Link>
                    </DropdownMenuItem>
                    {user.isAdmin && (
                      <DropdownMenuItem asChild>
                        <Link to="/admin">
                          <Settings className="mr-2 h-4 w-4" />
                          <span>Admin</span>
                        </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}

            <Link to="/cart" className="relative">
              <Button variant="ghost" size="sm">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
