
import React, { useState } from 'react';
import { Search, HelpCircle, Package, CreditCard, Truck, RotateCcw, Shield, User } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle },
    { id: 'orders', name: 'Orders & Shipping', icon: Package },
    { id: 'payments', name: 'Payments & Billing', icon: CreditCard },
    { id: 'returns', name: 'Returns & Exchanges', icon: RotateCcw },
    { id: 'account', name: 'Account & Profile', icon: User },
    { id: 'security', name: 'Security & Privacy', icon: Shield }
  ];

  const faqs = [
    {
      category: 'orders',
      question: 'How can I track my order?',
      answer: 'You can track your order by logging into your account and visiting the "Orders" section. You\'ll also receive a tracking number via email once your order ships. Use this number on our tracking page or the carrier\'s website for real-time updates.'
    },
    {
      category: 'orders',
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 5-7 business days, Express shipping takes 2-3 business days, and Overnight shipping delivers the next business day. International shipping varies by destination, typically 7-14 business days.'
    },
    {
      category: 'orders',
      question: 'Can I change or cancel my order?',
      answer: 'Orders can be modified or cancelled within 1 hour of placement. After this time, please contact customer support immediately. If your order has already shipped, you may need to wait to return the items.'
    },
    {
      category: 'returns',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Items must be in original condition with tags attached. Some items like personalized products, perishables, and intimate items cannot be returned. See our Returns page for full details.'
    },
    {
      category: 'returns',
      question: 'How do I return an item?',
      answer: 'To return an item, log into your account, go to Order History, and select "Return Item" next to the product. Print the prepaid return label and drop off at any authorized location. Refunds are processed within 5-7 business days after we receive your return.'
    },
    {
      category: 'returns',
      question: 'Who pays for return shipping?',
      answer: 'We provide free return shipping for defective items or our errors. For other returns, a $5.99 return shipping fee will be deducted from your refund. Premium members enjoy free returns on all eligible items.'
    },
    {
      category: 'payments',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. We also offer buy-now-pay-later options through Klarna and Afterpay.'
    },
    {
      category: 'payments',
      question: 'Is it safe to shop on your website?',
      answer: 'Yes, your security is our top priority. We use 256-bit SSL encryption for all transactions, and we never store your complete credit card information. Our site is PCI DSS compliant and regularly audited for security.'
    },
    {
      category: 'payments',
      question: 'When will I be charged for my order?',
      answer: 'Your payment method is charged when your order is confirmed and processed, typically within a few minutes of placing your order. For pre-orders, you\'ll be charged when the item becomes available and ships.'
    },
    {
      category: 'account',
      question: 'How do I create an account?',
      answer: 'Click "Sign Up" in the top right corner and provide your email address and a secure password. You can also sign up with your Google or Facebook account for faster registration.'
    },
    {
      category: 'account',
      question: 'I forgot my password. How can I reset it?',
      answer: 'Click "Forgot Password" on the login page and enter your email address. We\'ll send you a secure link to reset your password. The link expires in 24 hours for security.'
    },
    {
      category: 'account',
      question: 'How do I update my profile information?',
      answer: 'Log into your account and go to "Profile" or "Account Settings". You can update your name, email, phone number, addresses, and communication preferences. Remember to save your changes.'
    },
    {
      category: 'security',
      question: 'How do you protect my personal information?',
      answer: 'We use industry-standard security measures including SSL encryption, secure servers, and strict access controls. We never sell your personal information to third parties. Read our Privacy Policy for complete details.'
    },
    {
      category: 'security',
      question: 'What should I do if I suspect fraudulent activity?',
      answer: 'Contact us immediately at security@dapmarket.com or call our security hotline. Change your password right away and monitor your accounts. We\'ll investigate and take appropriate action to protect you.'
    },
    {
      category: 'orders',
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to over 100 countries worldwide. International shipping costs and delivery times vary by destination. Customs fees and import duties are the responsibility of the recipient.'
    },
    {
      category: 'payments',
      question: 'Do you offer price matching?',
      answer: 'We offer price matching on identical items from authorized retailers. The item must be in stock and the price must be verifiable. Contact customer service with the competitor\'s link for review.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Find answers to common questions about shopping, shipping, returns, and more
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6 text-center">
          <Badge variant="secondary">
            {filteredFaqs.length} question{filteredFaqs.length !== 1 ? 's' : ''} found
          </Badge>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredFaqs.map((faq, index) => (
            <Card key={index}>
              <details className="group">
                <summary className="cursor-pointer">
                  <CardHeader className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group-open:bg-gray-50 dark:group-open:bg-gray-800">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-medium text-left">
                        {faq.question}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">
                          {categories.find(cat => cat.id === faq.category)?.name}
                        </Badge>
                        <HelpCircle className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform" />
                      </div>
                    </div>
                  </CardHeader>
                </summary>
                <CardContent className="pt-0">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </details>
            </Card>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-20">
            <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">
              No FAQs found matching your search
            </p>
            <p className="text-gray-400 dark:text-gray-500">
              Try adjusting your search terms or browse all categories
            </p>
          </div>
        )}

        {/* Contact Support */}
        <Card className="mt-12 max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle>Still need help?</CardTitle>
            <p className="text-gray-600 dark:text-gray-300">
              Can't find what you're looking for? Our support team is here to help.
            </p>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/support"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Live Chat
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
