import { useState, useRef } from "react";

export default function Profile() {
  const [avatar, setAvatar] = useState("https://allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg");
  const [form, setForm] = useState({ name: "User Name", email: "user@email.com", phone: "", address: "", bio: "" });
  const [saved, setSaved] = useState(false);
  const fileRef = useRef(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSaved(false);
  }

  function handleAvatar(e) {
    const file = e.target.files[0];
    if (file) setAvatar(URL.createObjectURL(file));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSaved(true);
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-28 pb-16 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-green-600 font-semibold mb-1">Account</p>
        <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-8">My Profile</h1>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-green-500/30 cursor-pointer" onClick={() => fileRef.current.click()}>
              <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <button type="button" onClick={() => fileRef.current.click()} className="text-sm font-semibold text-green-600 hover:text-green-700 transition">Change Photo</button>
              <p className="text-xs text-gray-400 mt-1">JPG, PNG — max 2MB</p>
            </div>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleAvatar} />
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[["name", "Full Name", "text", ""], ["email", "Email", "email", ""], ["phone", "Phone", "text", "+1 234 567 890"], ["address", "Address", "text", "City, Country"]].map(([name, label, type, placeholder]) => (
                <div key={name}>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">{label}</label>
                  <input name={name} type={type} value={form[name]} onChange={handleChange} placeholder={placeholder}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
              ))}
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Bio</label>
              <textarea name="bio" value={form.bio} onChange={handleChange} rows={3} placeholder="Tell us a little about yourself..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" />
            </div>
            <div className="flex items-center gap-4 pt-2">
              <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-2.5 rounded-full transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/30">Save Changes</button>
              {saved && <span className="text-sm text-green-600 font-semibold">✓ Saved successfully</span>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
