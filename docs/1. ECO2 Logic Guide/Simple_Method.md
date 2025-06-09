# Simple Method 

## 🔹 Introduction
냉방 부하 계산은 건물의 열 부하를 평가하고 냉방 시스템의 성능을 최적화하는 과정입니다.  
이를 통해 적정 용량을 설정하고 에너지 효율을 높일 수 있습니다.

냉방 부하 계산에는 다양한 접근 방식이 있으며, ECO2에서는 간단하면서도 직관적인 Simple Method를 활용합니다.  

---
<center>
  <img src="../../images/fig1.jpg" width="600" alt="Energy Flow Diagram">
  <div><strong>Figure 1. Energy Flow Diagram</strong></div>
</center>

<!--만일 센터 정렬 안하려면 다음과 같이 간단히 표현 가능
![Energy Flow Diagram](../../images/fig1.jpg)
**Figure 1. Energy Flow Diagram** -->


## 🔹 Key Formula
The core equation for heat energy calculation is:

$$
Q = mc\Delta T
$$

Where:  
- **Q** = Heat energy (Joules)  
- **m** = Mass (kg)  
- **c** = Specific heat capacity (J/kg·K)  
- **ΔT** = Temperature change (K)

---

## 🔹 Example Calculation
Let's calculate the energy required to heat 2 kg of water from 20°C to 80°C. Assuming water's specific heat capacity is \( 4.18 \ \mathrm{J/g \cdot K} \)..

$$
Q = (2 \times 1000) \times 4.18 \times (80 - 20) = 502,000 \ \text{J}
$$

---

## 🔹 Mindmap Overview

```mermaid
graph TD
    A["Heat Energy Calculation"] --> B["<div>$$Q = mc\Delta T$$</div>"]
    B --> C["<div>$$Q = (2 \times 1000) \times 4.18 \times (80 - 20)$$</div>"]
    C --> D["<div>$$Q = 502,000 J$$</div>"]
```

``` mermaid
graph TD
    A[Mermaid Examples] --> B[Flowcharts]
    B --> B1[Start/End]
    B --> B2[Decision Nodes]
    B --> B3[Process Steps]

    A --> C[Sequence Diagrams]
    C --> C1[Actors]
    C --> C2[Messages]
    C --> C3[Loops]

    A --> D[Gantt Charts]
    D --> D1[Tasks]
    D --> D2[Milestones]

    A --> E[Mindmaps]
    E --> E1[Concepts]
    E --> E2[Ideas]
    E --> E3[Inspiration]
```


``` mermaid
graph TD
    A[Start] --> B{Who's Awesome?}
    B -->|전성희님| C[전성희님은 최고입니다]
    C --> D["(택시 후원 감사합니다)"]
    B -->|You| E[You're Awesome Too!]

```

``` mermaid
graph TD
    A[Start] --> B{Have Dependencies Installed?}
    B -->|Yes| C{Is Mermaid Configured Correctly?}
    B -->|No| D[Install Dependencies]

    C -->|Yes| E[Success!]
    C -->|No| F{Check Code Structure?}

    F -->|Yes| G[Fix Code]
    F -->|No| H[Check Mermaid Version]
    H --> I[Update Mermaid Library]
```

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

왜 안될꼬...?