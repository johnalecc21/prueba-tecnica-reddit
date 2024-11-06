import React, { useState } from 'react';
import PostContent from './components/PostContent';
import CommentSection from './components/CommentSection';
import RulesSidebar from './components/RulesSidebar';
import LanguageSelector from './components/LanguageSelector';
import ProfileSidebar from './components/ProfileSidebar';

function App() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  return (
    <div className="min-h-screen bg-[#DAE0E6]">
      <div className="max-w-6xl mx-auto py-6 px-4">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <PostContent />
            <CommentSection />
          </div>
          
          {/* Sidebar */}
          <div className="w-80 flex-shrink-0">
            <LanguageSelector 
              currentLanguage={language} 
              onLanguageChange={setLanguage} 
            />
            <ProfileSidebar />
            <RulesSidebar language={language} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;