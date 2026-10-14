import React, { useState } from 'react';
import { Building2, Upload, Palette, Globe, Save, CheckCircle2 } from 'lucide-react';

function ClientSettings() {
  const [saved, setSaved] = useState(false);
  const [branding, setBranding] = useState({
    institutionName: 'Apex International Institute',
    tagline: 'Excellence in Education & Innovation',
    primaryColor: '#3B5998',
    darkColor: '#2D4373',
    domain: 'ims.apex-edu.com',
    supportEmail: 'contact@apex-edu.com',
    theme: 'Light'
  });

  const handleChange = (e) => {
    setBranding({ ...branding, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header Banner */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Client Branding & System Settings</h1>
          <p className="text-sm text-gray-500 mt-1">Customize your institution's identity, portal colors, and domain configurations.</p>
        </div>
        {saved && (
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg text-sm font-medium border border-emerald-200">
            <CheckCircle2 size={18} /> Settings Saved!
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Institution Info */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2 border-b pb-3 border-gray-100">
            <Building2 className="text-[#3B5998]" size={20} /> Institution Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Institution Name</label>
              <input 
                type="text" 
                name="institutionName" 
                value={branding.institutionName} 
                onChange={handleChange}
                className="w-full px-3.5 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B5998] focus:outline-none text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tagline / Motto</label>
              <input 
                type="text" 
                name="tagline" 
                value={branding.tagline} 
                onChange={handleChange}
                className="w-full px-3.5 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B5998] focus:outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Institution Logo</label>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#3B5998] transition-colors cursor-pointer bg-gray-50/50">
              <Upload className="mx-auto text-gray-400 mb-2" size={28} />
              <p className="text-sm font-medium text-gray-700">Click to upload or drag logo file here</p>
              <p className="text-xs text-gray-400 mt-1">Supports PNG, JPG, SVG up to 5MB</p>
            </div>
          </div>
        </div>

        {/* Branding & Theme Colors */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2 border-b pb-3 border-gray-100">
            <Palette className="text-[#3B5998]" size={20} /> Theme & Color Palette
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Primary Color</label>
              <div className="flex gap-2 items-center">
                <input 
                  type="color" 
                  name="primaryColor" 
                  value={branding.primaryColor} 
                  onChange={handleChange}
                  className="w-10 h-10 rounded cursor-pointer border-0"
                />
                <input 
                  type="text" 
                  name="primaryColor" 
                  value={branding.primaryColor} 
                  onChange={handleChange}
                  className="flex-1 px-3.5 py-2 border border-gray-300 rounded-lg text-sm font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sidebar Color (Dark Accent)</label>
              <div className="flex gap-2 items-center">
                <input 
                  type="color" 
                  name="darkColor" 
                  value={branding.darkColor} 
                  onChange={handleChange}
                  className="w-10 h-10 rounded cursor-pointer border-0"
                />
                <input 
                  type="text" 
                  name="darkColor" 
                  value={branding.darkColor} 
                  onChange={handleChange}
                  className="flex-1 px-3.5 py-2 border border-gray-300 rounded-lg text-sm font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Domain & Portal Config */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2 border-b pb-3 border-gray-100">
            <Globe className="text-[#3B5998]" size={20} /> Domain & Contact Info
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Custom Subdomain</label>
              <input 
                type="text" 
                name="domain" 
                value={branding.domain} 
                onChange={handleChange}
                className="w-full px-3.5 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B5998] focus:outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Support Email</label>
              <input 
                type="email" 
                name="supportEmail" 
                value={branding.supportEmail} 
                onChange={handleChange}
                className="w-full px-3.5 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3B5998] focus:outline-none text-sm"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button 
            type="submit" 
            className="flex items-center gap-2 bg-[#2D4373] hover:bg-[#3B5998] text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-md"
          >
            <Save size={18} /> Save Branding Preferences
          </button>
        </div>
      </form>
    </div>
  );
}

export default ClientSettings;