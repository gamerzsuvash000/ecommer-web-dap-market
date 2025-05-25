import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit2, Save, X, Camera } from 'lucide-react';
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
  const [selectedAvatar, setSelectedAvatar] = useState('photo-1649972904349-6e44c42644a7');
  
  const avatarOptions = [
    'photo-1649972904349-6e44c42644a7',
    'photo-1581091226825-a6a2a5aee158', 
    'photo-1581092795360-fd1ca04f0952',
    'photo-1488590528505-98d2b5aba04b',
    'photo-1518005020951-eccb494ad742'
  ];

  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, New York, NY 10001',
    bio: "Passionate about technology and online shopping. Love discovering new products and great deals.",
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {/* Profile Header */}
          <Card className="relative overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <CardHeader className="relative -mt-16">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-800">
                      <AvatarImage 
                        src={`https://images.unsplash.com/${selectedAvatar}?w=200&h=200&fit=crop&crop=face`} 
                        alt={profileData.name} 
                      />
                      <AvatarFallback className="text-2xl bg-white dark:bg-gray-800">
                        {profileData.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <div className="absolute -bottom-2 -right-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="h-8 w-8 rounded-full p-0"
                        >
                          <Camera className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                  <div className="mt-16">
                    <CardTitle className="text-2xl text-white dark:text-white">{profileData.name}</CardTitle>
                    <CardDescription className="text-blue-100">{profileData.email}</CardDescription>
                  </div>
                </div>
                <div className="mt-16">
                  <Button
                    variant={isEditing ? "destructive" : "secondary"}
                    onClick={isEditing ? handleCancel : handleEdit}
                  >
                    {isEditing ? <X className="h-4 w-4 mr-2" /> : <Edit2 className="h-4 w-4 mr-2" />}
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Avatar Selection */}
          {isEditing && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Choose Profile Picture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {avatarOptions.map((avatar) => (
                    <button
                      key={avatar}
                      onClick={() => setSelectedAvatar(avatar)}
                      className={`flex-shrink-0 ${
                        selectedAvatar === avatar ? 'ring-2 ring-blue-500' : ''
                      } rounded-full overflow-hidden`}
                    >
                      <Avatar className="h-16 w-16">
                        <AvatarImage 
                          src={`https://images.unsplash.com/${avatar}?w=100&h=100&fit=crop&crop=face`} 
                          alt="Avatar option" 
                        />
                      </Avatar>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

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
    </div>
  );
};

export default Profile;
