import { useState, FormEvent } from 'react';

const ContactPanel = () => {
  const [formData, setFormData] = useState({ subject: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:devanshg.iitm@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
  };

  return (
    <div className="h-full flex flex-col font-mono max-w-2xl mx-auto">
       <div className="border-b border-bloomberg-border pb-6 mb-6 text-center">
          <h1 className="text-3xl font-bold text-bloomberg-orange mb-2">CONTACT ME</h1>
          <p className="text-gray-400">Direct Communication Line</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
             <h3 className="text-bloomberg-orange font-bold border-b border-bloomberg-border mb-2">PRIMARY CONTACT</h3>
             <div className="space-y-2 text-sm">
                <div>Email: <span className="text-bloomberg-text">devanshg.iitm@gmail.com</span></div>
                <div>Phone: <span className="text-bloomberg-text">+91 9910329901</span></div>
             </div>
          </div>
          <div>
             <h3 className="text-bloomberg-orange font-bold border-b border-bloomberg-border mb-2">PROFESSIONAL NETWORKS</h3>
             <div className="space-y-2 text-sm">
                <div>LinkedIn: <a href="https://www.linkedin.com/in/devansh-garg-92888a241" className="text-bloomberg-cyan hover:underline">devansh-garg-92888a241</a></div>
                <div>GitHub: <a href="https://github.com/ThePredictiveDev" className="text-bloomberg-cyan hover:underline">ThePredictiveDev</a></div>
             </div>
          </div>
       </div>

       <div className="bg-white/5 border border-bloomberg-border p-6">
          <h3 className="text-bloomberg-orange font-bold mb-4">SEND MESSAGE</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
             <div className="flex flex-col gap-1">
                <label className="text-xs text-bloomberg-orange">FROM</label>
                <input disabled value="[Your Email]" className="bg-black border border-bloomberg-border px-2 py-1 text-gray-500 cursor-not-allowed" />
             </div>
             
             <div className="flex flex-col gap-1">
                <label className="text-xs text-bloomberg-orange">SUBJECT</label>
                <input 
                  required
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                  className="bg-black border border-bloomberg-border px-2 py-1 text-white focus:border-bloomberg-orange outline-none"
                  placeholder="ENTER SUBJECT..."
                />
             </div>

             <div className="flex flex-col gap-1">
                <label className="text-xs text-bloomberg-orange">MESSAGE</label>
                <textarea 
                  required
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="bg-black border border-bloomberg-border px-2 py-1 text-white focus:border-bloomberg-orange outline-none h-32 resize-none"
                  placeholder="ENTER MESSAGE..."
                />
             </div>

             <button type="submit" className="bg-bloomberg-orange text-black font-bold py-2 mt-2 hover:bg-bloomberg-orangeBright transition-colors">
                SEND EMAIL &lt;GO&gt;
             </button>
          </form>
       </div>
    </div>
  );
};

export default ContactPanel;
