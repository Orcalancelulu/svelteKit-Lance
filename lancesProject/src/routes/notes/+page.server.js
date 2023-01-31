import supabase from "$lib/db";

//console.log(supabase);

export async function load() {
  const { data } = await supabase.from("countries").select();
  return {
    countries: data ?? [],
  };
}