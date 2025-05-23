import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function Sidebar() {
  const { login, register, isAuthenticated, user, logout } = useKindeAuth();

  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] p-4">
      <AddTodoForm />
      <div className="mt-auto space-y-2">
        {isAuthenticated ? (
          <>
            <p className="text-sm">Logged in as {user?.email}</p>
            <Button onClick={logout} buttonType={"secondary"}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button onClick={login} buttonType={"secondary"}>
              Login
            </Button>
            <Button onClick={register} buttonType={"secondary"}>
              Register
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
