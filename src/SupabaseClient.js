import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rpvmwflzjvojqwoogmek.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwdm13Zmx6anZvanF3b29nbWVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNDM3NDQsImV4cCI6MjA1MTgxOTc0NH0.I8HBs55Gc_chTbgHZSxEXiVGkLSEsxqav58XGcpIwTc'; 
export const supabase = createClient(supabaseUrl, supabaseKey);