import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Admin Supabase Client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { student_code, full_name, semester, results } = await req.json();

    if (!student_code || !results || results.length === 0) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    // You can design your Supabase table to accept a JSONB field for results
    const payload = {
      student_code,
      full_name,
      semester,
      results, // Store the whole array in a JSONB column
    };

    const { error, data } = await supabase.from('resulttable').insert([payload]);

    if (error) {
      console.error('Insert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
 console.log('profile sucess')
    return NextResponse.json({ success: true, data });
    
  } catch (err: any) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
