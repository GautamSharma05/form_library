import "./App.css";
import formJson from "./constant/form";
import Form from "./components/form";
export default function App() {
  return (
    <div className="flex justify-center items-center  h-screen">
      <div className="border rounded-md p-4 w-1/4">
        <h1 className="text-2xl font-mono font-bold mb-4">Form Library</h1>
        <Form fields={formJson} />
      </div>  
    </div>
  );
}
