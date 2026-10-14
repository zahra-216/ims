import React from 'react';
import { BookOpen, Video, FileText, CheckCircle, PlayCircle, Clock } from 'lucide-react';

const courses = [
  { id: 1, title: 'Advanced Web Development with React', instructor: 'Dr. Rahul Sharma', progress: 75, totalLessons: 24, completedLessons: 18, imageColor: 'bg-blue-600' },
  { id: 2, title: 'Database Management Systems & SQL', instructor: 'Prof. Ananya Sen', progress: 40, totalLessons: 15, completedLessons: 6, imageColor: 'bg-purple-600' },
  { id: 3, title: 'UI/UX Design Principles & Figma', instructor: 'Sarah Jenkins', progress: 90, totalLessons: 20, completedLessons: 18, imageColor: 'bg-emerald-600' },
];

const upcomingLiveClasses = [
  { id: 1, topic: 'React State Management Masterclass', subject: 'Web Dev', time: 'Today, 04:00 PM', instructor: 'Dr. Rahul Sharma' },
  { id: 2, topic: 'SQL Query Optimization', subject: 'DBMS', time: 'Tomorrow, 10:30 AM', instructor: 'Prof. Ananya Sen' },
];

function LmsModule() {
  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-[#2D4373] text-white p-6 rounded-xl shadow-md flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">LMS - Online Learning Portal</h1>
          <p className="text-gray-200 mt-1 text-sm">Access course materials, live lectures, and track academic progress.</p>
        </div>
        <button className="bg-[#3B5998] hover:bg-opacity-80 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-white/20 flex items-center gap-2">
          <Video size={16} /> Join Live Class
        </button>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between">
            <div>
              <div className={`h-28 ${course.imageColor} p-4 flex items-end justify-between text-white`}>
                <span className="text-xs bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full font-semibold">Active Course</span>
                <BookOpen size={24} className="opacity-80" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-800 text-lg leading-snug">{course.title}</h3>
                <p className="text-xs text-gray-500 mt-1">Instructor: {course.instructor}</p>
                
                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-[#3B5998]">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#3B5998] h-full rounded-full transition-all duration-300" style={{ width: `${course.progress}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-5 py-3.5 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-xs font-medium text-gray-600">
              <span className="flex items-center gap-1"><CheckCircle size={14} className="text-emerald-500" /> {course.completedLessons}/{course.totalLessons} Lessons</span>
              <button className="text-[#3B5998] font-bold hover:underline flex items-center gap-1">Continue <PlayCircle size={14} /></button>
            </div>
          </div>
        ))}
      </div>

      {/* Live Sessions & Resources Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Classes */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Video className="text-[#3B5998]" size={20} /> Scheduled Live Lectures
          </h2>
          <div className="space-y-3">
            {upcomingLiveClasses.map((session) => (
              <div key={session.id} className="flex justify-between items-center p-4 rounded-xl border border-gray-100 bg-gray-50/60 hover:bg-gray-100/80 transition-colors">
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">{session.topic}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{session.subject} • By {session.instructor}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-amber-600 font-semibold mt-1">
                    <Clock size={12} /> {session.time}
                  </span>
                </div>
                <button className="bg-[#2D4373] text-white text-xs px-3.5 py-2 rounded-lg font-medium hover:bg-[#3B5998] transition-colors">
                  Get Link
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Resources / Handouts */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FileText className="text-[#3B5998]" size={20} /> Study Materials
          </h2>
          <div className="space-y-3">
            <div className="p-3 border rounded-lg flex justify-between items-center text-xs">
              <div>
                <p className="font-semibold text-gray-800">React_Hooks_CheatSheet.pdf</p>
                <span className="text-gray-400">PDF • 2.4 MB</span>
              </div>
              <button className="text-[#3B5998] font-bold underline">Download</button>
            </div>
            <div className="p-3 border rounded-lg flex justify-between items-center text-xs">
              <div>
                <p className="font-semibold text-gray-800">Database_Normalization.pptx</p>
                <span className="text-gray-400">PPTX • 5.1 MB</span>
              </div>
              <button className="text-[#3B5998] font-bold underline">Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LmsModule;