(function(){
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'david') {
      localStorage.setItem('tecno_spy_admin_excluded', 'true');
      return;
    }
    if (localStorage.getItem('tecno_spy_admin_excluded') === 'true') return;
    const SB_URL = 'https://jyrqzjctkmzdvmraqrcv.supabase.co';
    const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5cnF6amN0a216ZHZtcmFxcmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3NjI4NzYsImV4cCI6MjA1NjMzODg3Nn0.g7m2L4A1xCyv6N6E3t4x7w5Z8p9R2q1K0m3V5n8B4yQ';
    const siteId = window.SPY_SITE_ID || 'neurofast-ai-playstore';
    const siteName = window.SPY_SITE_NAME || 'NeuroFast AI — Play Store Subscription App';
    const siteCat = window.SPY_SITE_CATEGORY || 'saas';
    let vid = localStorage.getItem('tecno_spy_vid');
    if (!vid) { vid = 'v_' + Math.random().toString(36).slice(2) + Date.now().toString(36); localStorage.setItem('tecno_spy_vid', vid); }
    fetch(SB_URL + '/rest/v1/web_spy_sites', {
      method: 'POST',
      headers: {'Content-Type':'application/json','apikey':SB_KEY,'Authorization':'Bearer '+SB_KEY,'Prefer':'resolution=merge-duplicates'},
      body: JSON.stringify({site_id: siteId, site_name: siteName, site_url: window.location.origin + window.location.pathname, category: siteCat, description: 'App Play Store Suscripción: Ayuno + Escáner IA Macros + Dopamina TDAH'})
    }).catch(()=>{});
  } catch(e){}
})();