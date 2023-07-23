
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://icjzwffdwajjzfcywory.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imljanp3ZmZkd2FqanpmY3l3b3J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMTQ4NjgsImV4cCI6MjAwNTY5MDg2OH0.-UV5p0h4oDq_Y0rcCv-y2gwcUQ-42bNW2G1ut0VmG3I"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;