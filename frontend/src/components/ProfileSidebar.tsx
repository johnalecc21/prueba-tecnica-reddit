import React from 'react';
import { Users, Cake } from 'lucide-react';

const ProfileSidebar = () => {
  return (
    <div className="bg-white rounded-md p-4 mb-4">
      <div className="flex items-center gap-4 pb-4 border-b">
        <img
          src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=50&h=50&fit=crop"
          alt="Subreddit"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="font-bold">r/programming</h2>
          <p className="text-sm text-gray-500">r/programming</p>
        </div>
      </div>

      <div className="py-4 border-b">
        <p className="text-sm">Your home for programming discussions and news.</p>
      </div>

      <div className="py-4 space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <Users className="w-4 h-4" />
          <span>4.2m members</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span>8.4k online</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Cake className="w-4 h-4" />
          <span>Created Jan 25, 2006</span>
        </div>
      </div>

      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-1.5 text-sm font-bold mt-2">
        Join
      </button>
    </div>
  );
};

export default ProfileSidebar;