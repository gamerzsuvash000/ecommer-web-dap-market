
import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit2, Save, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, New York, NY 10001',
    bio: 'Passionate about technology and online shopping. Love discovering new products and great deals.',
    birthDate: '1990-01-01'
  });

  const [editData, setEditData] = useState(profileData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(profileData);
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const recentOrders = [
    { id: '1', date: '2024-01-15', total: '$89.99', status: 'Delivered' },
    { id: '2', date: '2024-01-10', total: '$156.50', status: 'Shipped' },
    { id: '3', date: '2024-01-05', total: '$43.25', status: 'Processing' }
  ];

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Please log in to view your profile
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-6">
        {/* Profile Header */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg" alt={profileData.name} />
                  <AvatarFallback className="text-2xl">
                    {profileData.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl">{profileData.name}</CardTitle>
                  <CardDescription>{profileData.email}</CardDescription>
                </div>
              </div>
              <Button
                variant={isEditing ? "destructive" : "outline"}
                onClick={isEditing ? handleCancel : handleEdit}
              >
                {isEditing ? <X className="h-4 w-4 mr-2" /> : <Edit2 className="h-4 w-4 mr-2" />}
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </Button>
            </div>
          </CardHeader>
        </Card>

        <Tabs defaultValue="personal" className="space-y-4">
          <TabsList>
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="orders">Order History</TabsTrigger>
            <TabsTrigger value="settings">Account Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Manage your personal details and contact information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    {isEditing ? (
                      <Input
                        value={editData.name}
                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                      />
                    ) : (
                      <div className="flex items-center space-x-2 p-2 border rounded-md">
                        <User className="h-4 w-4 text-gray-500" />
                        <span>{profileData.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    {isEditing ? (
                      <Input
                        type="email"
                        value={editData.email}
                        onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                      />
                    ) : (
                      <div className="flex items-center space-x-2 p-2 border rounded-md">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span>{profileData.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone
                    </label>
                    {isEditing ? (
                      <Input
                        value={editData.phone}
                        onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                      />
                    ) : (
                      <div className="flex items-center space-x-2 p-2 border rounded-md">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span>{profileData.phone}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Birth Date
                    </label>
                    {isEditing ? (
                      <Input
                        type="date"
                        value={editData.birthDate}
                        onChange={(e) => setEditData({ ...editData, birthDate: e.target.value })}
                      />
                    ) : (
                      <div className="flex items-center space-x-2 p-2 border rounded-md">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span>{new Date(profileData.birthDate).toLocaleDateString()}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Address
                  </label>
                  {isEditing ? (
                    <Input
                      value={editData.address}
                      onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                    />
                  ) : (
                    <div className="flex items-center space-x-2 p-2 border rounded-md">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{profileData.address}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Bio
                  </label>
                  {isEditing ? (
                    <Textarea
                      value={editData.bio}
                      onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                      rows={3}
                    />
                  ) : (
                    <p className="p-2 border rounded-md text-gray-700 dark:text-gray-300">
                      {profileData.bio}
                    </p>
                  )}
                </div>

                {isEditing && (
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={handleCancel}>
                      Cancel
                    </Button>
                    <Button onClick={handleSave}>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>
                  View your recent orders and track their status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Order #{order.id}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{order.total}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          order.status === 'Delivered' 
                            ? 'bg-green-100 text-green-800' 
                            : order.status === 'Shipped'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account preferences and security
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Change Password</h4>
                  <Button variant="outline">Update Password</Button>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Email Notifications</h4>
                  <Button variant="outline">Notification Preferences</Button>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Delete Account</h4>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
