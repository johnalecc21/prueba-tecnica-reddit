import React from 'react';
import { MessageSquare, ArrowBigUp, ArrowBigDown, Share2, Award, Bookmark, Flag } from 'lucide-react';

const PostContent = () => {
  return (
    <div className="bg-white rounded-md mb-4 overflow-hidden">
      {/* Vote and Content Container */}
      <div className="flex">
        {/* Vote Section */}
        <div className="bg-[#F8F9FA] p-2 flex flex-col items-center">
          <button className="p-1 hover:bg-gray-200 rounded">
            <ArrowBigUp className="w-6 h-6 text-gray-400" />
          </button>
          <span className="font-bold text-sm my-1">14.2k</span>
          <button className="p-1 hover:bg-gray-200 rounded">
            <ArrowBigDown className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Main Content */}
        <div className="p-4 flex-1">
          {/* Post Header */}
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <img 
              src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=50&h=50&fit=crop" 
              alt="Subreddit"
              className="w-5 h-5 rounded-full mr-2"
            />
            <span className="font-bold text-black mr-2">r/programming</span>
            <span>Posted by u/developer123 • 5 hours ago</span>
          </div>

          {/* Post Title */}
          <h2 className="text-xl font-bold mb-4">
            Understanding React Hooks: A Comprehensive Guide
          </h2>

          {/* Post Text Content */}
          <div className="text-sm mb-4">
            <p>
              React Hooks have revolutionized how we write React components. In this guide, we'll explore the most commonly used hooks and their practical applications in modern web development.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 text-gray-500">
            <button className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded">
              <MessageSquare className="w-4 h-4" />
              <span className="text-xs">238 Comments</span>
            </button>
            <button className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded">
              <Share2 className="w-4 h-4" />
              <span className="text-xs">Share</span>
            </button>
            <button className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded">
              <Award className="w-4 h-4" />
              <span className="text-xs">Award</span>
            </button>
            <button className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded">
              <Bookmark className="w-4 h-4" />
              <span className="text-xs">Save</span>
            </button>
            <button className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded">
              <Flag className="w-4 h-4" />
              <span className="text-xs">Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostContent;