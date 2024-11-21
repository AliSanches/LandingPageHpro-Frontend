import Header from "./pages/Header/Header";
import SectionContatoInicio from "./pages/SectionContatoInicio/SectionContatoInicio";

function App() {
  return (
    <>
      <section className="container-fluid bg-secondary">
        <SectionContatoInicio />
      </section>
      <header className="container-fluid">
        <Header />
      </header>
    </>
  );
}

export default App;
