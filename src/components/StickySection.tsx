import React from 'react';

export default function StickySection() {
    return (
      <div className="sticky top-0 w-[50%] h-screen overflow-y-auto">
        <div className='p-6'>
          <div className='border-t border-gray-400/50 pt-4 pb-8 text-sm'>
            A Full-Stack Developer with hands-on experience building cloud-native, AI-integrated, and automation-focused tools. Eager to contribute to modern engineering teams driving innovation with platforms like n8n, Zapier, and OpenAI.
          </div>
          <div className='border-t border-gray-400/50 py-3 text-xs'>
            <a href="mailto:shubh12khatri@gmail.com">shubh12khatri@gmail.com</a>
          </div>
          <div className='border-t border-gray-400/50 py-3 text-xs'>
            +91-7089983626
          </div>
          <div className='flex items-start justify-left gap-5 border-t border-gray-400/50 py-2 text-xs'>
            <a href="https://www.linkedin.com/in/shubhkhatri/" target="_blank" rel="noreferrer">
              <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6 mx-2" />
            </a>
            <a href="https://github.com/shubhkhatri" target="_blank" rel="noreferrer">
              <img src="/github.svg" alt="GitHub" className="w-6 h-6 mx-2" />
            </a>
            <a href="https://twitter.com/shubhkhatri" target="_blank" rel="noreferrer">
              <img src="/twitter.svg" alt="Twitter" className="w-6 h-6 mx-2" />
            </a>
          </div>   
        </div>
      </div>
    );
}
