
import React from 'react';
import { FileText, AlertTriangle, Scale, CreditCard } from 'lucide-react';

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
      
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8">
        <p className="text-yellow-800 dark:text-yellow-200">
          <strong>Last updated:</strong> December 2024
        </p>
        <p className="text-yellow-800 dark:text-yellow-200 mt-2">
          By using Dap Market, you agree to these terms. Please read them carefully.
        </p>
      </div>

      <div className="space-y-8">
        {/* Acceptance of Terms */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <FileText className="mr-2 h-5 w-5" />
            Acceptance of Terms
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            By accessing and using the Dap Market website and services, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        {/* Use License */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Scale className="mr-2 h-5 w-5" />
            Use License
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Permitted Use</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Personal, non-commercial use of our services</li>
                <li>Browsing and purchasing products</li>
                <li>Creating an account and managing orders</li>
                <li>Participating in promotions and events</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Prohibited Use</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Unauthorized commercial use</li>
                <li>Reverse engineering or copying</li>
                <li>Attempting to gain unauthorized access</li>
                <li>Using automated systems to access the site</li>
                <li>Violating any laws or regulations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Account Terms */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Account Terms</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Account Creation</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>You must be at least 18 years old to create an account</li>
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for maintaining account security</li>
                <li>One account per person</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Account Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Keep your password secure and confidential</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Keep your contact information up to date</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Purchases and Payments */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <CreditCard className="mr-2 h-5 w-5" />
            Purchases and Payments
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Order Processing</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Prices are subject to change without notice</li>
                <li>All prices are in USD unless otherwise stated</li>
                <li>We reserve the right to limit quantities</li>
                <li>Orders are processed within 1-2 business days</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Payment Terms</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Payment is due at the time of order placement</li>
                <li>We accept major credit cards and PayPal</li>
                <li>All transactions are processed securely through Stripe</li>
                <li>Sales tax will be added where applicable</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Product Information */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Product Information</h2>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, or error-free.
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Disclaimer</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Colors may appear differently on different monitors. Actual product colors may vary from what appears on your screen.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Disclaimer
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, Dap Market:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
            <li>Excludes all representations and warranties relating to this website and its contents</li>
            <li>Does not guarantee the website will be constantly available or available at all</li>
            <li>Is not responsible for any loss or damage that may arise from your use of this website</li>
          </ul>
        </section>

        {/* Limitation of Liability */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Limitation of Liability</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            In no event shall Dap Market, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, punitive, consequential, or special damages.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Our total liability shall not exceed the amount you paid for the product or service in question.
          </p>
        </section>

        {/* Governing Law */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Governing Law</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            These terms and conditions are governed by and construed in accordance with the laws of New York, United States.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Any disputes relating to these terms and conditions will be subject to the jurisdiction of the courts of New York.
          </p>
        </section>

        {/* Changes to Terms */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Changes to Terms</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We reserve the right to update these terms at any time. Changes will be effective immediately upon posting on this page.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Your continued use of the service after any changes constitutes your acceptance of the new terms.
          </p>
        </section>

        {/* Contact Information */}
        <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <p><strong>Email:</strong> legal@dapmarket.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Commerce Street, New York, NY 10001</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;
