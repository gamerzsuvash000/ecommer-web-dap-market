
import React from 'react';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
        <p className="text-blue-800 dark:text-blue-200">
          <strong>Last updated:</strong> December 2024
        </p>
        <p className="text-blue-800 dark:text-blue-200 mt-2">
          Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
        </p>
      </div>

      <div className="space-y-8">
        {/* Information We Collect */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Eye className="mr-2 h-5 w-5" />
            Information We Collect
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Personal Information</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Name, email address, and phone number</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely through Stripe)</li>
                <li>Account preferences and settings</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on site</li>
                <li>Device and operating system information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <UserCheck className="mr-2 h-5 w-5" />
            How We Use Your Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Service Provision</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Process and fulfill orders</li>
                <li>Provide customer support</li>
                <li>Send order confirmations and updates</li>
                <li>Manage your account</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Improvement & Marketing</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Improve our website and services</li>
                <li>Send promotional emails (with consent)</li>
                <li>Analyze usage patterns</li>
                <li>Prevent fraud and security threats</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Lock className="mr-2 h-5 w-5" />
            Data Protection
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Security Measures</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>SSL encryption for all data transmission</li>
                <li>Secure payment processing through Stripe</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and employee training</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Data Retention</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We retain your personal information only as long as necessary to provide our services and comply with legal obligations.
              </p>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            Your Rights
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Access & Control</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and data</li>
                <li>Download your data</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Communication Preferences</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Opt out of marketing emails</li>
                <li>Manage cookie preferences</li>
                <li>Control data sharing</li>
                <li>Request data portability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Cookies and Tracking</h2>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Essential Cookies</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Required for basic site functionality</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Analytics Cookies</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Help us understand site usage</p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Marketing Cookies</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Enable personalized advertising</p>
              </div>
            </div>
          </div>
        </section>

        {/* Third Party Services */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Third-Party Services</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Payment Processing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We use Stripe for secure payment processing. Stripe's privacy policy governs the handling of your payment information.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We may use Google Analytics and other analytics services to understand how visitors use our website.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            If you have any questions about this privacy policy or our data practices, please contact us:
          </p>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <p><strong>Email:</strong> privacy@dapmarket.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Commerce Street, New York, NY 10001</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
