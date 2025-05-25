
import React from 'react';
import { RotateCcw, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';

const Returns = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Returns & Exchanges</h1>
      
      <div className="space-y-8">
        {/* Return Policy */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <RotateCcw className="mr-2 h-5 w-5" />
            Return Policy
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We want you to be completely satisfied with your purchase. If you're not happy with your order, you can return it within 30 days of delivery for a full refund.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Return Window</h3>
            <p className="text-blue-800 dark:text-blue-200">30 days from delivery date</p>
          </div>
        </section>

        {/* Return Conditions */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <CheckCircle className="mr-2 h-5 w-5" />
            Return Conditions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">✓ Eligible for Return</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Items in original condition</li>
                <li>Unused and unworn items</li>
                <li>Items with original tags</li>
                <li>Items in original packaging</li>
                <li>Items purchased within 30 days</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">✗ Not Eligible for Return</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Personalized or customized items</li>
                <li>Perishable goods</li>
                <li>Digital downloads</li>
                <li>Items on final sale</li>
                <li>Used or damaged items</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Exchange Policy */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <RefreshCw className="mr-2 h-5 w-5" />
            Exchange Policy
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We offer exchanges for size or color variations of the same product within 30 days of delivery.
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <p className="text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> If the new item has a different price, you'll be charged or refunded the difference.
            </p>
          </div>
        </section>

        {/* How to Return */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">How to Return an Item</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Start a Return</h3>
                <p className="text-gray-600 dark:text-gray-300">Log into your account and go to "Orders" to initiate a return request.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Print Return Label</h3>
                <p className="text-gray-600 dark:text-gray-300">We'll email you a prepaid return shipping label within 24 hours.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Package and Ship</h3>
                <p className="text-gray-600 dark:text-gray-300">Pack the item securely and attach the return label, then drop it off.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Receive Refund</h3>
                <p className="text-gray-600 dark:text-gray-300">Once we receive your return, we'll process your refund within 3-5 business days.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Information */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <AlertCircle className="mr-2 h-5 w-5" />
            Refund Information
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Processing Time</h3>
              <p className="text-gray-600 dark:text-gray-300">Refunds are processed within 3-5 business days after we receive your return.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Refund Method</h3>
              <p className="text-gray-600 dark:text-gray-300">Refunds are issued to the original payment method used for the purchase.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Shipping Costs</h3>
              <p className="text-gray-600 dark:text-gray-300">Original shipping costs are non-refundable unless the return is due to our error.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Returns;
