import Header from "./pages/Header/Header";
import SectionCarrosel from "./pages/SectionCarrosel/SectionCarrosel";
import SectionContatoInicio from "./pages/SectionContatoInicio/SectionContatoInicio";
import SectionGestao from "./pages/SectionGestao/SectionGestao";

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
      <section className="container-fluid py-4">
        <SectionGestao />
      </section>
    </>
  );
}

export default App;
