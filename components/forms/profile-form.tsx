"use client";

import { EditUserProfileSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormControl, FormField, FormItem, FormLabel, Form } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

const ProfileForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: "onChange",
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
  return (
    <Form {...form}>
      <form className='flex flex-col gap-6' onSubmit={() => {}}>
        <FormField
          disabled={loading}
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-lg'>User Full Name</FormLabel>
              <FormControl>
                <Input placeholder='Name' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          disabled={loading}
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-lg'>User Full Name</FormLabel>
              <FormControl>
                <Input placeholder='Email' type='email' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type='submit'>
          {loading ? (
            <Loader2 className='mr-2 h-4 w-5 animate-spin' />
          ) : (
            "Save User Settings"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ProfileForm;
