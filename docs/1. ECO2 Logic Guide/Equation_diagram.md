# Equation Diagram 
## 🔹 (Temporarily) Cooling Energy Demand Only
---

```mermaid
graph TD
    A["Heat Energy Calculation"] --> B["<div>$$Q = mc\Delta T$$</div>"]
    B --> C["<div>$$Q = (2 \times 1000) \times 4.18 \times (80 - 20)$$</div>"]
    C --> D["<div>$$Q = 502,000 \text{ J}$$</div>"]

    A --> E["<div>$$\frac{a}{b} = c$$</div>"]
    E --> F["<div>$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$</div>"]

    A --> G["<div>$$E = mc^2$$</div>"]
    G --> H["<div>$$\alpha + \beta = \gamma$$</div>"]
```


## Hee-Mind map sample
---

###TB ver.

```mermaid
graph TB

A["<div>$$Q_{h.b.mth} = d_{op}(1 - \eta_{op}) Q_{source,op} + d_{we}(1 - \eta_{we}) Q_{source,we}$$<br/>(2-7)</div>"]

B["<div>$$Q_{h.c} = (1 - \eta) Q_{source}$$<br/>(2-1)</div>"]

C["<div>$$Q_{source} = Q_S + Q_T + Q_V + Q_{I,source}$$<br/>(2-16)</div>"]

D["<div>$$\eta = \frac{1 - \gamma}{1 - \gamma^{\alpha + 1}}, \quad \gamma \neq 1$$<br/>(2-23)</div>"]

E["<div>$$\eta = \frac{a}{\alpha + 1}, \quad \gamma = 1$$<br/>(2-24)</div>"]

F["<div>$$\gamma = \frac{Q_{source}}{Q_{sink}}$$<br/>(2-21)</div>"]

G["<div>$$Q_{sink} = Q_T + Q_V + Q_{I,sink} + Q_S$$<br/>(2-11)</div>"]

%% 관계 연결
A --> B
B --> C
B --> D
B --> E
D --> F
E --> F
F --> C
F --> G

%% 노드 스타일
style A fill:#FFE0E0,stroke:#FFB6B6,stroke-width:2px
style B fill:#FFF4CC,stroke:#FFD966,stroke-width:2px
style C fill:#E2F0CB,stroke:#B6D7A8,stroke-width:2px
style D fill:#D9E1F2,stroke:#A4C2F4,stroke-width:2px
style E fill:#D9E1F2,stroke:#A4C2F4,stroke-width:2px
style F fill:#FCE5CD,stroke:#F6B26B,stroke-width:2px
style G fill:#D9D2E9,stroke:#B4A7D6,stroke-width:2px

%% 전체 링크 스타일
linkStyle default stroke:#999,stroke-width:1.5px

```


###LR ver.
```mermaid
graph LR

%% 노드 정의
A["<div>$$Q_{h.b.mth} = d_{op}(1 - \eta_{op}) Q_{source,op} + d_{we}(1 - \eta_{we}) Q_{source,we}$$<br/>(2-7)</div>"]

B["<div>$$Q_{h.c} = (1 - \eta) Q_{source}$$<br/>(2-1)</div>"]

C["<div>$$Q_{source} = Q_S + Q_T + Q_V + Q_{I,source}$$<br/>(2-16)</div>"]

D["<div>$$\eta = \frac{1 - \gamma}{1 - \gamma^{\alpha + 1}}, \quad \gamma \neq 1$$<br/>(2-23)</div>"]

E["<div>$$\eta = \frac{a}{\alpha + 1}, \quad \gamma = 1$$<br/>(2-24)</div>"]

F["<div>$$\gamma = \frac{Q_{source}}{Q_{sink}}$$<br/>(2-21)</div>"]

G["<div>$$Q_{sink} = Q_T + Q_V + Q_{I,sink} + Q_S$$<br/>(2-11)</div>"]

%% 관계 연결
A --> B
B --> C
B --> D
B --> E
D --> F
E --> F
F --> C
F --> G

%% 노드 스타일
style A fill:#FFE0E0,stroke:#FFB6B6,stroke-width:2px
style B fill:#FFF4CC,stroke:#FFD966,stroke-width:2px
style C fill:#E2F0CB,stroke:#B6D7A8,stroke-width:2px
style D fill:#D9E1F2,stroke:#A4C2F4,stroke-width:2px
style E fill:#D9E1F2,stroke:#A4C2F4,stroke-width:2px
style F fill:#FCE5CD,stroke:#F6B26B,stroke-width:2px

%% 전체 그래프 스타일
linkStyle default stroke:#999,stroke-width:1.5px
```


###TB+LR ver.
```mermaid
graph TB

%% 상단 주요 흐름 (세로)
A["<div>$$Q_{h.b.mth} = d_{op}(1 - \eta_{op}) Q_{source,op} + d_{we}(1 - \eta_{we}) Q_{source,we}$$<br/>(2-7)</div>"]

B["<div>$$Q_{h.c} = (1 - \eta) Q_{source}$$<br/>(2-1)</div>"]

C["<div>$$Q_{source} = Q_S + Q_T + Q_V + Q_{I,source}$$<br/>(2-16)</div>"]

F["<div>$$\gamma = \frac{Q_{source}}{Q_{sink}}$$<br/>(2-21)</div>"]


A --> B
B --> C
F --> C

%% η 관련 수식 (가로 subgraph로 묶기)
subgraph ETA["η 정의"]
  direction LR
  D["<div>$$\eta = \frac{1 - \gamma}{1 - \gamma^{\alpha + 1}}, \quad \gamma \neq 1$$<br/>(2-23)</div>"]
  E["<div>$$\eta = \frac{a}{\alpha + 1}, \quad \gamma = 1$$<br/>(2-24)</div>"]
end

B --> D
B --> E
D --> F
E --> F

%% 노드 스타일
style A fill:#FFE0E0,stroke:#FFB6B6,stroke-width:2px
style B fill:#FFF4CC,stroke:#FFD966,stroke-width:2px
style C fill:#E2F0CB,stroke:#B6D7A8,stroke-width:2px
style D fill:#D9E1F2,stroke:#A4C2F4,stroke-width:2px
style E fill:#D9E1F2,stroke:#A4C2F4,stroke-width:2px
style F fill:#FCE5CD,stroke:#F6B26B,stroke-width:2px

linkStyle default stroke:#999,stroke-width:1.5px
```