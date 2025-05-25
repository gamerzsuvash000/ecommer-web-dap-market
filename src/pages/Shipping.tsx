
import React from 'react';
import { Truck, Clock, MapPin, Package } from 'lucide-react';

const Shipping = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Shipping Information</h1>
      
      <div className="space-y-8">
        {/* Shipping Methods */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Truck className="mr-2 h-5 w-5" />
            Shipping Methods
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Standard Shipping</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">5-7 business days</p>
              <p className="text-blue-600 dark:text-blue-400 font-medium">FREE on orders over $50</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">$5.99 for orders under $50</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Express Shipping</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">2-3 business days</p>
              <p className="text-blue-600 dark:text-blue-400 font-medium">$12.99</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Overnight Shipping</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">Next business day</p>
              <p className="text-blue-600 dark:text-blue-400 font-medium">$24.99</p>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">International</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">7-14 business days</p>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Starting at $19.99</p>
            </div>
          </div>
        </section>

        {/* Processing Time */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Clock className="mr-2 h-5 w-5" />
            Processing Time
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Orders are processed within 1-2 business days. Orders placed on weekends or holidays will be processed the next business day.
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>Monday - Friday: Orders placed before 2 PM EST ship same day</li>
            <li>Saturday - Sunday: Orders processed on Monday</li>
            <li>Holidays: Orders processed on next business day</li>
          </ul>
        </section>

        {/* Shipping Areas */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <MapPin className="mr-2 h-5 w-5" />
            Shipping Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Domestic Shipping</h3>
              <p className="text-gray-600 dark:text-gray-300">We ship to all 50 US states, including Alaska and Hawaii. PO Boxes and military addresses (APO/FPO) are also supported.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">International Shipping</h3>
              <p className="text-gray-600 dark:text-gray-300">We ship to over 100 countries worldwide. International orders may be subject to customs fees and import duties.</p>
            </div>
          </div>
        </section>

        {/* Tracking */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Package className="mr-2 h-5 w-5" />
            Order Tracking
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Once your order ships, you'll receive a tracking number via email. You can track your package using:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
            <li>Your Dap Market account under "Orders"</li>
            <li>The tracking link in your shipping confirmation email</li>
            <li>Directly on the carrier's website (UPS, FedEx, USPS)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Shipping;
