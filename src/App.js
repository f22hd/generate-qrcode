import React from "react";
import "./assets/main.css";
import Footer from "./components/footer";
import FormContainer from "./components/form-container";

function App() {
  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <main className="lg:container lg:mx-auto  flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 p-5 mt-4">
          <FormContainer />
          <Footer></Footer>
        </div>
      </main>
    </div>
  );
}

export default App;
