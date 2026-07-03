"use client";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { messageAction } from "@/utils/admin/messages";
import { useActionState } from "react";
export default function MessageForm({ id, flag }: { id: number; flag: boolean }) {
  const [_state, action, isPending] = useActionState(messageAction, null);
  return (
    <form className="flex gap-4 justify-center mt-5" action={action}>
        <input type="hidden" name="id" value={id} />
      <Button
        className={`px-8 md:px-10 md:py-6 md:text-xl ${flag ? "text-orange-400" : "text-green-400"}`}
        type="submit"
        name="action"
        value={flag ? "unread" : "read"}
        disabled={isPending}
      >
        {isPending && <Spinner data-icon="inline-start" className="ml-10" />}
        {flag ? "Mark as Unread" : "Mark as Read"}
      </Button>
      <Button
        variant="destructive"
        className="px-10 md:px-20 md:py-6 md:text-xl"
        type="submit"
        name="action"
        value="delete"
        disabled={isPending}
      >
        {isPending && <Spinner data-icon="inline-start" className="ml-10" />}
        Delete
      </Button>
    </form>
  );
}
