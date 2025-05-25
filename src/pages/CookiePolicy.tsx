
import React from 'react';
import { Shield, Cookie, Settings, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Cookie className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learn about how we use cookies and similar technologies to provide you with a better experience
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Last updated: January 15, 2024
          </p>
        </div>

        <div className="space-y-6">
          {/* What are Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Cookie className="h-5 w-5 text-blue-600" />
                <span>What are Cookies?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We use cookies to enhance your browsing experience, analyze site traffic, personalize content, 
                and provide social media features.
              </p>
            </CardContent>
          </Card>

          {/* Types of Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-blue-600" />
                <span>Types of Cookies We Use</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Essential Cookies</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    These cookies are necessary for the website to function and cannot be switched off. 
                    They are usually set in response to actions you take such as logging in or filling forms.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Performance Cookies</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Functional Cookies</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    These cookies enable enhanced functionality and personalization, such as remembering 
                    your preferences and settings.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Marketing Cookies</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    These cookies are used to deliver advertisements more relevant to you and your interests. 
                    They may also be used to limit the number of times you see an advertisement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-blue-600" />
                <span>Third-Party Cookies</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                We may also use third-party cookies from trusted partners to help us:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
                <li>Analyze website traffic and user behavior (Google Analytics)</li>
                <li>Provide social media features (Facebook, Twitter)</li>
                <li>Deliver targeted advertising</li>
                <li>Process payments securely</li>
                <li>Enable customer support features</li>
              </ul>
            </CardContent>
          </Card>

          {/* Managing Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span>Managing Your Cookie Preferences</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                You have the right to decide whether to accept or reject cookies. You can manage your cookie 
                preferences in several ways:
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Browser Settings</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Most web browsers allow you to control cookies through their settings. You can set your 
                    browser to refuse cookies or delete certain cookies.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cookie Banner</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    When you first visit our website, you'll see a cookie banner where you can choose to 
                    accept or decline non-essential cookies.
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button>Manage Cookie Preferences</Button>
                <Button variant="outline">Browser Settings Guide</Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Questions About Our Cookie Policy?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Email:</strong> privacy@dapmarket.com
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Address:</strong> 123 Privacy Street, Data City, DC 12345
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Updates to Policy */}
          <Card>
            <CardHeader>
              <CardTitle>Updates to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for 
                other operational, legal, or regulatory reasons. We will notify you of any significant changes 
                by posting the new policy on this page with an updated "Last updated" date.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
