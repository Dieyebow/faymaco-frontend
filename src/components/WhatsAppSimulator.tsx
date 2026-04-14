import React, { useState, useEffect, useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { ArrowLeft, MoreHorizontal, FileText, CreditCard, CheckCheck, Plus, Mic, Download, Smile } from 'lucide-react';

const Avatar = () => (
  <div className="w-8 h-8 rounded-full bg-[#143028] flex items-center justify-center shrink-0 shadow-[0_2px_10px_rgba(20,48,40,0.15)] border-2 border-white relative z-10">
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#DAFFD1]">
       <path d="M19 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" fill="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
       <path d="M16 12V12.01 M21 12H16C15.4477 12 15 11.5523 15 11V9H21" stroke="currentColor" strokeWidth="1.5" fill="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
       <path d="M1 12H11 M8 9L11 12L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
       <path d="M1 8H5 M3 16H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const TypingIndicator = () => (
  <div className="flex flex-col gap-1 mb-6 animate-fade-in-up origin-left">
    <div className="flex justify-start pl-11 mb-1">
      <span className="text-[10px] text-gray-400">14:28</span>
    </div>
    <div className="flex items-start gap-2">
      <Avatar />
      <div className="flex items-center gap-1.5 px-4 py-3.5 bg-white dark:bg-[#1a2e26] border border-[#143028]/5 dark:border-white/5 rounded-[1.2rem] rounded-tl-sm shadow-[0_4px_15px_rgba(0,0,0,0.03)] h-[42px]">
        <div className="w-1.5 h-1.5 rounded-full bg-[#143028]/20 dark:bg-white/30 animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-1.5 h-1.5 rounded-full bg-[#143028]/20 dark:bg-white/30 animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-1.5 h-1.5 rounded-full bg-[#143028]/20 dark:bg-white/30 animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  </div>
);

const WhatsAppSimulator = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sequence = [
      { step: 1, delay: 500 },   // Start typing
      { step: 2, delay: 1500 },  // Show message 1
      { step: 3, delay: 2000 },  // Click "Voir la facture"
      { step: 4, delay: 500 },   // Show user reply
      { step: 5, delay: 500 },   // Start typing 2
      { step: 6, delay: 1500 },  // Show message 2 (Wave)
      { step: 7, delay: 2500 },  // Click "Payer"
      { step: 8, delay: 1000 },  // Typing 3
      { step: 9, delay: 1500 },  // Show message 3 (Success)
      { step: 10, delay: 2000 }, // Click "Continuer"
      { step: 11, delay: 500 },  // Show user reply
      { step: 12, delay: 1000 }, // Typing 4
      { step: 13, delay: 1500 }, // Show Invoice PDF
      { step: 14, delay: 5000 }, // Reset
      { step: 0, delay: 500 }    // Loop back
    ];

    let currentTimeout: NodeJS.Timeout;

    const runSequence = (index: number) => {
      const currentIndex = index % sequence.length;
      const nextPhase = sequence[currentIndex];
      setStep(nextPhase.step);
      
      currentTimeout = setTimeout(() => {
        runSequence(currentIndex + 1);
      }, nextPhase.delay);
    };

    runSequence(0);

    return () => clearTimeout(currentTimeout);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [step]);

  return (
    <div className="relative group mx-auto">
      {/* Decorative background glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#143028]/20 to-[#DAFFD1]/30 rounded-[3.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none z-0"></div>
      
      {/* Phone container */}
      <div className="w-[340px] h-[780px] bg-[#F2F4F5] dark:bg-[#0f1714] rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden relative flex flex-col scale-90 md:scale-100 transform transition-transform duration-500 z-10 font-sans border border-[#143028]/5 dark:border-white/5">
        
        {/* Header styling based on the image */}
        <div className="bg-[#143028] dark:bg-[#1a2e26] text-white pt-12 pb-8 px-5 flex items-center justify-between z-20 rounded-b-[2rem] shadow-sm relative">
          <ArrowLeft size={20} className="cursor-pointer hover:opacity-80 transition-opacity" />
          
          <div className="flex flex-col items-center">
            <h3 className="font-medium text-[16px] tracking-wide relative z-10 flex items-center gap-1.5">
              Faymaco <CheckCheck size={14} className="text-[#DAFFD1]" />
            </h3>
            <div className="flex items-center gap-1.5 mt-0.5">
               <span className="w-1.5 h-1.5 rounded-full bg-[#DAFFD1] animate-pulse"></span>
               <span className="text-[11px] text-white/70 font-light">En ligne</span>
            </div>
          </div>

          <MoreHorizontal size={20} className="cursor-pointer hover:opacity-80 transition-opacity" />
        </div>

        {/* Chat Area */}
        <div 
          ref={containerRef}
          className="flex-1 px-5 pt-5 pb-28 space-y-6 overflow-y-auto scroll-smooth relative z-10 bg-transparent no-scrollbar"
        >
          {/* subtle date separator */}
          <div className="flex justify-center my-2">
             <span className="text-[10px] uppercase tracking-widest text-[#143028]/40 font-semibold">Aujourd'hui</span>
          </div>

          {/* Typing 1 */}
          {step === 1 && <TypingIndicator />}

          {/* Message 1 (Bot) */}
          {step >= 2 && (
            <div className="flex flex-col gap-1 animate-fade-in-up origin-left">
              <div className="flex justify-start pl-11 mb-1">
                 <span className="text-[10px] text-gray-400">14:28</span>
              </div>
              <div className="flex items-start gap-2">
                <Avatar />
                <div className="bg-white dark:bg-[#1a2e26] border border-[#143028]/5 dark:border-white/5 rounded-[1.2rem] rounded-tl-sm p-4 w-[85%] shadow-[0_4px_15px_rgba(0,0,0,0.03)] relative transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                     <div className="w-7 h-7 rounded-full bg-[#DAFFD1]/30 flex items-center justify-center shrink-0">
                        <FileText size={14} className="text-[#143028] dark:text-[#DAFFD1]" />
                     </div>
                     <h4 className="font-semibold text-[13px] text-[#143028] dark:text-white">{t('faymaco.simulator.new_invoice')}</h4>
                  </div>
                  <p className="mb-4 text-[13px] text-[#143028]/80 dark:text-white/80 leading-relaxed">
                    <Trans 
                      i18nKey="faymaco.simulator.invoice_desc"
                      components={[<strong />]}
                    />
                  </p>
                  
                  <div className="relative">
                     <button className={`w-full py-2.5 rounded-full text-[13px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 border ${
                       step >= 4 ? 'bg-[#143028]/5 dark:bg-white/5 text-[#143028]/40 dark:text-white/40 border-transparent cursor-default shadow-inner' :
                       step === 3 ? 'scale-95 bg-[#143028] text-white border-transparent' : 
                       'bg-transparent border-[#143028]/20 dark:border-white/20 text-[#143028] dark:text-white hover:bg-[#143028] hover:text-white hover:border-transparent'
                     }`}>
                       {t('faymaco.simulator.view_invoice')}
                     </button>
                     {step === 3 && (
                        <div className="absolute inset-0 border-2 border-[#143028] rounded-full animate-ping opacity-20"></div>
                     )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* User Reply 1 */}
          {step >= 4 && (
            <div className="flex flex-col gap-1 items-end animate-fade-in-up origin-right">
               <div className="flex justify-end pr-2 mb-1">
                 <span className="text-[10px] text-gray-400">14:28</span>
               </div>
               <div className="bg-[#143028] text-white rounded-[1.2rem] rounded-br-sm px-5 py-3.5 max-w-[75%] shadow-[0_4px_15px_rgba(20,48,40,0.15)] relative">
                  <p className="text-[13px] font-light leading-relaxed">{t('faymaco.simulator.view_invoice')}</p>
               </div>
            </div>
          )}

          {/* Typing 2 */}
          {step === 5 && <TypingIndicator />}

          {/* Message 2 (Payment Option) */}
          {step >= 6 && (
            <div className="flex flex-col gap-1 animate-fade-in-up origin-left">
              <div className="flex justify-start pl-11 mb-1">
                 <span className="text-[10px] text-gray-400">14:28</span>
              </div>
              <div className="flex items-start gap-2">
                <Avatar />
                <div className="bg-white dark:bg-[#1a2e26] border border-[#143028]/5 dark:border-white/5 rounded-[1.2rem] rounded-tl-sm p-3 w-[85%] shadow-[0_4px_15px_rgba(0,0,0,0.03)] relative transition-all duration-300">
                  <div className="w-full h-24 bg-gradient-to-tr from-[#1AC1F2] to-blue-300 rounded-[0.8rem] flex items-center justify-center mb-3 relative overflow-hidden">
                     <span className="text-white font-black text-3xl tracking-tighter drop-shadow-sm z-10">wave</span>
                  </div>
                  <div className="px-1 text-center mb-4 mt-2">
                     <p className="text-[11px] uppercase tracking-wider text-[#143028]/50 dark:text-white/50 font-semibold mb-1">{t('faymaco.simulator.amount_to_pay')}</p>
                     <p className="text-xl font-bold text-[#143028] dark:text-white">{t('faymaco.simulator.amount')}</p>
                  </div>
                  <div className="relative">
                     <button className={`w-full py-3 rounded-full text-[13px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 border ${
                       step >= 8 ? 'bg-[#143028]/5 dark:bg-white/5 text-[#143028]/40 dark:text-white/40 border-transparent cursor-default shadow-inner' :
                       step === 7 ? 'scale-95 bg-[#DAFFD1] dark:bg-[#143028] text-[#143028] dark:text-white border-transparent' : 
                       'bg-[#143028] dark:bg-[#DAFFD1] text-white dark:text-[#143028] border-transparent hover:shadow-[0_8px_20px_rgba(20,48,40,0.3)] hover:-translate-y-0.5'
                     }`}>
                       <CreditCard size={15} /> {t('faymaco.simulator.pay_now')}
                     </button>
                     {step === 7 && (
                        <div className="absolute inset-0 border-2 border-[#143028] rounded-full animate-ping opacity-20"></div>
                     )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Typing 3 */}
          {step === 8 && <TypingIndicator />}

          {/* Message 3 (Success) */}
          {step >= 9 && (
            <div className="flex flex-col gap-1 animate-fade-in-up origin-left">
              <div className="flex justify-start pl-11 mb-1">
                 <span className="text-[10px] text-gray-400">14:28</span>
              </div>
              <div className="flex items-start gap-2">
                <Avatar />
                <div className="bg-white dark:bg-[#1a2e26] border border-[#143028]/5 dark:border-white/5 rounded-[1.2rem] rounded-tl-sm p-4 w-[80%] shadow-[0_4px_15px_rgba(0,0,0,0.03)] relative transition-all duration-300 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-[#DAFFD1]/40 rounded-full flex items-center justify-center mb-3">
                     <CheckCheck size={24} className="text-[#143028]" />
                  </div>
                  <p className="font-bold text-[14px] text-[#143028] dark:text-white mb-1">{t('faymaco.simulator.payment_validated')}</p>
                  <p className="text-[12px] text-[#143028]/60 dark:text-white/60 leading-relaxed mb-4">{t('faymaco.simulator.payment_success_desc')}</p>
                  
                  <div className="relative w-full">
                     <button className={`w-full py-2.5 rounded-full text-[13px] font-semibold flex items-center justify-center transition-all duration-300 border ${
                       step >= 11 ? 'bg-[#143028]/5 dark:bg-white/5 text-[#143028]/40 dark:text-white/40 border-transparent cursor-default shadow-inner' :
                       step === 10 ? 'scale-95 bg-[#143028] text-white border-transparent' : 
                       'bg-transparent border-[#143028]/10 text-[#143028] hover:bg-[#143028]/5 dark:border-white/10 dark:text-white dark:hover:bg-white/5'
                     }`}>
                       {t('faymaco.simulator.continue')}
                     </button>
                     {step === 10 && (
                        <div className="absolute inset-0 border-2 border-[#143028] rounded-full animate-ping opacity-20"></div>
                     )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* User Reply 2 */}
          {step >= 11 && (
            <div className="flex flex-col gap-1 items-end animate-fade-in-up origin-right">
               <div className="flex justify-end pr-2 mb-1">
                 <span className="text-[10px] text-gray-400">14:28</span>
               </div>
               <div className="bg-[#143028] text-white rounded-[1.2rem] rounded-br-sm px-5 py-3.5 max-w-[75%] shadow-[0_4px_15px_rgba(20,48,40,0.15)] relative">
                  <p className="text-[13px] font-light leading-relaxed">{t('faymaco.simulator.continue')}</p>
               </div>
            </div>
          )}

          {/* Typing 4 */}
          {step === 12 && <TypingIndicator />}

          {/* Message 4 (Invoice PDF) */}
          {step >= 13 && (
            <div className="flex flex-col gap-1 animate-fade-in-up origin-left pb-4">
              <div className="flex justify-start pl-11 mb-1">
                 <span className="text-[10px] text-gray-400">14:28</span>
              </div>
              <div className="flex items-start gap-2">
                <Avatar />
                <div className="bg-white dark:bg-[#1a2e26] border border-[#143028]/5 dark:border-white/5 rounded-[1.2rem] rounded-tl-sm p-2 w-[80%] shadow-[0_4px_15px_rgba(0,0,0,0.03)] transition-all duration-300 relative group cursor-pointer">
                   <div className="bg-white dark:bg-[#0f1714] h-32 rounded-[0.8rem] p-3 flex flex-col relative overflow-hidden mb-2 border border-[#143028]/10 dark:border-white/10 shadow-sm group-hover:shadow-md transition-shadow">
                       {/* Mini Invoice Header */}
                       <div className="flex justify-between items-start mb-3">
                           <div className="w-6 h-6 rounded bg-[#143028] dark:bg-[#DAFFD1] flex items-center justify-center shrink-0">
                               <span className="text-white dark:text-[#143028] text-[8px] font-bold">P</span>
                           </div>
                           <div className="text-right">
                               <div className="w-10 h-1.5 bg-gray-200 dark:bg-white/20 rounded-full mb-1"></div>
                               <div className="w-14 h-1.5 bg-gray-100 dark:bg-white/10 rounded-full"></div>
                           </div>
                       </div>
                       
                       {/* Mini Invoice Lines */}
                       <div className="space-y-1.5 mb-auto">
                           <div className="flex justify-between items-center">
                               <div className="w-16 h-1.5 bg-gray-200 dark:bg-white/20 rounded-full"></div>
                               <div className="w-8 h-1.5 bg-gray-200 dark:bg-white/20 rounded-full"></div>
                           </div>
                           <div className="flex justify-between items-center">
                               <div className="w-20 h-1.5 bg-gray-100 dark:bg-white/10 rounded-full"></div>
                               <div className="w-6 h-1.5 bg-gray-100 dark:bg-white/10 rounded-full"></div>
                           </div>
                       </div>
                       
                       {/* Mini Invoice Total */}
                       <div className="mt-3 pt-2 border-t border-dashed border-[#143028]/20 dark:border-white/20 flex justify-between items-center">
                           <div className="text-[7px] font-bold text-[#143028] dark:text-white uppercase tracking-wider">{t('faymaco.simulator.total')}</div>
                           <div className="px-1.5 py-0.5 bg-[#DAFFD1] dark:bg-[#143028] rounded text-[8px] font-black text-[#143028] dark:text-[#DAFFD1]">{t('faymaco.simulator.amount')}</div>
                       </div>
                       
                       {/* Overlay effect for PDF realism */}
                       <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
                   </div>
                   <div className="px-2 pb-1 flex justify-between items-center">
                     <div>
                       <h4 className="font-semibold text-[13px] text-[#143028] dark:text-white leading-tight mb-0.5">{t('faymaco.simulator.invoice_name')}</h4>
                       <p className="text-[11px] text-[#143028]/50 dark:text-white/50 font-medium">112 kB</p>
                     </div>
                     <div className="w-8 h-8 rounded-full bg-[#143028]/5 flex items-center justify-center text-[#143028]">
                        <Download size={14} />
                     </div>
                   </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area (Floating style) */}
        <div className="absolute bottom-0 w-full p-4 flex items-center gap-3 z-20 bg-gradient-to-t from-[#F2F4F5] dark:from-[#0f1714] via-[#F2F4F5] dark:via-[#0f1714] to-transparent pt-8 pb-5">
          <button className="text-[#143028]/60 hover:text-[#143028] dark:text-white/60 dark:hover:text-white transition-colors shrink-0">
            <Plus size={24} />
          </button>
          
          <div className="flex-1 bg-white dark:bg-[#1a2e26] border border-[#143028]/5 dark:border-white/5 rounded-full px-4 py-3 flex items-center justify-between shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
            <span className="text-[13px] text-[#143028]/30 dark:text-white/30 truncate">Tapez un message...</span>
            <Smile size={18} className="text-[#143028]/40 dark:text-white/40 ml-2 shrink-0" />
          </div>

          <div className="w-11 h-11 bg-[#143028] dark:bg-[#DAFFD1] rounded-full flex items-center justify-center text-white dark:text-[#143028] shrink-0 shadow-[0_4px_15px_rgba(20,48,40,0.2)] hover:scale-105 transition-transform cursor-pointer">
            <Mic size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppSimulator;
