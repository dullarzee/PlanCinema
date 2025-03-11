import {createClient} from '@supabase/supabase-js';

const myUrl = 'https://ozclavxftplfwjnhjxop.supabase.co';
const myKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96Y2xhdnhmdHBsZndqbmhqeG9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0Njg3NzMsImV4cCI6MjA1NzA0NDc3M30.7T6Ae5YxLQVDcTpQOHXxBRKdx5Gv6CKp3-CgpgyRzNE';

const Supabase = createClient(myUrl, myKey);

export default Supabase;