import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Use the service role key to have admin rights (never expose to client)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const {
full_name,
student_code,
faculty_name,
department_name,
phone_number,
class_name,
semester,
username,
gender,
mother_name,
place_of_birth,
campus_name,
study_mode,
entry_year,
graduation_year
} = await req.json();

  const email = `${username}@gmail.com`.toLowerCase();//cabdala
  const password = `c123${student_code}`; 

  try {
   
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (authError) {
      console.error('Auth createUser error:', authError);
      return NextResponse.json({ error: authError.message }, { status: 500 });
    }

    const userId = authData.user?.id;
    console.log('Created user ID:', userId);

    if (!userId) {
      return NextResponse.json({ error: 'Failed to get user ID from auth response.' }, { status: 500 });
    }

    // Step 2: Check if profile exists (in your target table)
    const { data: existingProfile, error: selectError } = await supabase
      .from('student_profiles_test') // Change to 'student_profiles_test' if that’s your table
      .select('id')
      .eq('id', userId)
      .maybeSingle();

    if (selectError) {
      console.error('Select profile error:', selectError);
      return NextResponse.json({ error: selectError.message }, { status: 500 });
    }

  
      // Step 3: Insert profile data with exact column names
      const { error: profileError, data: profileData } = await supabase
        .from('profiles') // or 'student_profiles_test' as per your DB
        .insert({
         id:userId,
full_name,
student_code,
faculty_name,
department_name,
phone_number,
class_name,
semester,
username,
gender,
mother_name,
place_of_birth,
campus_name,
study_mode,
entry_year,
graduation_year
        });

      console.log('Profile insert data:', profileData);
      console.error('Profile insert error:', profileError);

      if (profileError) {
        return NextResponse.json({ error: profileError.message }, { status: 500 });
      }
    

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Unexpected server error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
