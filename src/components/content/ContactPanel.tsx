import { useState, FormEvent } from 'react';

const ContactPanel = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Formspree form endpoint - This is a public endpoint, safe to expose
  // User needs to replace this with their own Formspree form ID
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzzlbgpd';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject}`,
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="h-full flex flex-col font-mono max-w-2xl mx-auto overflow-y-auto">
       <div className="border-b border-bloomberg-border pb-6 mb-6 text-center">
          <h1 className="text-3xl font-bold text-bloomberg-orange mb-2">CONTACT ME</h1>
          <p className="text-gray-400">Direct Communication Line</p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
             <h3 className="text-bloomberg-orange font-bold border-b border-bloomberg-border mb-2">PRIMARY CONTACT</h3>
             <div className="space-y-2 text-sm">
                <div>Email: <a href="mailto:devanshg.iitm@gmail.com" className="text-bloomberg-cyan hover:underline">devanshg.iitm@gmail.com</a></div>
                <div>Phone: <span className="text-bloomberg-text">+91 9910329901</span></div>
             </div>
          </div>
          <div>
             <h3 className="text-bloomberg-orange font-bold border-b border-bloomberg-border mb-2">PROFESSIONAL NETWORKS</h3>
             <div className="space-y-2 text-sm">
                <div>LinkedIn: <a href="https://www.linkedin.com/in/devansh-garg-92888a241" target="_blank" rel="noopener noreferrer" className="text-bloomberg-cyan hover:underline">devansh-garg-92888a241</a></div>
                <div>GitHub: <a href="https://github.com/ThePredictiveDev" target="_blank" rel="noopener noreferrer" className="text-bloomberg-cyan hover:underline">ThePredictiveDev</a></div>
             </div>
          </div>
       </div>

       {/* Success Message */}
       {status === 'success' && (
         <div className="bg-bloomberg-green/20 border border-bloomberg-green p-4 mb-6 text-center">
           <span className="text-bloomberg-green font-bold">MESSAGE SENT SUCCESSFULLY!</span>
           <p className="text-gray-300 text-sm mt-1">I will get back to you soon.</p>
         </div>
       )}

       {/* Error Message */}
       {status === 'error' && (
         <div className="bg-bloomberg-red/20 border border-bloomberg-red p-4 mb-6 text-center">
           <span className="text-bloomberg-red font-bold">FAILED TO SEND MESSAGE</span>
           <p className="text-gray-300 text-sm mt-1">Please try again or email directly at devanshg.iitm@gmail.com</p>
         </div>
       )}

       <div className="bg-white/5 border border-bloomberg-border p-6">
          <h3 className="text-bloomberg-orange font-bold mb-4">SEND MESSAGE</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                   <label className="text-xs text-bloomberg-orange">YOUR NAME *</label>
                   <input 
                     required
                     type="text"
                     name="name"
                     value={formData.name}
                     onChange={e => setFormData({...formData, name: e.target.value})}
                     className="bg-black border border-bloomberg-border px-2 py-1 text-white focus:border-bloomberg-orange outline-none"
                     placeholder="ENTER YOUR NAME..."
                     disabled={status === 'sending'}
                   />
                </div>
                <div className="flex flex-col gap-1">
                   <label className="text-xs text-bloomberg-orange">YOUR EMAIL *</label>
                   <input 
                     required
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={e => setFormData({...formData, email: e.target.value})}
                     className="bg-black border border-bloomberg-border px-2 py-1 text-white focus:border-bloomberg-orange outline-none"
                     placeholder="ENTER YOUR EMAIL..."
                     disabled={status === 'sending'}
                   />
                </div>
             </div>
             
             <div className="flex flex-col gap-1">
                <label className="text-xs text-bloomberg-orange">SUBJECT *</label>
                <input 
                  required
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                  className="bg-black border border-bloomberg-border px-2 py-1 text-white focus:border-bloomberg-orange outline-none"
                  placeholder="ENTER SUBJECT..."
                  disabled={status === 'sending'}
                />
             </div>

             <div className="flex flex-col gap-1">
                <label className="text-xs text-bloomberg-orange">MESSAGE *</label>
                <textarea 
                  required
                  name="message"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="bg-black border border-bloomberg-border px-2 py-1 text-white focus:border-bloomberg-orange outline-none h-32 resize-none"
                  placeholder="ENTER MESSAGE..."
                  disabled={status === 'sending'}
                />
             </div>

             <button 
               type="submit" 
               className={`font-bold py-2 mt-2 transition-colors ${
                 status === 'sending' 
                   ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                   : 'bg-bloomberg-orange text-black hover:bg-bloomberg-orangeBright'
               }`}
               disabled={status === 'sending'}
             >
                {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE <GO>'}
             </button>
          </form>
       </div>

       {/* Direct Email Fallback */}
       <div className="mt-6 text-center text-sm text-gray-500">
          <p>Or email directly: <a href="mailto:devanshg.iitm@gmail.com" className="text-bloomberg-orange hover:underline">devanshg.iitm@gmail.com</a></p>
       </div>
    </div>
  );
};

export default ContactPanel;


