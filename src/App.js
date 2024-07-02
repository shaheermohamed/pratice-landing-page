import "./scss/sample.scss";
import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import LandingPage from "./components/LandingPage";
import ContentPage from "./components/ContentPage";
import FeaturesPage from "./components/FeaturesPage";
import Form from "./components/Form";
import Testimonial from "./components/Testimonial";

function App() {
  const [count, setCount] = useState(0);
  const { data, loading, error } = useFetch({
    methods: "get",
    url: "https://fakestoreapi.com/products",
  });

  console.log("data:", data, loading, error);

  useEffect(() => {
    console.log("hello" + count);
  }, []);
  return (
    <div className="App">
      <LandingPage />
      <ContentPage />
      <FeaturesPage />
      <Form />
      <Testimonial />
    </div>
  );
}

export default App;
