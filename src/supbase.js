import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wsirdabvcojbdthptvuw.supabase.co";

const supabaseKey =
  "sb_publishable_qR3kEJiJkfwb6DSjdrweRA_I-pYzFrp";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);