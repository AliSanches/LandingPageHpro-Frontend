import Header from "./pages/Header/Header";
import SectionCarrosel from "./pages/SectionCarrosel/SectionCarrosel";
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
      <main className="container-fluid p-0">
        <SectionCarrosel />
      </main>
    </>
  );
}

export default App;
