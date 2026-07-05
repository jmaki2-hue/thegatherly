import { auth } from "../firebase/firebase";

export default function TestFirebase() {
  return (
    <div className="p-10">
      Firebase Connected ✅
      <br />
      Current User:
      {" "}
      {auth.currentUser?.email || "Not Logged In"}
    </div>
  );
}