import { AuthButton } from './auth-button-client'
import { createServerSupabaseClient } from '../page'

export async function AuthButtonServer () {
  const supabase = createServerSupabaseClient()
  const { data: { session } } = await supabase.auth.getSession()

  return <AuthButton session={session} />
}
