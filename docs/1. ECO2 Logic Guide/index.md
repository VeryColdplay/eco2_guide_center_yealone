# ECO2 로직 가이드


---
Explore the following sections:

- [ECO2 사용자 도움말](ECO2_사용자_도움말/ECO2_소개.md)
- [고급 기능](고급_기능/IFC_모델_연동.md)
- [냉방 에너지 분석](냉방_에너지_분석/개요.md)
- [신재생에너지 시스템 분석](신재생에너지_시스템_분석/결과값_해석.md)


<!DOCTYPE html>
<html class="no-js" lang="ko">
<head>
  <meta charset="UTF-8">
  <title>프로그램 평가 프로세스</title>
  <!-- Mermaid CDN -->
  <script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
    mermaid.initialize({ startOnLoad: true });
  </script>
  <style>
    body {
      font-family: sans-serif;
      padding: 30px;
    }
    .mermaid a {
      color: #1a73e8;
      text-decoration: underline;
    }
  </style>
</head>
<body>

<h2>프로그램 평가 프로세스</h2>

<div class="mermaid">
    flowchart LR
    subgraph Input["입력 정보"]
        A["<a href='weather.html' target='_blank'>기상데이터</a>"]
        B["<a href='profile.html' target='_blank'>존의 용도별 프로필<br>(사용시간, 운전시간,<br>외기도입량, 설정온도,<br>월간 사용일수 등)</a>"]
    end

    A --> C["<a href='energy.html' target='_blank'>존의 에너지요구량<br>난방, 냉방</a>"]
    B --> C

    C -->|공급손실| D1["<a href='hvac.html' target='_blank'>공조시설의 에너지요구량<br>난방, 냉방, 가습, 제습</a>"]
    C -->|분배손실| D1

    D1 -->|공기매체| E1["<a href='air.html' target='_blank'>급기 및 배기</a>"]
    D1 --> F1["<a href='lighting.html' target='_blank'>조명</a>"]

    D1 -->|물매체| G1["<a href='secondary.html' target='_blank'>2차 에너지<br>열, 냉열 증가</a>"]
    G1 -->|보조에너지| H1["<a href='primary.html' target='_blank'>1차 에너지</a>"]
    E1 --> H1
    F1 --> H1

    style A fill:#d5f4d4,stroke:#888,stroke-width:1px
    style B fill:#f0f0f0,stroke:#888,stroke-width:1px
    style C fill:#b8d7f9,stroke:#555,stroke-width:1px
    style D1 fill:#ffe599,stroke:#555,stroke-width:1px
    style E1 fill:#ccc,stroke:#555
    style F1 fill:#ccc,stroke:#555
    style G1 fill:#d9ead3,stroke:#555
    style H1 fill:#a2c4c9,stroke:#444

    linkStyle default stroke:#333,stroke-width:1px
</div>

</body>
</html>

# 프로그램 평가 프로세스


```mermaid
flowchart LR
    subgraph Input["입력 정보"]
        A["기상데이터"]
        B["존의 용도별 프로필\n(사용시간, 운전시간,\n외기도입량, 설정온도,\n월간 사용일수 등)"]
    end

    A --> C["존의 에너지요구량\n(난방, 냉방)"]
    B --> C

    C -->|공급손실| D1["공조시설의 에너지요구량\n(난방, 냉방, 가습, 제습)"]
    C -->|분배손실| D1

    D1 -->|공기매체| E1["급기 및 배기"]
    D1 --> F1["조명"]

    D1 -->|물매체| G1["2차 에너지\n(열, 냉열 증가)"]
    G1 -->|보조에너지| H1["1차 에너지"]
    E1 --> H1
    F1 --> H1

    %% 링크 설정 (숨겨진 HTML 파일 연결)
    click A "resources/weather.html" "_blank"
    click B "resources/profile.html" "_blank"
    click C "resources/energy.html" "_blank"
    click D1 "resources/hvac.html" "_blank"
    click E1 "resources/air.html" "_blank"
    click F1 "resources/lighting.html" "_blank"
    click G1 "resources/secondary.html" "_blank"
    click H1 "resources/primary.html" "_blank"

    %% 스타일 설정
    style A fill:#d5f4d4,stroke:#888,stroke-width:1px
    style B fill:#f0f0f0,stroke:#888,stroke-width:1px
    style C fill:#b8d7f9,stroke:#555,stroke-width:1px
    style D1 fill:#ffe599,stroke:#555,stroke-width:1px
    style E1 fill:#ccc,stroke:#555
    style F1 fill:#ccc,stroke:#555
    style G1 fill:#d9ead3,stroke:#555
    style H1 fill:#a2c4c9,stroke:#444

    linkStyle default stroke:#333,stroke-width:1px
```


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


# 프로그램 평가 프로세스


\( A\ building's\ energy\ demand\ per\ area\ =\ \sum_{}^{} (Each\ zones'\ energy\ demand\ per\ area) \) 


