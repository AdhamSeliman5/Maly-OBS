/**
 * Maly - OBS Module Pages i18n
 * Shared translations + language engine. Module-specific keys injected per page.
 */
(function() {
  const sharedEn = {
    breadcrumb_home: "Home",
    breadcrumb_features: "Features",
    nav_features: "Features",
    nav_pricing: "Pricing",
    nav_faq: "FAQ",
    nav_privacy: "Privacy",
    nav_contact: "Contact",
    nav_download: "Download Now",
    mod_capabilities: "Capabilities",
    mod_what_you_can_do: "What You Can Do",
    mod_key_features: "Key features at your fingertips.",
    mod_workflow: "Workflow",
    mod_get_started: "Get started in minutes.",
    mod_explore: "Explore",
    mod_other_modules: "Other Modules",
    mod_discover_more: "Discover more of what Maly - OBS can do.",
    mod_cta_headline: "Ready to Own Your Numbers?",
    mod_cta_trial: "1 week free trial—no credit card required.",
    mod_download_now: "Download Now",
    footer_tagline: "The smartest way to run your e-commerce business in Egypt.",
    footer_nav: "Navigate",
    footer_contact: "Contact",
    footer_legal: "Legal",
    footer_privacy: "Privacy Policy",
    footer_location: "Cairo, Egypt",
    footer_copy: "© 2026 Maly Systems. All rights reserved.",
    explore_dashboard: "Dashboard",
    explore_inventory: "Inventory",
    explore_preparation: "Preparation",
    explore_shipping: "Shipping",
    explore_expenses: "Expenses",
    explore_reports: "Reports",
    explore_debts: "Debts",
    explore_ads: "Ads",
    explore_staff: "Staff",
    explore_manufacturing: "Manufacturing",
  };
  const sharedAr = {
    breadcrumb_home: "الرئيسية",
    breadcrumb_features: "المميزات",
    nav_features: "المميزات",
    nav_pricing: "الأسعار",
    nav_faq: "الأسئلة الشائعة",
    nav_privacy: "الخصوصية",
    nav_contact: "تواصل معنا",
    nav_download: "تحميل الآن",
    mod_capabilities: "القدرات",
    mod_what_you_can_do: "ما يمكنك فعله",
    mod_key_features: "ميزات رئيسية بين يديك.",
    mod_workflow: "سير العمل",
    mod_get_started: "ابدأ في دقائق.",
    mod_explore: "استكشف",
    mod_other_modules: "وحدات أخرى",
    mod_discover_more: "اكتشف المزيد مما يقدمه مالي - OBS.",
    mod_cta_headline: "مستعد لامتلاك أرقامك؟",
    mod_cta_trial: "أسبوع مجاني — لا حاجة لبطاقة ائتمان.",
    mod_download_now: "تحميل الآن",
    footer_tagline: "الطريقة الأذكى لإدارة أعمال التجارة الإلكترونية في مصر.",
    footer_nav: "تنقّل",
    footer_contact: "تواصل",
    footer_legal: "قانوني",
    footer_privacy: "سياسة الخصوصية",
    footer_location: "القاهرة، مصر",
    footer_copy: "© 2026 Maly Systems. جميع الحقوق محفوظة.",
    explore_dashboard: "لوحة التحكم",
    explore_inventory: "المخزون",
    explore_preparation: "التجهيز",
    explore_shipping: "الشحن",
    explore_expenses: "المصروفات",
    explore_reports: "التقارير",
    explore_debts: "الديون",
    explore_ads: "الإعلانات",
    explore_staff: "الموظفون",
    explore_manufacturing: "التصنيع",
  };

  window.MalyI18n = {
    init: function(moduleKeys) {
      const T = {
        en: { ...sharedEn, ...(moduleKeys.en || {}) },
        ar: { ...sharedAr, ...(moduleKeys.ar || {}) }
      };
      let currentLang = 'en';
      try { currentLang = localStorage.getItem('maly_lang') || 'en'; } catch(e) {}

      window.applyLang = function(lang) {
        currentLang = lang;
        const html = document.documentElement;
        html.lang = lang;
        html.dir = lang === 'ar' ? 'rtl' : 'ltr';
        const texts = T[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (texts[key] !== undefined) el.textContent = texts[key];
        });
        const label = lang === 'en' ? 'العربية' : 'English';
        const el1 = document.getElementById('lang-label');
        const el2 = document.getElementById('lang-label-mobile');
        if (el1) el1.textContent = label;
        if (el2) el2.textContent = label;
        try { localStorage.setItem('maly_lang', lang); } catch(e) {}
      };

      window.toggleLang = function() {
        applyLang(currentLang === 'en' ? 'ar' : 'en');
        currentLang = document.documentElement.lang;
      };

      applyLang(currentLang);
    }
  };
})();
