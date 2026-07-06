const navItems = [
  { label: "Dashboard", active: true },
  { label: "Processos" },
  { label: "Documentos" },
  { label: "Equipes" },
  { label: "Relatórios" },
];

const kpis = [
  { label: "Processos", value: "847", delta: "+18%" },
  { label: "Pendentes", value: "23", delta: "−4" },
  { label: "Concluídos", value: "612", delta: "+12%" },
];

const rows = [
  { id: "#1042", name: "Licitação 2026/04", status: "Em andamento", tone: "blue" },
  { id: "#1041", name: "Protocolo GED-881", status: "Aprovado", tone: "green" },
  { id: "#1040", name: "Atendimento #3391", status: "Aguardando", tone: "amber" },
];

function StatusBadge({ tone, children }) {
  return <span className={`app-badge app-badge--${tone}`}>{children}</span>;
}

export default function SoftwareMockup() {
  return (
    <div className="software-showcase" aria-label="Interface do sistema SISgestão">
      <div className="app-window">
        <div className="app-titlebar">
          <div className="app-titlebar__dots">
            <span />
            <span />
            <span />
          </div>
          <span className="app-titlebar__title">SISgestão</span>
          <span className="app-titlebar__meta">Painel · v2.4</span>
        </div>

        <div className="app-body">
          <aside className="app-sidebar">
            <div className="app-sidebar__logo">S</div>
            <nav className="app-sidebar__nav">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`app-sidebar__item${item.active ? " is-active" : ""}`}
                >
                  <span className="app-sidebar__icon" />
                  <span>{item.label}</span>
                </div>
              ))}
            </nav>
          </aside>

          <div className="app-main">
            <div className="app-topbar">
              <span className="app-topbar__crumb">Dashboard / Visão geral</span>
              <div className="app-topbar__search">Buscar processo…</div>
              <div className="app-topbar__user">
                <span className="app-topbar__bell" />
                <span className="app-topbar__avatar">JP</span>
              </div>
            </div>

            <div className="app-content">
              <div className="app-kpis">
                {kpis.map((kpi) => (
                  <div className="app-kpi" key={kpi.label}>
                    <small>{kpi.label}</small>
                    <strong>{kpi.value}</strong>
                    <span>{kpi.delta}</span>
                  </div>
                ))}
              </div>

              <div className="app-chart">
                <div className="app-chart__header">
                  <span>Volume mensal</span>
                  <span className="app-chart__legend">Processos</span>
                </div>
                <div className="app-chart__bars">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="app-table">
                <div className="app-table__head">
                  <span>ID</span>
                  <span>Processo</span>
                  <span>Status</span>
                </div>
                {rows.map((row) => (
                  <div className="app-table__row" key={row.id}>
                    <span className="app-table__id">{row.id}</span>
                    <span className="app-table__name">{row.name}</span>
                    <StatusBadge tone={row.tone}>{row.status}</StatusBadge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="app-phone" aria-hidden="true">
        <div className="app-phone__notch" />
        <div className="app-phone__header">
          <span>SISgestão</span>
          <span className="app-phone__signal" />
        </div>
        <div className="app-phone__card">
          <small>App mobile</small>
          <strong>3 tarefas</strong>
          <span>Atualizado agora</span>
        </div>
        <div className="app-phone__list">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
