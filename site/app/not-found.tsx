import { Logo } from "@/components/Logo";

export default function NaoEncontrada() {
  return (
    <main className="pagina-simples" style={{ minHeight: "80vh", display: "grid", alignItems: "center", textAlign: "center" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <Logo />
        </div>
        <h1>Esse caminho não existe.</h1>
        <p style={{ marginBottom: 32 }}>Mas a gente leva você de volta ao lugar certo.</p>
        <a href="/" className="botao botao--azul">
          Voltar para a página inicial
        </a>
      </div>
    </main>
  );
}
