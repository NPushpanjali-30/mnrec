import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vlsmexpqktdtyunzkzgg.supabase.co";
const supabaseKey = "sb_publishable_RxWNDzr4zfXnBIWrI1tkXg_i0aPph_6";

export const supabase = createClient(supabaseUrl, supabaseKey);