// Export null if in demo mode
const isDemoMode = localStorage.getItem("demoMode") === "true";

export const supabase = isDemoMode ? null : createClient(
  "https://iwkwncpcmdojacsosvaa.supabase.co",
  "your_anon_key"
);