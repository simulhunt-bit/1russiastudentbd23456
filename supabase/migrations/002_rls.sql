alter table announcements enable row level security;
create policy "Published verified announcements are public" on announcements for select using (status='published' and verification_status='source_verified');
