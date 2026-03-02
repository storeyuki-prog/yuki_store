import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://fxwrhyxmladreetvkzke.supabase.co'
const supabaseKey = 'sb_publishable_OkfPYRplR4pVSIi3UyvBMg_fv-857Vo'

export const supabase = createClient(supabaseUrl, supabaseKey)
