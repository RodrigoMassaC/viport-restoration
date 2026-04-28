import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://mugtqzamugdpktxtkpnr.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11Z3RxemFtdWdkcGt0eHRrcG5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0MDYzMTcsImV4cCI6MjA5Mjk4MjMxN30.Z5hAhVr2mMeHj8QFdOMWgubeBdNJ7LZiygJhQV-uDU8";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
