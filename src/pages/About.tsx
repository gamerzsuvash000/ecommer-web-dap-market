
import React from 'react';
import { Target, Eye, Award, Users, Truck, Shield, Heart, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do, ensuring exceptional service and satisfaction.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and transactions are protected with industry-leading security measures.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Every product in our catalog meets our strict quality standards and guidelines.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'We serve customers worldwide with reliable shipping and local support.'
    }
  ];

  const stats = [
    { number: '100K+', label: 'Happy Customers' },
    { number: '50K+', label: 'Products Sold' },
    { number: '99.5%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Customer Support' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: 'With over 15 years of e-commerce experience, Sarah leads our vision for exceptional customer experiences.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      description: 'Michael ensures our platform runs smoothly and securely, bringing innovation to every customer interaction.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Customer Success',
      description: 'Emily leads our customer support team, ensuring every customer receives the help they need.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Dap Market
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              We're on a mission to make online shopping simple, secure, and enjoyable for everyone
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2020, Dap Market started as a small team with a big vision: to create an online marketplace that truly serves its customers. We believed that shopping online should be as personal and trustworthy as shopping in your favorite local store.
                </p>
                <p>
                  Today, we've grown into a thriving platform that connects customers with high-quality products from trusted sellers around the world. Our commitment to excellence, security, and customer satisfaction remains as strong as ever.
                </p>
                <p>
                  Every day, we work to improve our platform, expand our product selection, and enhance the shopping experience for our growing community of customers.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Target className="h-6 w-6 mr-3 text-blue-500" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  To provide a seamless, secure, and personalized shopping experience that connects customers with the products they love, while supporting sellers in growing their businesses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Eye className="h-6 w-6 mr-3 text-purple-500" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  To become the world's most trusted and customer-centric online marketplace, where quality, convenience, and community come together.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve our customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full w-fit">
                    <value.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Dap Market?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-green-100 dark:bg-green-900 rounded-full w-fit">
                <Truck className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Fast & Reliable Shipping
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Quick delivery times with tracking and insurance on all orders
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-purple-100 dark:bg-purple-900 rounded-full w-fit">
                <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Secure Shopping
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your personal and payment information is always protected
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-full w-fit">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                24/7 Customer Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our friendly support team is here to help you anytime
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The passionate people behind Dap Market who work every day to serve you better
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index}>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {member.role}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
