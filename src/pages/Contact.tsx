
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'support@dapmarket.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Business Ave, Suite 100',
      description: 'New York, NY 10001'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 8am - 5pm',
      description: 'Saturday: 9am - 3pm'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Reach out to us through any of these channels. We're here to help!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <info.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {info.title}
                        </h3>
                        <p className="text-gray-900 dark:text-white font-medium">
                          {info.details}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Quick Help
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  Live Chat Support
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Help Center
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Order Tracking
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide as much detail as possible..."
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <details className="border border-gray-200 dark:border-gray-700 rounded-lg">
                    <summary className="p-4 cursor-pointer font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                      How quickly do you respond to messages?
                    </summary>
                    <div className="p-4 pt-0 text-gray-600 dark:text-gray-300">
                      We typically respond to all messages within 24 hours during business days. For urgent matters, please call our support line.
                    </div>
                  </details>

                  <details className="border border-gray-200 dark:border-gray-700 rounded-lg">
                    <summary className="p-4 cursor-pointer font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                      Can I schedule a call with your team?
                    </summary>
                    <div className="p-4 pt-0 text-gray-600 dark:text-gray-300">
                      Yes! For complex inquiries or business partnerships, we can schedule a call. Please mention this in your message and we'll coordinate a time.
                    </div>
                  </details>

                  <details className="border border-gray-200 dark:border-gray-700 rounded-lg">
                    <summary className="p-4 cursor-pointer font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                      Do you offer phone support?
                    </summary>
                    <div className="p-4 pt-0 text-gray-600 dark:text-gray-300">
                      Yes, our phone support is available Monday through Friday, 8am to 5pm EST. You can reach us at +1 (555) 123-4567.
                    </div>
                  </details>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
