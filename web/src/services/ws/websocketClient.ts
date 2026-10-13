type Listener<T> = (payload: T) => void;

export class WebSocketClient {
  private socket: WebSocket | null = null;
  private listeners = new Map<string, Set<Listener<unknown>>>();

  connect(url = import.meta.env.VITE_WS_URL ?? "ws://localhost:8000/ws") {
    if (this.socket && this.socket.readyState <= 1) return;
    this.socket = new WebSocket(url);
    this.socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data) as { type: string; payload: unknown };
        this.listeners.get(data.type)?.forEach((listener) => listener(data.payload));
      } catch {
        // no-op
      }
    };
  }

  subscribe<T>(type: string, listener: Listener<T>) {
    const set = this.listeners.get(type) ?? new Set<Listener<unknown>>();
    set.add(listener as Listener<unknown>);
    this.listeners.set(type, set);
    return () => set.delete(listener as Listener<unknown>);
  }
}

export const websocketClient = new WebSocketClient();
