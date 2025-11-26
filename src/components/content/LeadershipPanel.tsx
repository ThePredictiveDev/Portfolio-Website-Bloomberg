const LeadershipPanel = () => {
  return (
    <div className="h-full overflow-y-auto text-bloomberg-text font-mono text-sm">
      <h2 className="text-lg font-bold text-bloomberg-orange mb-4 border-b border-bloomberg-border pb-1">⚡ LEADERSHIP & INITIATIVES</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* Item 1 */}
         <div className="group hover:bg-white/5 p-3 rounded transition-colors border border-transparent hover:border-gray-800">
             <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-bloomberg-orange font-bold text-base">National Service Scheme (NSS) HP</h3>
                <span className="text-white font-bold text-xs">NOV 2023 - MAR 2025</span>
             </div>
             <div className="text-white mb-2 font-bold">COORDINATOR</div>
             <p className="text-gray-300 leading-relaxed mb-2">
               Led 100+ volunteers for social service activities. Raised ₹80,000+ in donations. Recruited 50+ volunteers for underprivileged education.
             </p>
         </div>

         {/* Item 2 */}
         <div className="group hover:bg-white/5 p-3 rounded transition-colors border border-transparent hover:border-gray-800">
             <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-bloomberg-orange font-bold text-base">Kullhad Economy Festival</h3>
                <span className="text-white font-bold text-xs">AUG 2025 - OCT 2025</span>
             </div>
             <div className="text-white mb-2 font-bold">HEAD OF OPS & STRATEGY</div>
             <p className="text-gray-300 leading-relaxed mb-2">
               Managed 200+ volunteers. Developed strategic relations with top bureaucrats. Footfall of 1500+, helping local business ecosystem.
             </p>
         </div>

         {/* Item 3 */}
         <div className="group hover:bg-white/5 p-3 rounded transition-colors border border-transparent hover:border-gray-800">
             <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-bloomberg-orange font-bold text-base">Kamand Bioengineering Group</h3>
                <span className="text-white font-bold text-xs">AUG 2025 - PRESENT</span>
             </div>
             <div className="text-white mb-2 font-bold">CO-COORDINATOR</div>
             <p className="text-gray-300 leading-relaxed mb-2">
               Leading 30+ volunteers. Pioneered 'Advanced AI in Biology' session (110+ students). Leading cutting-edge research at intersection of biosignals and DL.
             </p>
         </div>

         {/* Item 4 */}
         <div className="group hover:bg-white/5 p-3 rounded transition-colors border border-transparent hover:border-gray-800">
             <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-bloomberg-orange font-bold text-base">Exodia IIT Mandi</h3>
                <span className="text-white font-bold text-xs">NOV 2024 - MAR 2025</span>
             </div>
             <div className="text-white mb-2 font-bold">HEAD OF SECURITY</div>
             <p className="text-gray-300 leading-relaxed mb-2">
               Incharge of security team handling large masses, ensuring safe entry/exit and conflict resolution.
             </p>
         </div>

         {/* Item 5 */}
         <div className="group hover:bg-white/5 p-3 rounded transition-colors border border-transparent hover:border-gray-800">
             <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-bloomberg-orange font-bold text-base">Teach Your Neighbour</h3>
                <span className="text-white font-bold text-xs">DEC 2024 - MAY 2025</span>
             </div>
             <div className="text-white mb-2 font-bold">HEAD COORDINATOR</div>
             <p className="text-gray-300 leading-relaxed mb-2">
               Recruited 80+ volunteers to provide STEM education to underprivileged students. Delegated supervisory roles.
             </p>
         </div>
      </div>
    </div>
  );
};

export default LeadershipPanel;
