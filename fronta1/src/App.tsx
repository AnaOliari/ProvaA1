import React from "react";
import ListarTarefas from "./components/listar-tarefas";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ListarTarefasConcluidas from "./components/listar-concluidas-tarefa";
import ListarTarefasNaoConcluidas from "./components/listar-nao-concluidas-tarefa";
import CadatrarTarefa from "./components/cadastrar-tarefa";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/listar"}>Listar Tarefas</Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/listarconcluidas"}>
                  Listar Tarefas Concluidas
                </Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/listarnaoconcluidas"}>
                  Listar Tarefas Não Concluidas
                </Link>
              </li>
              <li>
                <Link to={"/pages/tarefa/cadastrar"}>Cadastrar Tarefas</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<ListarTarefas />} />
            <Route path="/pages/tarefa/listar" element={<ListarTarefas />} />
            <Route
              path="/pages/tarefa/listarconcluidas"
              element={<ListarTarefasConcluidas />}
            />
            <Route
              path="/pages/tarefa/listarnaoconcluidas"
              element={<ListarTarefasNaoConcluidas />}
            />
            <Route
              path="/pages/tarefa/cadastrar"
              element={<CadatrarTarefa />}
            />
          </Routes>
          <footer>
            <p>Desenvolvido por Ana Carolina</p>
          </footer>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
