export function GET(){const id=process.env.GOOGLE_ADSENSE_PUBLISHER_ID;return new Response(id?`google.com, ${id}, DIRECT, f08c47fec0942fa0\n`:"",{headers:{"content-type":"text/plain"}})}
