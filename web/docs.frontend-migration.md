# QuickPuff Frontend Migration (QML → React 19)

## 1) Arquitectura objetivo

- Stack: React 19 + TypeScript + Vite + TailwindCSS + Framer Motion + TanStack Query + React Router + Zustand + Recharts + React Hook Form + Zod.
- Integración backend: REST para comandos/lecturas y WebSocket para estado en vivo.
- Separación estricta:
  - **services/**: transporte y contratos externos.
  - **stores/**: estado global UI + caché de estado backend normalizado.
  - **hooks/**: orquestación (query/subscriptions).
  - **components/**: presentación reusable por dominio.
  - **pages/**: composición por pantalla.
  - **layouts/**: shell, navegación y overlays de alto nivel.

## 2) Árbol final de carpetas

```text
web/
  src/
    app/
      AppProviders.tsx
      AppRouter.tsx
    pages/
      ControlPage.tsx
      LightsPage.tsx
      UsagePage.tsx
      CarePage.tsx
      DevicePage.tsx
      HistoryPage.tsx
      WrappedPage.tsx
      ShowtimePage.tsx
    layouts/
      AppLayout.tsx
    components/
      common/
        GlassCard.tsx
        SegmentedTabs.tsx
        StatCard.tsx
        ProgressRing.tsx
        OverlayPortal.tsx
        Modal.tsx
      control/
        HeatControls.tsx
        ProfileCard.tsx
        HeatGraphCard.tsx
      lights/
        LightsControlPanel.tsx
        ColorPalettePanel.tsx
        CyclePanel.tsx
      usage/
        UsageDashboard.tsx
        HistoryTable.tsx
      care/
        CarePanel.tsx
      device/
        DevicePanel.tsx
      wrapped/
        WrappedSlides.tsx
        ShareCard.tsx
      overlays/
        ReadyOverlay.tsx
        ShowtimeOverlay.tsx
        WrappedOverlay.tsx
        animations/
          RocketAnimation.tsx
          ConfettiAnimation.tsx
          LavaAnimation.tsx
          AuroraAnimation.tsx
          FireworksAnimation.tsx
          SmokeRingsAnimation.tsx
          NeonAnimation.tsx
    hooks/
      useDeviceState.ts
      useProfiles.ts
      useUsageStats.ts
      useSessionHistory.ts
      useWebSocketFeed.ts
      useCountdown.ts
    services/
      api/
        httpClient.ts
        deviceApi.ts
        profileApi.ts
        statsApi.ts
        sessionApi.ts
      ws/
        websocketClient.ts
    stores/
      useDeviceStore.ts
      useSessionStore.ts
      useProfileStore.ts
      useSettingsStore.ts
      useStatsStore.ts
    types/
      device.ts
      stats.ts
      session.ts
    utils/
      theme.ts
      format.ts
    assets/
      fonts/
        Rajdhani-Medium.ttf
        Rajdhani-SemiBold.ttf
      README.md
    index.css
    main.tsx
```

## 3) Mapeo QML → React

| QML origen | React destino |
|---|---|
| `Panel.qml` | `src/layouts/AppLayout.tsx` + composición de `src/pages/*` |
| `BarWidget.qml` | `src/layouts/AppLayout.tsx` (header status shell) + `useWebSocketFeed` |
| `ReadyOverlay.qml` | `src/components/overlays/ReadyOverlay.tsx` + `components/overlays/animations/*` |
| `SessionOverlay.qml` | `src/components/overlays/ShowtimeOverlay.tsx` |
| `WrappedOverlay.qml` | `src/components/overlays/WrappedOverlay.tsx` + `components/wrapped/*` |
| `pages/ControlPage.qml` | `src/pages/ControlPage.tsx` |
| `pages/LightsPage.qml` | `src/pages/LightsPage.tsx` |
| `pages/UsagePage.qml` | `src/pages/UsagePage.tsx` |
| `pages/CarePage.qml` | `src/pages/CarePage.tsx` |
| `pages/DevicePage.qml` | `src/pages/DevicePage.tsx` |
| `components/ActionButton.qml` | botones de acción en `control/HeatControls.tsx` |
| `components/TimerRing.qml` / `ConicalRing.qml` | `common/ProgressRing.tsx` |
| `components/HeatGraph.qml` | `control/HeatGraphCard.tsx` (Recharts) |
| `components/SessionCard.qml` | `usage/HistoryTable.tsx` filas + modal |
| `components/StatCard.qml` / `TrendCard.qml` | `common/StatCard.tsx` + `usage/UsageDashboard.tsx` |
| `components/Segmented.qml` | `common/SegmentedTabs.tsx` |
| `components/ColorPicker.qml` | `lights/ColorPalettePanel.tsx` |
| `components/CycleSection.qml` | `lights/CyclePanel.tsx` |
| `components/MyLightsSection.qml` | `lights/ColorPalettePanel.tsx` (base) |
| `components/AmbientSection.qml` | `lights/LightsControlPanel.tsx` (theme/music toggles via store) |
| `components/FaultCard.qml` | `device/DevicePanel.tsx` (extensible a faults tab) |
| `components/NoteEditor.qml` | `usage/HistoryTable.tsx` modal edición |
| `components/PeakArt.qml` | placeholder visual en header/control (pendiente asset 3D exacto) |

## 4) Diseño de estados globales (Zustand)

- `useDeviceStore`
  - Estado backend normalizado: conexión, temperatura, target, batería, progreso preheat, perfil activo, estado operativo.
- `useSessionStore`
  - Estado UI + runtime: countdown, ready animation, showtime mode.
- `useProfileStore`
  - Catálogo de perfiles y edición optimista (temp, duration, boost, vapor, color).
- `useSettingsStore`
  - Ajustes de lights/UX: stealth, lantern, brightness, theme/music color.
- `useStatsStore`
  - Métricas agregadas (today/week/month/lifetime) + historial de sesiones.

## 5) Diseño de APIs (REST)

- `deviceApi.ts`
  - `GET /device/state`
  - `POST /device/heat/start`
  - `POST /device/heat/stop`
  - `POST /device/heat/boost`
- `profileApi.ts`
  - `GET /profiles`
  - `PATCH /profiles/:id`
- `statsApi.ts`
  - `GET /stats/usage`
  - `GET /stats/heat-trace`
- `sessionApi.ts`
  - `GET /sessions?limit=n`
  - `PUT /sessions/:id/note`

## 6) Diseño de WebSockets

`services/ws/websocketClient.ts`

Canales modelados:
- `device.status` → temperatura/operating-state en tiempo real.
- `session.timer` → countdown vivo.

Patrón:
1. conexión singleton,
2. dispatch por `type`,
3. suscripción/cleanup por hook (`useWebSocketFeed`).

## 7) Lista completa de componentes migrados (fase base)

- Common: `GlassCard`, `SegmentedTabs`, `StatCard`, `ProgressRing`, `OverlayPortal`, `Modal`.
- Control: `HeatControls`, `ProfileCard`, `HeatGraphCard`.
- Lights: `LightsControlPanel`, `ColorPalettePanel`, `CyclePanel`.
- Usage: `UsageDashboard`, `HistoryTable`.
- Care: `CarePanel`.
- Device: `DevicePanel`.
- Wrapped: `WrappedSlides`, `ShareCard` (export PNG).
- Overlays: `ReadyOverlay`, `ShowtimeOverlay`, `WrappedOverlay`.
- Ready Animations desacopladas: Rocket, Confetti, Lava, Aurora, Fireworks, Smoke Rings, Neon (módulos separados reutilizables).

## 8) Lista completa de páginas

- `/control`
- `/lights`
- `/usage`
- `/care`
- `/device`
- `/history`
- `/wrapped`
- `/showtime`

## 9) Lista completa de hooks

- `useDeviceState`
- `useProfiles`
- `useUsageStats`
- `useSessionHistory`
- `useWebSocketFeed`
- `useCountdown`

## 10) Refactor recomendado

1. Mover visualizaciones peak/showtime/wrapped a package interno `@quickpuff/visuals`.
2. Introducir design-tokens versionados (color, spacing, radii, motion) para garantizar paridad estética.
3. Consolidar contratos backend con OpenAPI + codegen para tipos TS.
4. Añadir feature flags por overlay (`ready/showtime/wrapped`) para rollout gradual.
5. Integrar pruebas visuales (Playwright snapshots) para paridad de UI con QML.

## 11) Código inicial de módulos

Incluido en `src/services/*`, `src/stores/*`, `src/hooks/*`, `src/types/*`, `src/utils/*`.

## 12) Componentes React completos

Incluidos en `src/components/**/*` con versión funcional base + animaciones Framer Motion.

## 13) Layout principal

`src/layouts/AppLayout.tsx`:
- Header premium con estado del Peak,
- batería,
- temperatura,
- progreso,
- navegación por tabs estilo segmentado.

## 14) Sistema de navegación

`src/app/AppRouter.tsx` con React Router:
- shell único (`AppLayout`),
- rutas de dashboard y experiencias fullscreen.

## 15) Estrategia de migración incremental

1. **Foundation**: shell, theme, stores, router, servicios REST/WS.
2. **Parity Core**: Control + Lights + Usage + Device + Care.
3. **History/Wrapped**: tabla avanzada, filtros, notas, slides, export share card.
4. **Showtime/Ready**: overlays stage/corner + animaciones desacopladas.
5. **Polish**: ajuste visual exacto, micro-interacciones, QA multi-monitor.
6. **Cutover**: feature-flag por módulo hasta reemplazo completo del frontend QML.

## Estado de lógica visual vs backend (resultado del análisis QML)

- **Lógica visual**: ring/timers animados, glow/particles, cards, tipografía, transitions, stage/corner overlays, wrapped slides.
- **Dependiente de backend**: status device, current profile, heat trace, telemetry usage, history sessions/notes, saved lights/cycles, showtime trigger, wrapped payload.

