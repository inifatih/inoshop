import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,   // gunakan anon key, bukan publishable
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value }) => supabaseResponse.cookies.set(name, value))
        },
      },
    }
  )

  // ❗ Tetap wajib ada supaya session tidak error
  const { data } = await supabase.auth.getClaims()
  const session = data?.claims

  // =====================================================
  // 1. Jika path bukan /admin → siapa saja boleh akses
  // =====================================================
  const isAdminPath = request.nextUrl.pathname.startsWith('/admin')
  if (!isAdminPath) {
    return supabaseResponse
  }

  // =====================================================
  // 2. Jika path /admin tapi tidak ada session → redirect login
  // =====================================================
  if (!session) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // =====================================================
  // 3. Ambil role dari profiles (butuh RLS benar)
  // =====================================================
  const { data: profile } = await supabase
    .from('profiles')
    .select('is_admin')
    .eq('id', session.sub)
    .single()

  if (!profile?.is_admin) {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  // =====================================================
  // 4. Jika admin → lanjutkan ke /admin
  // =====================================================
  return supabaseResponse
}