```mermaid
flowchart LR
    subgraph Input["INPUT"]
        NoteA["<div>$$Each\ zone's\ energy\ demand$$</div>"] --- A["Standard conditions"] 
        A --- B["External (Whole-zone) conditions\n(e.g. weather data)"] --- I["Internal (by zone) conditions\n(e.g. zone profile,\n envelope physical data)"]
    end

    Input --> C["<div>$$Calculation\ of\ each\ zone's\ energy\ demand\ per\ area$$</div>"]

    subgraph Output["OUTPUT"]
        direction TB
        NoteB["<div>$$Each\ zone's\ energy\ demand$$</div>"] --- D["Heating energy demand"]
        D --- E["Cooling energy demand"]
        E --- F["Hot water energy demand"]
        F --- G["Ventilating energy demand"]
        G --- H["Lighting energy demand"]
    end

    C --> Output

    %% 링크 설정
    click A "/eco2_guide_center_yealone/1.%20ECO2%20Logic%20Guide/Standard_conditions.html" "_blank"
    click B "/eco2_guide_center_yealone/1.%20ECO2%20Logic%20Guide/External_conditions.html" "_blank"
    click C "프로그램_평가_프로세스.html" "_blank"
    click D "hvac.html" "_blank"
    click E "/eco2_guide_center_yealone/1.%20ECO2%20Logic%20Guide/냉방%20에너지%20분석/Cooling_energy_demand.html" "_blank"
    click F "/eco2_guide_center_yealone/1.%20ECO2%20Logic%20Guide/냉방%20에너지%20분석/Simple_Method.html" "_blank"
    click G "secondary.html" "_blank"
    click H "primary.html" "_blank"
    click I "/eco2_guide_center_yealone/1.%20ECO2%20Logic%20Guide/Internal_conditions.html" "_blank"

    %% 스타일 설정
    style A fill:#d5f4d4,stroke:#888,stroke-width:1px
    style B fill:#f0f0f0,stroke:#888,stroke-width:1px
    style C fill:#b8d7f9,stroke:#555,stroke-width:1px
    style D fill:#ffe599,stroke:#555,stroke-width:1px
    style E fill:#ccc,stroke:#555
    style F fill:#ccc,stroke:#555
    style G fill:#d9ead3,stroke:#555
    style H fill:#a2c4c9,stroke:#444

    %% 핵심: Note 노드 스타일을 Mermaid 방식으로 지정
    style NoteA fill:transparent,stroke:transparent,stroke-width:0px,color:#444,font-size:8px,font-style:italic
    style NoteB fill:transparent,stroke:transparent,stroke-width:0px,color:#444,font-size:8px,font-style:italic

    %% 링크선 스타일
    linkStyle 0 stroke:transparent,stroke-width:0.1px
    linkStyle 1 stroke:transparent,stroke-width:0.1px
    linkStyle 2 stroke:transparent,stroke-width:0.1px
    linkStyle 3 stroke:#333,stroke-width:1px
    linkStyle 4 stroke:transparent,stroke-width:0.1px
    linkStyle 5 stroke:transparent,stroke-width:0.1px
    linkStyle 6 stroke:transparent,stroke-width:0.1px
    linkStyle 7 stroke:transparent,stroke-width:0.1px 
    linkStyle 8 stroke:transparent,stroke-width:0.1px 
    linkStyle 9 stroke:#333,stroke-width:1px
```



# 프로그램 평가 프로세스

\( A\ building's\ energy\ demand\ per\ area\ =\ \sum_{}^{} (Each\ zones'\ energy\ demand\ per\ area) \)

```mermaid
flowchart LR
    subgraph Input["INPUT"]
        NoteA["<div>Each zone's energy demand</div>"] --- A["<a href='/eco2_guide_center_yealone/1.%20ECO2%20Logic%20Guide/Standard_conditions.html' target='_blank'>Standard conditions</a>"] 
        A --- B["<a href='/eco2_guide_center_yealone/1.%20ECO2%20Logic%20Guide/External_conditions.html' target='_blank'>
External (whole-zone) conditions</a>"<br><span style='font-size:90%'>e.g. weather data</span>] 
        B --- I["<a href='/eco2_guide_center_yealone/1.%20ECO2%20Logic%20Guide/Internal_conditions.html' target='_blank'>
Internal (by zone) conditions<br><span style='font-size:90%'>e.g. zone profile,<br>envelope physical data</span></a>"]
    end

    Input --> C["<a href='프로그램_평가_프로세스.html' target='_blank'>Calculation of each zone's energy demand per area</a>"]

    subgraph Output["OUTPUT"]
        direction TB
        NoteB["<div>Each zone's energy demand</div>"] --- D["<a href='hvac.html' target='_blank'>Heating energy demand</a>"]
        D --- E["<a href='/eco2_guide_center_yealone/1.%20ECO2%20Logic%20Guide/냉방%20에너지%20분석/Cooling_energy_demand.html' target='_blank'>Cooling energy demand</a>"]
        E --- F["<a href='/eco2_guide_center_yealone/1.%20ECO2%20Logic%20Guide/냉방%20에너지%20분석/Simple_Method.html' target='_blank'>Hot water energy demand</a>"]
        F --- G["<a href='secondary.html' target='_blank'>Ventilating energy demand</a>"]
        G --- H["<a href='primary.html' target='_blank'>Lighting energy demand</a>"]
    end

    C --> Output

    %% 스타일 설정
    style A fill:#d5f4d4,stroke:#888,stroke-width:1px
    style B fill:#f0f0f0,stroke:#888,stroke-width:1px
    style C fill:#b8d7f9,stroke:#555,stroke-width:1px
    style D fill:#ffe599,stroke:#555,stroke-width:1px
    style E fill:#ccc,stroke:#555
    style F fill:#ccc,stroke:#555
    style G fill:#d9ead3,stroke:#555
    style H fill:#a2c4c9,stroke:#444

    style NoteA fill:transparent,stroke:transparent,stroke-width:0px,color:#444,font-style:italic
    style NoteB fill:transparent,stroke:transparent,stroke-width:0px,color:#444,font-style:italic

    %% 링크선 스타일
    linkStyle 0 stroke:transparent,stroke-width:0.1px
    linkStyle 1 stroke:transparent,stroke-width:0.1px
    linkStyle 2 stroke:transparent,stroke-width:0.1px
    linkStyle 3 stroke:#333,stroke-width:1px
    linkStyle 4 stroke:transparent,stroke-width:0.1px
    linkStyle 5 stroke:transparent,stroke-width:0.1px
    linkStyle 6 stroke:transparent,stroke-width:0.1px
    linkStyle 7 stroke:transparent,stroke-width:0.1px 
    linkStyle 8 stroke:transparent,stroke-width:0.1px 
    linkStyle 9 stroke:#333,stroke-width:1px
```



