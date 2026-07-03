import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { logOutHandler } from "@/utils/admin/auth";

export function Logout() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-transparent text-md lg:text-2xl text-red-600 md:text-red-300 transition duration-150 hover:text-red-400 border-0 hover:bg-transparent">
          Log out
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="default">
        <AlertDialogHeader>
          <AlertDialogTitle>Do you want to log out?</AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            Do you want to log-out from this device?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mx-0 w-full flex justify-between">
          <AlertDialogCancel className="px-10">Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="px-10 bg-red-600/80"
            onClick={async () => await logOutHandler()}
          >
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
