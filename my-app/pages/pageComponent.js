// this will use the .env.local env variables to connect to supabase
export async function getStaticProps() {
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    )
  
    // fetch data and export it from the images table in Supabase
    const { data } = await supabaseAdmin.from('images').select('*').order('id')
    return {
      props: {
        images: data,
      },
    }
  }
  