# 프로그램 평가 프로세스

\( A\ building's\ energy\ demand\ per\ area\ =\ \sum_{}^{} (Each\ zones'\ energy\ demand\ per\ area) \)

```mermaid
flowchart LR
    subgraph Input["INPUT"]
        NoteA["<div>Each zone's energy demand</div>"] --- A["<a href='/eco2_guide_center_yealone/1.%20ECO2%20Logic%20Guide/Standard_conditions.html' target='_blank'>Standard conditions</a>"] 
        A --- B["<a href='/eco2_guide_center_yealone/1.%20ECO2%20Logic%20Guide/External_conditions.html' target='_blank'>External (Whole-zone) conditions<br><span style='font-size:90%'>e.g. weather data</span></a>"]
        B --- I["<a href='/eco2_guide_center_yealone/1.%20ECO2%20Logic%20Guide/Internal_conditions.html' target='_blank'>Internal (by zone) conditions<br><span style='font-size:90%'>e.g. zone profile,<br>envelope physical data</span></a>"]
    end

    Input --> C["<a href='프로그램_평가_프로세스.html' target='_blank'>Calculation of each zone's energy demand per area</a>"]

    subgraph Output["OUTPUT"]
        direction TB
        NoteB["<div>Each zone's energy demand</div>"] --- D["<a href='hvac.html' target='_blank'>Heating energy demand</a>"]
        D --- E["<a href='/eco2_guide_center_yealone/1.%20ECO2%20Logic%20Guide/냉방%20에너지%20분석/Cooling_energy_demand.html' target='_blank'>Cooling energy demand</a>"]
        E --- F["<a href='/eco2_guide_center_yealone/1.%20ECO2%20Logic%20Guide/냉방%20에너지%20분석/Simple_Method.html' target='_blank'>Hot water energy demand</a>"]
        F --- G["<a href='secondary.html' target='_blank'>Ventilating energy demand</a>"]
        G --- H["<a href='primary.html' target='_blank'>Lighting energy demand</a>"]
    end

    C --> Output

    %% 스타일 설정
    style A fill:#d5f4d4,stroke:#888,stroke-width:1px
    style B fill:#f0f0f0,stroke:#888,stroke-width:1px
    style C fill:#b8d7f9,stroke:#555,stroke-width:1px
    style D fill:#ffe599,stroke:#555,stroke-width:1px
    style E fill:#ccc,stroke:#555
    style F fill:#ccc,stroke:#555
    style G fill:#d9ead3,stroke:#555
    style H fill:#a2c4c9,stroke:#444

    style NoteA fill:transparent,stroke:transparent,stroke-width:0px,color:#444,font-style:italic
    style NoteB fill:transparent,stroke:transparent,stroke-width:0px,color:#444,font-style:italic

    %% 링크선 스타일
    linkStyle 0 stroke:transparent,stroke-width:0.1px
    linkStyle 1 stroke:transparent,stroke-width:0.1px
    linkStyle 2 stroke:transparent,stroke-width:0.1px
    linkStyle 3 stroke:#333,stroke-width:1px
    linkStyle 4 stroke:transparent,stroke-width:0.1px
    linkStyle 5 stroke:transparent,stroke-width:0.1px
    linkStyle 6 stroke:transparent,stroke-width:0.1px
    linkStyle 7 stroke:transparent,stroke-width:0.1px 
    linkStyle 8 stroke:transparent,stroke-width:0.1px 
    linkStyle 9 stroke:#333,stroke-width:1px
```

