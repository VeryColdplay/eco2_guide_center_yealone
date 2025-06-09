# ECO2 로직 가이드

Explore the following sections:

- [ECO2 사용자 도움말](ECO2_사용자_도움말/ECO2_소개.md)
- [고급 기능](고급_기능/IFC_모델_연동.md)
- [냉방 에너지 분석](냉방_에너지_분석/개요.md)
- [신재생에너지 시스템 분석](신재생에너지_시스템_분석/결과값_해석.md)

---


<h2>프로그램 평가 프로세스</h2>
<h3> Version 1 </h3>


```mermaid
flowchart LR
    classDef processing font-family:'Pretendard', text-decoration: none;

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

    class A processing
    class B processing
    class C processing
    class D1 processing
    class E1 processing
    class F1 processing
    class G1 processing
    class H1 processing
```


<h3> Version 2 </h3>


\( A\ building's\ energy\ demand\ per\ area\ =\ \sum_{}^{} (Each\ zones'\ energy\ demand\ per\ area) \) 


```mermaid
flowchart LR
    classDef processing font-family:'Pretendard', text-decoration: none;

    subgraph Input["INPUT"]
        NoteA["$$Each\ zone's\ energy\ demand$$"] --- A["Standard conditions"]
        A --- B["External (Whole-zone) conditions\n(e.g. weather data)"] --- I["Internal (by zone) conditions\n(e.g. zone profile,\n envelope physical data)"]
    end

    Input --> C["$$Calculation\ of\ each\ zone's\ energy\ demand\ per\ area$$"]

    subgraph Output["OUTPUT"]
        direction TB
        NoteB["$$Each\ zone's\ energy\ demand$$"] --- D["Heating energy demand"]
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
    linkStyle 3 stroke:#333,stroke-width:1px
    linkStyle 9 stroke:#333,stroke-width:1px

    linkStyle default stroke:transparent,stroke-width:0.1px

    class A processing
    class B processing
    class C processing
    class D processing
    class E processing
    class F processing
    class G processing
    class H processing
    class I processing
    class Input processing
    class Output processing

```



